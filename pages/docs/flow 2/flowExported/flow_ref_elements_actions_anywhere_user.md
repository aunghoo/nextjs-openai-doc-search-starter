# Flow Core Action for Salesforce Anywhere: Add Users to a Salesforce Anywhere Chat \(Beta\)

Add users to an existing Salesforce Anywhere chat by specifying the chat URL and the users to be added.



In Flow Builder, add an Action element to your flow. Select the Salesforce Anywhere category, and search for users. Select **Add Users to Chat**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the new users.

|Input Parameter|Description|
|---------------|-----------|
|chatUrl|The chat's URL.This parameter accepts single-value resources of any type. That value is treated as text.

|
|userEmails|Required. A comma-separated list of email addresses belonging to up to 50 users getting added to the chat.Email addresses must be part of your Salesforce Anywhere organization. If an email address isn’t included in your Salesforce Anywhere organization, the user isn’t be included in the chat.

This parameter accepts single-value resources of any type. That value is treated as text.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|chatId|The chat’s ID.This parameter accepts single-value resources of any type. That value is treated as text.

|
|chatUrl|The chat’s URL.This parameter accepts single-value resources of any type. That value is treated as text.

|
|chatTitle|The name users see at the top of the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|

## Usage

In Flow Builder, this action doesn’t check the number of email addresses or the validity of the email addresses. When either criteria is invalid, the flow fails at run time.

Only existing chat members can trigger this action. For example, only an existing chat member can successfully run a flow that adds new users to a chat about a service case when that case record is updated.

The API used for this action has a rate limit of 50 requests per minute and 750 requests per hour.

**Parent topic:**[Salesforce Anywhere Core Flow Actions \(Beta\)](../flow/flow_ref_elements_actions_anywhere_action_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

