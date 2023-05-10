# Flow Core Action for Order Management: Create an Invoice from Fulfillment Order

Create an invoice for a fulfillment order that doesn’t have one.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Create an Invoice from Fulfillment Order**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Fulfillment Order Id|Reference to the fulfillment order that needs an invoice.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Invoice creation output|This value is an Apex-defined variable of class [ConnectApi.FulfillmentOrderInvoiceOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_fulfillment_order_invoice_output.htm).The invoiceId field contains the ID of the created invoice.

|

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[Flow Core Action for Order Management: Ensure Funds Async](../flow/flow_ref_elements_om_actions_ensure_funds_async.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

