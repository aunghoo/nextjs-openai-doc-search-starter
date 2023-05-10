# Flow Core Action for Quip: Lock Quip Document

To mark a document as complete, lock document edits.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Lock Quip Document**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Document URL|URL of the document that you want to lock.|
|Lock Operation|Action of locking or unlocking the document. Only a user with full access to the document can lock or unlock it. Valid values are:-   lock—To lock edits to the document, enter this value.
-   unlock—To let users edit a locked document, enter this value.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Document Lock Operation Result|Success marker of whether the document was locked or unlocked. Possible results are true or false.|

A sales manager wants to lock edits to their reps’ Account Plans after a deal is closed. You can create a flow that uses the Lock Quip Document core action to lock edits to Account Plans when the Opportunity stage is set to Closed Won.

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

