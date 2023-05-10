# Flow Core Action for Checkout Flow: Activate Order

Activates a Salesforce standard draft order.

|Available in: Lightning Experience|
|Available in: **Performance**, **Professional**, and **Unlimited** Editions with B2B Commerce|

In Flow Builder, add an Action element to your flow. Select the **B2B Commerce** category, and search for **Activate Order**. To access this action from the API, use the name `activateOrderAction`.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|cartId|The ID of the cart that transitions into a checkout.|
|orderStatus|A DynamicEnum with the OrderTypeEnum value.|

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
|CartValidationOutput Object Has Errors|The CartValidationOutput object has errors that are related to the cart and must be cleared before order activation.

 Error Code: INVALID\_INPUT

 HTTP Status Code: 403

|
|CheckoutSession Isn’t in the Activate State|Checkout Session state must be in the Activate state for the order activation to go forward.

 Error Code: INVALID\_INPUT

 HTTP Status Code: 403

|
|CheckoutSession Is in the Processing State|CheckoutSession can’t be in the Processing state. Processing indicates a separate integration is already running.Error Code: INVALID\_INPUT

HTTP Status Code: 403

|
|Invalid Order Status Input|The Order status input that is passed to the API must be the `ACTIVATE` status code.

 Error Code: UNKNOWN\_EXCEPTION

 HTTP Status Code: 500

|
|OrderSummary Wasn’t Created|The OrderSummary wasn’t created due to an internal error.

 Error Code: UNKNOWN\_EXCEPTION

 HTTP Status Code: 403

|

## Usage

To use the B2B Commerce Activate Order action, these requirements apply.

1.  The user has the appropriate permissions to invoke the action.
2.  The effective account is valid.
3.  The buyer account is a member of the store.
4.  The buyer has edit access to the cart.
5.  An order in `Draft` status is generated from the cartToOrder action, and the orderId is in CartCheckoutSession.
6.  The cart status is `CartStatusEnum.CHECKOUT`.
7.  `Session.IsProcessing` isn’t set to `False`.
8.  `Session.NextState` is set to `activateOrder`.
9.  `Session.State` can’t be empty.
10. backgroundOperationId can’t be `New` or `Running`.

When the Activate Order action runs, these API interactions occur.

1.  The order item is activated, making it read-only.
2.  The order summary is generated asynchronously.
3.  The CheckoutSession is archived.
4.  The cart is archived.

**Parent topic:**[B2B Commerce Checkout Flow Core Actions](../flow/flow_ref_elements_b2b_comm_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

