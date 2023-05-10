# Flow Core Action for Salesforce Anywhere: Add a Message to a Salesforce Anywhere Chat \(Beta\)

Add a message to an existing Salesforce Anywhere chat by specifying the chat URL and message content.



In Flow Builder, add an Action element to your flow. Select the Salesforce Anywhere category, and search for message. Select **Add Message to Chat**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the message.

|Input Parameter|Description|
|---------------|-----------|
|chatUrl|The chat's URL.This parameter accepts single-value resources of any type. That value is treated as text.

|
|chatMessage|The message to send to the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|
|recordId|The ID of the Salesforce record to send to the chat. The record's compact layout is displayed in the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|chatId|The chat’s ID.This parameter accepts single-value resources of any type. That value is treated as text.

|
|chatMessage|The message sent to the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|
|chatUrl|The chat’s URL.This parameter accepts single-value resources of any type. That value is treated as text.

|
|recordId|The ID of the record sent to the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|

## Usage

Only existing chat members can trigger this action. For example, only an existing chat member can successfully run a flow that sends a message to a chat about a service case when that case record is updated.

A flow can’t create a record and then reference that new record ID as an input for this action.

The API used for this action has a rate limit of 50 requests per minute and 750 requests per hour.

**Parent topic:**[Salesforce Anywhere Core Flow Actions \(Beta\)](../flow/flow_ref_elements_actions_anywhere_action_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

