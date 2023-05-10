# Flow Core Action for Commerce Checkout Flow: Delete Cart

Delete a cart.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions|

In Flow Builder, add an Action element to your flow. Select the **Commerce** category, and search for **Delete Cart**. To access this action from REST API, use the name `deleteCart`.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Cart State or ID|ID of the cart or state of the cart to delete. Valid state values are: active and current. A current cart is neither closed nor pending deletion.|
|effectiveAccountId|\(Optional\) ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.|
|Web Store ID|ID of the web store associated with the cart.|

## Store Output Values

Output values aren’t available for this action.

## Error Conditions

|Error Condition|Description|
|---------------|-----------|
|The user doesn’t have access to the cart.

|Error Message: You don't have access to this cart. If possible, contact the admin for this web store.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 400

|

**Parent topic:**[Commerce Checkout Flow Core Actions](../flow/flow_ref_elements_comm_actions_list.md)

