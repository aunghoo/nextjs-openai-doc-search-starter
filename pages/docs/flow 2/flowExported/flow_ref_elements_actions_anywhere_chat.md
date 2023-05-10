# Flow Core Action for Salesforce Anywhere: Create a Salesforce Anywhere Chat \(Beta\)

Create a Salesforce Anywhere chat by specifying participants, and optionally, an initial message and chat title.



In Flow Builder, add an Action element to your flow. Select the Salesforce Anywhere category, and search for chat. Select **Create Chat**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the chat.

|Input Parameter|Description|
|---------------|-----------|
|chatMessage|The first message sent to the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|
|userEmails|A comma-separated list of email addresses belonging to one or more users getting added to the chat. Must list at least two email addresses and no more than 50 email addresses.Email addresses must be part of your Salesforce Anywhere organization. If an email address isn’t included in your Salesforce Anywhere organization, the user isn’t included in the chat.

This parameter accepts single-value resources of any type. That value is treated as text.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|chatId|The chat’s ID.This parameter accepts single-value resources of any type. That value is treated as text.

|
|chatTitle|The name users see at the top of the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|
|chatUrl|The chat’s URL.This parameter accepts single-value resources of any type. That value is treated as text.

|

## Usage

In Flow Builder, this action does not check the number of email addresses or the validity of the email addresses. When either criteria is invalid, the flow fails at run time.

The API used for this action has a rate limit of 50 requests per minute and 750 requests per hour.

**Parent topic:**[Salesforce Anywhere Core Flow Actions \(Beta\)](../flow/flow_ref_elements_actions_anywhere_action_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

