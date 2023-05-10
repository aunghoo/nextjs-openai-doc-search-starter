# Flow Core Action for Order Management: Create an Invoice from Change Orders

Create an invoice to represent the charges for one or more change orders. Create invoices for change orders that increase order amounts, such as return fees. When you ensure the refund for a return, include the invoices for the associated return fees in the input.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Create an Invoice from Change Orders**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Create Invoice From Change Order Input|Required. This input is an Apex-defined variable of class [ConnectApi.CreateInvoiceFromChangeOrdersInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_create_invoice_from_change_orders.htm). It has two fields.The changeOrderIds field is a list of IDs of the change orders to create an invoice for.

The orderSummaryId field is the ID of the order summary associated with the change orders.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Invoice Output|This value is an Apex-defined variable of class [ConnectApi.ChangeOrdersInvoiceOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_change_orders_invoice_output.htm). It has three fields.The errors field is a list of Apex-defined variables of class [ConnectApi.​ErrorResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_error_response.htm) containing any errors that were returned.

The invoiceId field contains the ID of the created invoice.

The success field indicates whether the transaction was successful.

|

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[Flow Core Action for Order Management: Create Return Order](../flow/flow_ref_elements_om_actions_create_return_order.md)

[Flow Core Action for Order Management: Return Return Order Items](../flow/flow_ref_elements_om_actions_return_return_order_items.md)

[Flow Core Action for Order Management: Ensure Refunds Async](../flow/flow_ref_elements_om_actions_ensure_refunds_async.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

