# Flow Core Action for Quip: Send Message in Quip Chat

Send a message in a chat room.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Send Message in Quip Chat**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Chat URL|URL of the chat room where you want your message to appear.|
|Message|Chat message sent to the chat room. Valid values are:-   String values
-   @\[Salesforce user ID\]–To @mention a Salesforce user in the chat room, enter the Salesforce ID. If the user’s Salesforce email is connected to Quip, the user ID is replaced with a Quip user @mention. If not, the Salesforce ID is replaced with the user’s Salesforce email.
-   @\[person1@quip.com\]–To @mention a user by email, enter this value.
-   @Everyone–To send a notification to all chat room members, enter this value.

|

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

