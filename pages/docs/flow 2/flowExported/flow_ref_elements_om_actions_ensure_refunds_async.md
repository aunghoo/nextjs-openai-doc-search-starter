# Flow Core Action for Order Management: Ensure Refunds Async

Ensure refunds for a credit memo or excess funds by sending a request to a payment provider. This action inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Ensure Refunds Async**.

**Note:** If the action creates a refund, the refund record’s ClientContext value isn’t predictable. Don't use it in custom logic.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Ensure Refunds Async Input|This input is an Apex-defined variable of class [ConnectApi.EnsureReundsAsyncInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_ensure_refunds_async.htm).The variable has these fields. You must specify creditMemoId or excessFundsAmount. You can specify both.

-   creditMemoId—The ID of the credit memo to ensure refunds for.
-   excessFundsAmount—The amount of excess funds to apply the refunds against.
-   invoicesToPay—List of invoices for fees that reduce the refund, such as return fees.
-   isAllowPartial—This value controls the behavior when the amounts included in the sequences list don’t cover the entire refund amount. If this value is false, the default refund logic is applied to ensure the remaining refund amount. If this value is true, the unrefunded balance remains on the credit memo. If you don’t specify a sequences list, this value is ignored, and the default refund logic is applied. The default is false.
-   sequences—This input is an ordered list of refund amounts and the OrderPaymentSummaries to apply them to. The process traverses this list in order and stops when it has refunded the full amount. It’s a list of Apex-defined variables of class SequenceOrderPaymentSummaryInputRepresentation. It contains these fields:
    -   amount—Amount of the refund to apply to the OrderPaymentSummary.
    -   orderPaymentSummaryId—ID of the OrderPaymentSummary to apply the Amount to.

|
|Order Summary Id|Reference to the order summary associated with the credit memo.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Ensure Refunds Async Output|This value is an Apex-defined variable of class [EnsureRefundsAsyncOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_ensure_refunds_async_output.htm). It only returns the ID of the asynchronous background operation, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.The backgroundOperationId field contains the ID of the background operation.

|

## Usage

This action applies the refund to order payment summaries associated with the specified order summary following this logic.

**Note:** If multiple order payment summaries have equal AvailableToRefund amounts, their order of selection is random.

1.  Verify that the credit memo balance and excess funds amount don't exceed the total AvailableToRefund amount of all the order payment summaries associated with the order summary.
2.  If sequences is specified, follow these steps.
    1.  Traverse the sequences list in order and apply the specified refund amounts to the specified order payment summaries.
    2.  If the specified credit memo and excess funds are fully refunded, or if isAllowPartial is true, then the action stops here.
3.  If a credit memo is specified, follow these steps.
    1.  If an order payment summary has an AvailableToRefund amount matching the credit memo’s remaining balance, apply the refund to that payment.
    2.  If no exact match was found, apply the refund to the order payment summary with the largest AvailableToRefund amount.
    3.  If the credit memo has any remaining balance, repeat steps a and b until that balance is fully refunded.
4.  If an excess funds amount is specified, follow these steps.
    1.  Examine those order payment summaries. If one has an AvailableToRefund amount matching the excess funds amount, apply the refund to that payment.
    2.  If no exact match was found, apply the refund to the order payment summary with the largest AvailableToRefund amount.
    3.  If any excess funds amount remains, repeat steps a and b until it’s fully refunded.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[Flow Core Action for Order Management: Create Credit Memo](../flow/flow_ref_elements_om_actions_create_credit_memo.md)

[Flow Core Action for Order Management: Create an Invoice from Change Orders](../flow/flow_ref_elements_om_actions_create_invoice_from_change_orders.md)

[Flow Core Action for Order Management: Return Return Order Items](../flow/flow_ref_elements_om_actions_return_return_order_items.md)

[Flow Core Action for Order Management: Ensure Funds Async](../flow/flow_ref_elements_om_actions_ensure_funds_async.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

