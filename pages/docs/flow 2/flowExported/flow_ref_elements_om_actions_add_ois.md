# Flow Core Action for Order Management: Add Order Item Summary

Add one or more order product summaries to an order summary. This action creates a change order record, an order product record, and an order product summary record. It also creates any supporting adjustment, tax, and summary records.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Add Order Item Summary**.

**Important:** Don’t call this action via REST API. Use it only in flows.

## Set Input Values

Create record variables to use in the input. Use values from earlier in the flow to set their values. The action generates records based on those values. Remember to include all required values for each object type. For example, the order item summary record variable must include an order delivery group summary ID.

**Note:** For this action’s input values, use record variables, not existing records or record IDs.

|Input Parameter|Description|
|---------------|-----------|
|Order Item Summary Input|This input is an Apex-defined variable of class runtime\_commerce\_oms.AddOrderItemSummaries.**Note:** For information on setting up the input data, see the Usage section of this topic.

The variable has one field, newItems. This field is a list of one or more Apex-defined variables of class runtime\_commerce\_oms.AddItem. Each of the variables includes these fields:

-   orderItemSummary — An order product summary record variable representing the order product to add.
-   reasonCode — Reason for the addition. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object.
-   orderItemTaxLineItemSummaries — A list of zero or more order product tax line item summary record variables associated with the order product summary.
-   orderItemAdjustmentLineSummaries — A list of zero or more Apex-defined variables of class runtime\_commerce\_oms.AddItemAdjustment. Each of the variables includes these fields:
    -   orderItemAdjustmentLineSummary — An order product adjustment line summary record variable associated with the order product being added.
    -   orderItemTaxLineItemSummaries — A list of zero or more order product tax line item summary record variables associated with the order product adjustment line summary.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Order Item Summary Output|This output is an Apex-defined variable of class ConnectApi.AddOrderItemSummaryOutputRepresentation. It includes these fields:**Note:** The sign of a value in the changeBalances field is the opposite of the corresponding value on a change order record. For example, a discount is a positive value in changeBalances and a negative value on a change order record.

-   changeBalances — An Apex-defined variable of class [ConnectApi.ChangeItemOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_change_item_output.htm), which includes these fields:
    -   grandTotalAmount — Change to the total with tax.
    -   totalAdjDeliveryAmtWithTax — Change to the adjusted delivery subtotal, including tax.
    -   totalAdjDistAmountWithTax — Change to the total order adjustments, including tax.
    -   totalAdjProductAmtWithTax — Change to the adjusted product subtotal, including tax.
    -   totalAdjustedDeliveryAmount — Change to the adjusted delivery subtotal.
    -   totalAdjustedDeliveryTaxAmount — Change to the adjusted delivery subtotal tax.
    -   totalAdjustedProductAmount — Change to the adjusted product subtotal.
    -   totalAdjustedProductTaxAmount — Change to the adjusted product subtotal tax.
    -   totalAdjustmentDistributedAmount — Change to the total order adjustments.
    -   totalAdjustmentDistributedTaxAmount — Change to the total order adjustments tax.
    -   totalAmount — Change to the pretax total.
    -   totalExcessFundsAmount — The amount of excess funds available on the order payment summaries related to the order summary. It’s equal to the captured amount that is owed as a refund but isn’t associated with an invoice or credit memo. Excess funds normally occur when order products are canceled before fulfillment but after payment has been captured. This situation isn’t common in the US, where funds are normally authorized but not captured until the fulfillment process begins. This value includes all excess funds related to the order summary, not only the funds related to the current action.
    -   totalRefundableAmount — The total amount available to be refunded. It’s the sum of the excess funds and any outstanding change order grand total amounts that apply to post-fulfillment changes. This value includes all refundable amounts related to the order summary, not only the amount related to the current action.
    -   totalRequiredFundsAmount — The total amount associated with the order products added in the current action.

