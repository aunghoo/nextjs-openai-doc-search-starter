# Flow Core Action for Salesforce Anywhere: Send Salesforce Anywhere Alerts to Users \(Beta\)

Notify users about Salesforce Anywhere chat by specifying the chat URL and the users to be added.



In Flow Builder, add an Action element to your flow. Select the Salesforce Anywhere category, and search for alert. Select **Send Alert**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the alert.

|Input Parameter|Description|
|---------------|-----------|
|alertMessage|The message sent in the alert.This parameter accepts single-value resources of any type. That value is treated as text.

|
|userEmails|A comma-separated list of the users’ email addresses.This parameter accepts single-value resources of any type. That value is treated as text.

|
|recordId|The ID of the Salesforce record to send to the chat. The record's compact layout is displayed in the chat.This parameter accepts single-value resources of any type. That value is treated as text.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|eventOperationId|The unique ID generated for the alert.This parameter accepts single-value resources of any type. That value is treated as text.

|

**Parent topic:**[Salesforce Anywhere Core Flow Actions \(Beta\)](../flow/flow_ref_elements_actions_anywhere_action_list.md)

**Related information**  


[*Platform Events Developer Guide*: Platform Events Considerations](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_event_extras.htm)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

