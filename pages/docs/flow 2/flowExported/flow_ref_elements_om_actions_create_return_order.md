# Flow Core Action for Order Management: Create Return Order

Create a return order and return order items for order items belonging to an order summary. You can add return fees for any of the order items.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management and Returns|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Create Return Order**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Return Order Input|This input is an Apex-defined variable of class [ConnectApi.ReturnOrderInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_return_order.htm).The variable has four fields:

-   orderSummaryId—ID of the order summary containing the items to be returned. The order summary’s order lifecycle type must be Managed.
-   returnOrderLifeCycleType—The LifeCycleType of the return order. Possible values are:
    -   Managed—Process the return order using the actions and APIs. It can generate change orders and effects financial fields and rollup calculations.
    -   Unmanaged—The return order is for tracking purposes only. It isn’t involved in any financial calculations and doesn’t generate any change orders. The system doesn’t prevent the creation of duplicate return order line items in an unmanaged return order for the same order item.
-   returnOrderLineItems—A list of Apex-defined variables of class [ConnectApi.ReturnOrderLineItemInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_return_order_line_item.htm). Each variable has these fields:
    -   canReduceShipping—Whether the associated shipping charge can be refunded.
    -   orderItemSummaryId—ID of the associated OrderItemSummary. If the OrderItemSummary already has an associated ReturnOrderLineItem, then you must specify a different reasonForReturn. Duplicating the reason breaks the financial calculations.
    -   quantityExpected—Quantity expected to be returned.
    -   quantityReceived—\(Optional\) Quantity already physically returned. This value isn’t used by any standard features, but it’s provided for use in customizations.
    -   reasonForReturn—\(Optional\) Reason for the return. The value must match an entry in the ReturnOrderLineItem object’s ReasonForReturn picklist.
    -   returnOrderLineItemFees—\(Optional\) A list of Apex-defined variables of class [ConnectApi.ReturnOrderLineItemFeeInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_return_order_line_item_fee.htm). Each variable has these fields:
        -   amount—Value used to calculate the fee amount, as described by the amountType. It must be a positive value.
        -   amountType—Describes how the fee amount is calculated. It can have one of these values:
            -   AmountWithTax—amount is the fee amount, including tax.
            -   AmountWithoutTax—amount is the fee amount, not including tax. Tax is calculated on the value and added.
            -   Percentage—amount is a percentage. The fee amount is amount divided by 100 and then multiplied by the TotalPrice and TotalTaxAmount of the associated OrderItemSummary, prorated for the quantity being returned.
            -   PercentageGross—amount is a percentage. The fee amount is amount divided by 100 and then multiplied by the TotalLineAmountWithTax of the associated OrderItemSummary, prorated for the quantity being returned.
        -   description—\(Optional\) Description of the fee.
        -   product2Id—ID of the product representing the fee.
        -   reason—Reason for the fee. The value must match an entry in the ReturnOrderLineItem object’s ReasonForReturn picklist.
-   status—Status to assign to the return order. The value must match one of the picklist values on the Status field of the Return Order object.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Return Order Output|This value is an Apex-defined variable of class [ConnectApi.ReturnOrderOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_return_order_output.htm).The returnOrderId field contains the ID of the created return order.

|

## Usage

To set up the Create Return Order Input:

1.  Use Assignment elements to set the canReduceShipping, orderItemSummaryId, quantityExpected, quantityReceived, and reasonForReturn field values on one or more ConnectApi.ReturnOrderLineItemInputRepresentation variables.
2.  If you want to add any return fees, use Assignment elements to set the amount, amountType, description, product2Id, and reason field values on one or more ConnectApi.ReturnOrderLineItemFeeInputRepresentation variables. The product2Id points to a fee product that you created.
3.  Use Assignment elements to add the ConnectApi.ReturnOrderLineItemFeeInputRepresentation variables to the returnOrderLineItemFees fields on the ConnectApi.ReturnOrderLineItemInputRepresentation variables representing the associated return order items.
4.  Use an Assignment element to add the ConnectApi.ReturnOrderLineItemInputRepresentation variables to the returnOrderLineItems field on a ConnectApi.ReturnOrderInputRepresentation variable.
5.  Use Assignment elements to set the orderSummaryId, returnOrderLifeCycleType, and status field values on the ConnectApi.ReturnOrderInputRepresentation variable.
6.  Use the ConnectApi.ReturnOrderInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[Flow Core Action for Order Management: Return Return Order Items](../flow/flow_ref_elements_om_actions_return_return_order_items.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

