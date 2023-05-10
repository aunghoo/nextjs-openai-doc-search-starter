# Flow Core Action for Quip: Lock Quip Section

To mark sections of a document as complete or to keep them safe from accidental edits, lock them.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Lock Quip Section**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Section Anchor Link|Anchor link URL of the document section that you want to lock.|
|Lock Operation|Action of locking or unlocking a document section. Only a user with full access to the document can lock or unlock its sections. Valid values are:-   lock—To lock edits to the document, enter this value.
-   unlock—To let users edit a locked document, enter this value.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Section Lock Operation Result|Success marker of whether the section was locked or unlocked. Possible results are true or false.|

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

