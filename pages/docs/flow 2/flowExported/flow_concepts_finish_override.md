# Redirect Flow Users with a Local Action

By default, when a flow finishes, a new interview starts and the user sees the first screen of the flow. To instead redirect the user to another page, build or install a local action that does so. Then add the action to your flow with a Core Action element. For example, a local action can open a record, list view, or URL or to show a toast message. Or it can use the Lightning Console JavaScript API to close a console tab.

|Available in: Lightning Experience|

**Note:** Local actions that fire `force` or `lightning` events might not work properly when you run the flow from:

-   Flow Builder
-   Flow detail pages or list views
-   Web tabs
-   Custom buttons and links

Instead, test and distribute the flow with a Lightning page, Experience Builder page, flow action, or utility bar. Your developer can also add the appropriate event handlers directly to the component.

A flow creates a lead using information entered in the Lead Info screen. Then it executes the Open Lead local action, which passes the lead ID into an Aura component by using the Record ID attribute. The component uses a Lightning event to open the created lead.

![Example flow that creates a lead and then opens that lead in another tab](images/flow_finish_override_ex.png)

![The inputs on the Local Action pass the leadId variable into the Record ID attribute in the Aura component](images/flow_finish_override_inputs.png)

Let’s look at the Aura component that the local action calls: `c:navigateToRecord`.

**Component Markup**

```
<aura:component implements="force:lightningQuickAction, lightning:availableForFlowActions">
   <aura:attribute name="recordId" type="String" />
</aura:component>
```

**Design Resource**

The `recordId` attribute is declared in the design resource so that it’s configurable in the local action.

```
<design:component>
   <design:attribute name="recordId" label="Record ID" />
</design:component>
```

**Client-Side Controller**

When the local action is executed, the flow calls the `invoke` method, which uses the `force:navigateToSObject` event to navigate to the created record.

```
({    invoke : function(component, event, helper) {
   // Get the record ID attribute
   var record = component.get("v.recordId");
   
   // Get the Lightning event that opens a record in a new tab
   var redirect = $A.get("e.force:navigateToSObject");
   
   // Pass the record ID to the event
   redirect.setParams({
      "recordId": record
   });
        
   // Open the record
   redirect.fire();
}})
```

**Parent topic:**[Finish Behavior](../flow/flow_concepts_finish.md)

**Related information**  


[../flow/flow\_concepts\_finish.md](../flow/flow_concepts_finish.md)

[*Lightning Aura Components Developer Guide*: Runtime Considerations for Flows That Include Aura Components](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_runtime.htm)