**Note:** This amount isn’t necessarily the amount that must be captured. For example, in an even exchange flow, the order amount reduction from canceling the exchanged products offsets the required funds amount of the replacement products.

    -   totalTaxAmount — Change to the total tax.
-   changeOrderId — ID of the change order generated by the action.
-   newItems — A list of one or more Apex-defined variables of class ConnectApi.AddItemOutputRepresentation, each of which represents an added order product, and includes these fields:
    -   id — ID of the order product summary.
    -   name — Name of the order product summary.
    -   orderItemAdjustmentLineSummaries — A list of zero or more Apex-defined variables of class ConnectApi.AddItemAdjustmentOutputRepresentation, each of which represents an order product adjustment line summary associated with the added order product summary. Each of the variables includes these fields:
        -   id — ID of the order product adjustment line summary.
        -   name — Name of the order product adjustment line summary.
        -   orderItemTaxLineItemSummaries — A list of zero or more Apex-defined variables of class ConnectApi.AddItemTaxOutputRepresentation, each of which represents an order product tax line item summary associated with the order product adjustment line summary. Each of the variables includes these fields:
            -   id — ID of the order product tax line item summary.
            -   name — Name of the order product tax line item summary.
    -   orderItemTaxLineItemSummaries — A list of zero or more Apex-defined variables of class ConnectApi.AddItemTaxOutputRepresentation, each of which represents an order product tax line item summary associated with the added order product summary. Each of the variables includes these fields:
        -   id — ID of the order product tax line item summary.
        -   name — Name of the order product tax line item summary.
-   orderSummaryId — ID of the order summary specified in the input.

|

## Usage

To set up the Order Item Summary Input:

1.  Use record variables to define the order product summaries, order product adjustment line summaries, and order product tax line item summaries. Sending an Id isn’t required.
    -   Required fields for an order product summary:
        -   OrderDeliveryGroupSummaryId
        -   Product2Id
        -   Quantity
        -   TotalLineAmount
        -   Name
        -   UnitPrice
        -   ListPrice \(Only if Order Summary Pricebook2Id is NULL or empty\)
        -   PricebookEntryId \(Only if Order Summary Pricebook2Id is set\)
    -   Required fields for an order product adjustment line summary:
        -   Amount
        -   OrderSummaryId
        -   Name
    -   Required fields for an order product tax line item summary:
        -   Type
        -   Amount
        -   TaxEffectiveDate
        -   OrderSummaryId
        -   Name
2.  Use an assignment element to set the orderItemSummary field on a runtime\_commerce\_oms.AddItem variable to the order product summary record variable.
3.  For each adjustment to the product being added, use an assignment element to set the orderItemAdjustmentLineSummary field on a runtime\_commerce\_oms.AddItemAdjustment variable to the corresponding order product adjustment line summary record variable. Use assignment elements to add the order product tax line summary record variables associated with it to the orderItemTaxLineItemSummaries field on the same runtime\_commerce\_oms.AddItemAdjustment variable.
4.  Use an assignment element to add the runtime\_commerce\_oms.AddItemAdjustment variables to the orderItemAdjustmentLineSummaries field on the runtime\_commerce\_oms.AddItem variable.
5.  For each tax on the product being added, use an assignment element to add the corresponding order product tax line summary record variable to the orderItemTaxLineItemSummaries field on the runtime\_commerce\_oms.AddItem variable.
6.  Use an assignment element to set the reasonCode field on the runtime\_commerce\_oms.AddItem variable to a valid reason.
7.  Use an assignment element to add the runtime\_commerce\_oms.AddItem variable to the newItems field on a runtime\_commerce\_oms.AddOrderItemSummaries variable.
8.  Repeat steps 1 through 6 for each order product that you want to include in the action, adding the inputs to the same runtime\_commerce\_oms.AddOrderItemSummaries variable.
9.  Use the runtime\_commerce\_oms.AddOrderItemSummaries variable in the action input.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

