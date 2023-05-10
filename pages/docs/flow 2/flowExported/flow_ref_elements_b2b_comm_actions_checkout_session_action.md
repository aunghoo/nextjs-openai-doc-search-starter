# Flow Core Action for Checkout Flow: Checkout Session Action

Get or create a checkout session, and return the ID of the session to the caller.

|Available in: Lightning Experience|
|Available in: **Performance**, **Professional**, and **Unlimited** Editions with B2B Commerce|

In Flow Builder, add an Action element to your flow. Select the **B2B Commerce** category, and search for **Checkout Session Action**. To access this action from the API, use the name `checkoutSessionAction`.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|cartId|The ID of the cart that transitions into a checkout.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|requestId|The ID of the request that processes and then either creates or returns the Checkout Session.|

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
|User Doesn’t Have Access to the Effective Account|The user doesn’t have access to the effective account either because it isn’t a buyer account or they don’t have permission to buy for the account.

 Error Code: BAD\_REQUEST

 HTTP Status Code: 400

|
|User Account Isn’t Associated With the Store|The current logged-in buyer account isn’t associated with the store and therefore isn’t a store member.

 Error Code: BAD\_REQUEST

 HTTP Status Code: 400

|
|Cart Is Already in Progress|The requested cart is already being processed.

 Error Code: BAD\_REQUEST

 HTTP Status Code: 400

|
|The Session Wasn’t Created|The session wasn’t created due to an internal service error.

 Error Code: UNKNOWN\_EXCEPTION

 HTTP Status Code: 500

|

## Usage

To use the B2B Commerce Checkout Session Action, these requirements apply.

1.  The user has the appropriate permissions to invoke the action.
2.  The effective account is valid.
3.  The buyer account is a member of the store.
4.  The cart status is set to `Active` or `Checkout`.
5.  The cart must not have any current, active session.

When the Checkout Session Action runs, these API interactions occur.

1.  The cart transitions to the Checkout state, preventing more updates to the cart.
2.  If it doesn’t exist already, the CartCheckoutSession object is created.
3.  All errors that are mapped to the input cartId, on the [CartValidationOutput](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartvalidationoutput.htm) object, are cleared.

**Parent topic:**[B2B Commerce Checkout Flow Core Actions](../flow/flow_ref_elements_b2b_comm_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

