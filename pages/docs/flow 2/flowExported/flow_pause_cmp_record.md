# Make It Easy for Users to Find Paused Flow Interviews for a Record

From a record page, display a list of all paused flow interviews that are associated with that record with this custom Aura component.

This example uses the Apex controller to get a list of interviews that are associated with the record. The component then displays the interviews in a table. For each interview, the component displays an action menu from which the user can resume or delete the interview.

When the user clicks **Resume**, the helper fires the navigateFlow action to resume the interview. When the user clicks **Delete**, the Apex controller deletes the interview.

**`__c:interviewsByRecord__` Component**

```
<aura:component controller="interviewsByRecordController" implements="flexipage:availableForRecordHome,force:hasRecordId" access="global" >
    <aura:attribute name="columns" type="List" default=""/>
    <aura:attribute name="Interviews" type="Object" />
    <aura:attribute name="recordId" type="Id" />
    <aura:attribute name="ContextRecord" type="Object" />
    <aura:attribute name="overlay" type="Aura.Component"/>
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <aura:handler event="force:refreshView" action="{!c.init}" />
 
    <force:recordData aura:id="contextRecord" recordId="{!v.recordId}"
       targetFields="{!v.ContextRecord}" layoutType="FULL"/>
 
    <lightning:overlayLibrary aura:id="overlayLib" />
    <lightning:card iconName="standard:flow" class="slds-card_boundary">
        <aura:set attribute="title">
            <span class="slds-card__header-link">Paused Flow Interviews</span>
        </aura:set>
        <aura:set attribute="actions">
            <lightning:buttonIcon iconName="utility:refresh" onclick="{!c.init}" 
                                  alternativeText="Refresh the list of interviews" />
        </aura:set>
     <table class="slds-table slds-table--bordered slds-table--cell-buffer 
        slds-table_fixed-layout">
       <thead>
          <tr class="slds-text-heading--label">
             <th scope="col"><div class="slds-truncate">Interview Label</div></th>
             <th scope="col"><div class="slds-truncate">Pause Reason</div></th>
             <th scope="col"><div class="slds-truncate">Paused Date</div></th> 
             <th scope="col"><div class="slds-truncate">Current Element</div></th>
             <th scope="col"><div class="slds-truncate">Owner</div></th>
             <th scope="col" style="width: 3.25rem;"><div class="slds-truncate"/>
                 <div class="slds-th__action">
                    <span class="slds-assistive-text">Actions</span>
                 </div>
              </th>
          </tr>
       </thead>
       <tbody>
          <!-- Use the Apex controller to fetch interviews associated 
            with this record -->
          <aura:iteration items="{!v.Interviews}" var="interview">
             <tr>
                 <th scope="row">
                    <div class="slds-truncate" title="{!interview.InterviewLabel}">
                        {!interview.InterviewLabel}
                     </div>
                 </th>
                 <td role="gridcell">
                     <div class="slds-truncate" title="{!interview.PauseLabel}">
                         {!interview.PauseLabel}
                     </div>
                 </td>
                 <td role="gridcell">
                     <div class="slds-truncate" title="{!interview.PausedDate}">
                         <ui:outputDateTime value="{!interview.PausedDate}" 
                            format="M/d/y h:m a"/>
                     </div>
                 </td>
                 <td role="gridcell">
                     <div class="slds-truncate" title="{!interview.CurrentElement}">
                         {!interview.CurrentElement}
                     </div>
                 </td>
                 <td role="gridcell">
                     <div class="slds-truncate" title="{!interview.PausedBy}">
                         {!interview.PausedBy}
                     </div>
                 </td>
                 <td role="gridcell">
                     <!-- Display Resume and Delete actions in a menu at the 
                        end of each row -->
                     <div class="slds-shrink-none">
                         <lightning:buttonMenu iconSize="x-small" 
                            class="paused-interview-card-row-menu"
                             alternativeText="Actions for this interview" 
                             onselect="{! c.handleMenuSelect }">
                             <lightning:menuItem aura:id="{!interview.Id + 'resume'}" 
                                label="Resume" value="{!interview.Id + '.resume'}" />
                             <lightning:menuItem aura:id="{!interview.Id + 'delete'}" 
                                label="Delete" value="{!interview.Id + '.delete'}"/>
                         </lightning:buttonMenu>
                      </div>
                </td>
             </tr>
          </aura:iteration>
       </tbody>
    </table>
    </lightning:card>
</aura:component>
```

**Apex Controller**

```
public class interviewsByRecordController {

    @AuraEnabled
    public static List<FlowRecordRelation> getInterviews(Id recordId) {
        return [ SELECT 
                    ParentId, Parent.InterviewLabel, Parent.PauseLabel, 
                    Parent.CurrentElement, Parent.CreatedDate, Parent.Owner.Name 
                FROM FlowRecordRelation 
                WHERE RelatedRecordId = :recordId ];
    }

    @AuraEnabled
    public static FlowInterview deleteInterview(Id interviewId) {
        FlowInterview interview = [Select Id from FlowInterview Where Id = :interviewId];
        delete interview;
        return interview;
    }
}
```

**`__c:interviewsByRecord__` JavaScript Controller**

```
({
   init : function(component, event, helper) {
      helper.populateTable(component, event, helper);
   },
    
   handleMenuSelect: function(component, event, helper) {
      // Figure out which action was selected
      var interviewAction = event.getParam("value").split(".");
      if(interviewAction.includes("resume")) {
         helper.handleShowModal(component, interviewAction[0]);
      } else if(interviewAction.includes("delete")) {
         helper.handleDelete(component, event, helper, interviewAction[0]);
      }
   },
   
   statusChange: function(component, event) {
      // When the interview finishes, close the overlay
      if(event.getParam("status").includes("FINISHED")) {
         component.get("v.overlay").close();
      }
   }
})
```

**`__c:interviewsByRecord__` Helper**

```
({
    populateTable : function(component, event, helper) {
        var action = component.get("c.getInterviews");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Push interviews fetched by the Apex controller to the component
                var recordRelations = response.getReturnValue();
                var interviews = [];
                for (var i = 0; i < recordRelations.length; i++) {
                    interviews.push(
                        {
                            Id: recordRelations[i].ParentId,
                            InterviewLabel: recordRelations[i].Parent.InterviewLabel,
                            PauseLabel: recordRelations[i].Parent.PauseLabel,
                            CurrentElement: recordRelations[i].Parent.CurrentElement,
                            PausedDate: recordRelations[i].Parent.CreatedDate,
                            PausedBy: recordRelations[i].Parent.Owner.Name
                        });
                }
                component.set('v.Interviews', interviews);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    
    handleShowModal: function (component, id) {
        // On resume, render the interview in a modal
        $A.createComponent("lightning:flow", {"onstatuschange": component.get("c.statusChange")},
            function (content, status) {
                if (status === "SUCCESS") {
                    component.find('overlayLib').showCustomModal({
                        body: content,
                        showCloseButton: true,
                        closeCallback: function () {
                            $A.get('e.force:refreshView').fire();
                        }
                    }).then(function(overlay) {
                        // Use to close the modal later
                        component.set("v.overlay", overlay);
                    });
                    content.resumeFlow(id);
                }
            });
    },
    
    handleDelete: function (component, event, helper, id) {
        // On delete, pass the interview ID to the Apex controller        
        var action = component.get("c.deleteInterview");
        action.setParams({
            interviewId: id
        });
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Automatically refresh the table
                helper.populateTable(component, event, helper);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})
```

**Parent topic:**[Prepare for Paused Interviews](../flow/flow_pause_prep.md)

