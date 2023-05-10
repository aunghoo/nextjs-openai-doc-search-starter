# Flow Core Action for Order Management: Ensure Funds Async

Ensure funds for an invoice, and apply them to it. If needed, capture authorized funds by sending a request to a payment provider. This action inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Ensure Funds Async**.

**Note:** If the action creates a payment, the payment record’s ClientContext value isn’t predictable. Don't use it in custom logic.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Ensure Funds Async Input|This input is an Apex-defined variable of class [ConnectApi.EnsureFundsAsyncInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_ensure_funds_async.htm).The variable has one field, invoiceId, which is the ID of the invoice to ensure funds for and apply them to.

|
|Order Summary Id|Reference to the order summary associated with the invoice.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Ensure Funds Async Output|This value is an Apex-defined variable of class [EnsureFundsAsyncOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_ensure_funds_async_output.htm). It only returns the ID of the asynchronous background operation, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.The backgroundOperationId field contains the ID of the background operation.

|

## Usage

This action applies funds to the invoice balance from order payment summaries associated with the specified order summary following this logic:

**Note:** If multiple order payment summaries have equal BalanceAmount values, their order of selection is random.

1.  Verify that the invoice balance doesn’t exceed the total BalanceAmount of all the order payment summaries associated with the order summary.
2.  If an order payment summary has a BalanceAmount equal to the invoice balance, apply the funds from that order payment summary.
3.  If no exact match was found, apply funds from the order payment summary with the largest BalanceAmount.
4.  If the invoice still has a balance to ensure, repeat steps 2 and 3 until the full balance is ensured or no captured funds remain.
5.  If the invoice still has a balance, look for an order payment summary with an authorized amount equal to the remaining invoice balance. If one exists, capture and apply the funds from that order payment summary.
6.  If no exact match was found, capture and apply funds from the order payment summary with the largest authorized amount.
7.  If the invoice still has a balance to ensure, repeat steps 5 and 6 until the full balance is ensured.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[Flow Core Action for Order Management: Create an Invoice from Fulfillment Order](../flow/flow_ref_elements_om_actions_create_invoice_from_fo.md)

[Flow Core Action for Order Management: Ensure Refunds Async](../flow/flow_ref_elements_om_actions_ensure_refunds_async.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

