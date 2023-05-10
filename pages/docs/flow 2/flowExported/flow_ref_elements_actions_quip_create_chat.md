# Flow Core Action for Quip: Create Quip Chat

Create a chat room, and send a message to its members.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Create Quip Chat**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Message|Chat message to get the chat room started. Valid values are:-   String values
-   @\[Salesforce user ID\]–To @mention a Salesforce user in the chat room, enter the Salesforce ID. If the user’s Salesforce email is connected to Quip, the user ID is replaced with a Quip user @mention. If not, the Salesforce ID is replaced with the user’s Salesforce email.
-   @\[person1@quip.com\]–To @mention a user by email, enter this value.
-   @Everyone–To send a notification to all chat room members, enter this value.

|
|Add Members by Email Address|Optional. A list of user emails separated by commas to add to the new chat room. Valid values are:-   person1@quip.com, person2@quip.com, person3@quip.com
-   person1@quip.com

|
|Chat Title|The title of the chat room. Only string values are supported.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Chat ID|ID of the new chat room|
|Chat Link|URL of the new chat room|
|Chat Title|Title of the new chat room|

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

