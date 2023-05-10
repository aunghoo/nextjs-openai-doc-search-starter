# Flow Core Action for Quip: Send a Message in a Document

Add a message to the conversations pane of a document.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Send Message in Document**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Document URL|URL of the document where you want to add a comment.|
|Message|Message added to the document. Valid values are:-   String values
-   @\[Salesforce user ID\]–To @mention a Salesforce user in the document, enter the Salesforce ID. If the user’s Salesforce email is connected to Quip, the user ID is replaced with a Quip user @mention. If not, the Salesforce ID is replaced with the user’s Salesforce email.
-   @\[person1@quip.com\]–To @mention a user by email, enter this value.
-   @Everyone–To send a notification to everyone in the document, enter this value.

|
|Section Anchor Link|Optional. URL of a section in the document where you want the message to appear.|

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

