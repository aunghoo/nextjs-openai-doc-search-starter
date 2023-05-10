# Flow Core Action for Checkout Flow: Check Cart Inventory

Request a full inventory availability check of all line items in the cart.

|Available in: Lightning Experience|
|Available in: **Performance**, **Professional**, and **Unlimited** Editions with B2B Commerce|

In Flow Builder, add an Action element to your flow. Select the **B2B Commerce** category, and search for **Check Cart Inventory**. To access this action from the API, use the name `checkCartInventoryAction`.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|cartId|The ID of the cart that transitions into a checkout.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|backgroundOperationId|The ID of the background operation that processes the total price of all items in the cart.|

## Error Conditions

|Error Condition|Description|
|---------------|-----------|
|Invalid CartId Input|The cart ID value isn’t accepted.

 Error Code: UNKNOWN\_EXCEPTION

 HTTP Status Code: 500

|
|User Can’t Invoke Action|The caller doesn’t have the appropriate permissions to call the action, including the MAD or B2B Commerce Integrator user perms.

 Error Code: BAD\_REQUEST

 HTTP Status Code: 400

|
|User Doesn’t Have Access to the Cart|The buyer doesn’t own the cart, doesn’t have read access to the cart, or the cart isn’t shared with the buyer.

 Error Code: BAD\_REQUEST

 HTTP Status Code: 400

|
|The Cart Isn’t in the Checkout State|The cart status isn’t in the Checkout state and can’t continue.

 Error Code: INVALID\_OPERATION

 HTTP Status Code: 403

|
|Integration Is Already in Progress|Only one integration can be processed at a time. This error indicates when an integration is already running.

 Error Code: ALREADY\_IN\_PROCESS

 HTTP Status Code: 400

|
|Account Associated With the Cart Isn’t Valid or Accessible|The effective account listed isn’t valid.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 500

|
|User Isn’t a Member of the Store|The user isn’t a member of the store.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 500

|

## Usage

This action is executed asynchronously using the pricing service configured in [StoreIntegratedService](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_storeintegratedservice.htm).

To use the B2B Commerce Check Cart Inventory action, these requirements apply.

1.  The user has the appropriate permissions to invoke the action.
2.  The effective account is valid.
3.  The buyer account is a member of the store.
4.  The buyer has edit access to the cart.
5.  The cart status isn’t `Closed`.
6.  `Session.IsProcessing` isn’t set to `False`.
7.  `Session.NextState` is set to `CheckInventory`.
8.  `Session.State` can’t be empty.
9.  backgroundOperationId can’t be `New` or `Running`.

**Parent topic:**[B2B Commerce Checkout Flow Core Actions](../flow/flow_ref_elements_b2b_comm_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

