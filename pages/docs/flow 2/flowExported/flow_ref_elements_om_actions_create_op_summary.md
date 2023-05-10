# Flow Core Action for Order Management: Create Order Payment Summary

Create an order payment summary for a payment authorization or payments that use the same payment method and are attached to the same order summary.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Create Order Payment Summary**.

## Set Input Values

Use values from earlier in the flow to set the inputs. Include at least one payment authorization or list of payments. You don’t need both.

|Input Parameter|Description|
|---------------|-----------|
|Order Payment Summary Create Input|This input is an Apex-defined variable of class [ConnectApi.CreateOrderPaymentSummaryInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_create_order_payment_summary.htm).The variable includes these fields:

-   orderSummaryId — Reference to the order summary associated with the payments. In orgs with the multicurrency feature enabled, the order payment summary inherits the ISO Currency value from the order summary.
-   paymentAuthorizationId — Reference to the payment authorization to associate with the summary.
-   paymentIds — List of IDs of the payments to associate with the summary.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Order Payment Summary Output|This value is an Apex-defined variable of class [ConnectApi.CreateOrderPaymentSummaryOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_create_order_payment_summary_output.htm).The orderPaymentSummaryId field contains the ID of the created order payment summary.

|

## Usage

To set up the Order Payment Summary Create Input for payments, first use Assignment elements to add the payment IDs to a list of strings variable. Then use that variable in the action input.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

