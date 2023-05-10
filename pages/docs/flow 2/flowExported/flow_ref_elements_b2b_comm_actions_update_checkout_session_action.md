# Flow Core Action for Checkout Flow: Update Checkout Session Action

The Update Checkout Session action updates the checkout session state if the current state matches the expected state. This action provides consistency during checkout handling and guarantees that if two browsers attempt to update the state, one succeeds and the other fails validation.

|Available in: Lightning Experience|
|Available in: **Performance**, **Professional**, and **Unlimited** Editions with B2B Commerce|

In Flow Builder, add an Action element to your flow. Select the **B2B Commerce** category, and search for **Update Checkout Session Action**. To access this action from the API, use the name `updateCheckoutSessionAction`.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|checkoutSessionId|The ID of the checkout session.|
|nextState|The state the session moves to after it completes the tasks included in the current state.This input is an Apex-defined variable of enum `CheckoutStateEnum`.

|
|expCurrentState|The current state of the session.This input is an Apex-defined variable of enum `CheckoutStateEnum`.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|requestId|The ID of the request that processes and then either creates or returns the Checkout Session.|

## Error Conditions

|Error Condition|Description|
|---------------|-----------|
|Expected Validation Error|The current state of the checkout session, identified by `checkoutSessionId` parameter, doesn’t match the `expectedState` parameter, so the validation fails.

 HTTP Status Code: 4XX

|
|Invalid Checkout Session ID|Invalid input for the Checkout Session ID.

 Error Code: UNKNOWN\_EXCEPTION

 HTTP Status Code: 403

|
|Invalid Session or Inadequate User Access|Either the session doesn’t exist or the user doesn’t have the required permissions.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 400

|
|User Can’t Invoke Action|The caller doesn’t have the appropriate permissions to call the action, including the MAD or B2B Commerce Integrator user perms.

 Error Code: BAD\_REQUEST

 HTTP Status Code: 400

|
|Account Associated With Cart Is Invalid or Inaccessible|The effective account associated with the cart isn’t a valid account.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 400

|
|User Isn’t a Member of the Store|The buyer user isn’t a member of the store.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 400

|

## Usage

To use the B2B Commerce Update Checkout Session Action, these requirements apply.

1.  The user has the appropriate permissions to invoke the action.
2.  The effective account is valid.
3.  The buyer account is a member of the store.
4.  The cart status isn’t set to `Closed` or `Processing`.
5.  The CartcheckoutSession.IsProcessing field is `False`.

**Parent topic:**[B2B Commerce Checkout Flow Core Actions](../flow/flow_ref_elements_b2b_comm_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

