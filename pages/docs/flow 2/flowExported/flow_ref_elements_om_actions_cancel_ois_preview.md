# Flow Core Action for Order Management: Cancel Order Item Summaries Preview

Preview the expected results of canceling one or more order product summaries from an order summary without executing the cancel. The output of this action contains the values that would be set on the change order created by submitting the proposed cancel.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Cancel Order Item Summaries Preview**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Cancel Order Product Summary Items Input|This input is an Apex-defined variable of class [ConnectApi.ChangeInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_change.htm).The variable has one field, changeItems. This field is a list of Apex-defined variables of class [ConnectApi.ChangeItemInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_change_item.htm). Each variable includes these fields:

-   changeItemFees—A list of Apex-defined variables of class [ConnectApi.ChangeItemFeeInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_change_item_fee.htm). Each variable has these fields:
    -   amount—Required. Value used to calculate the fee amount, as described by the amountType. It must be a positive value.
    -   amountType—Required. Describes how the fee amount is calculated. It can have one of these values:
        -   AmountWithTax—amount is the fee amount, including tax.
        -   AmountWithoutTax—amount is the fee amount, not including tax. Tax is calculated on the value and added.
        -   Percentage—amount is a percentage. The fee amount is amount divided by 100 and then multiplied by the TotalPrice and TotalTaxAmount of the associated order product summary, prorated for the quantity being returned.
        -   PercentageGross—amount is a percentage. The fee amount is amount divided by 100 and then multiplied by the TotalLineAmountWithTax of the associated order product summary, prorated for the quantity being returned.
    -   description—Description of the fee.
    -   priceBookEntryId—Required unless price books are optional in the org. ID of the price book entry associated with the fee product.
    -   product2Id—Required. ID of the product representing the fee.
    -   reason—Required. Reason for the fee. The value must match an entry in the Order Product Summary Change object’s Reason picklist.
-   orderItemSummaryId—Required. ID of an order product summary to cancel. It can’t be a shipping charge product.
-   quantity—Required. Quantity to cancel.
-   reason—Required. Cancel reason. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object.
-   shippingReductionFlag—Required. Boolean flag that specifies whether to prorate any related delivery charge based on the price change.

|
|Order Summary Id|Reference to the order summary that you want to preview canceling order product summaries from.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Cancel Order Product Summary Output|This output is an Apex-defined variable of class [ConnectApi.PreviewCancelOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_preview_cancel_output.htm), which contains the values that would populate a change order record for the proposed cancel.**Note:** The sign of a value in the changeBalances field is the opposite of the corresponding value on a change order record. For example, a discount is a positive value in changeBalances and a negative value on a change order record.

The orderSummaryId field is the ID of the order summary specified in the input.

The changeBalances field is an Apex-defined variable of class [ConnectApi.ChangeItemOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_change_item_output.htm), which includes these fields:

-   grandTotalAmount—Change to the total with tax.
-   totalAdjDeliveryAmtWithTax—Change to the adjusted delivery subtotal, including tax.
-   totalAdjDistAmountWithTax—Change to the total order adjustments, including tax.
-   totalAdjProductAmtWithTax—Change to the adjusted product subtotal, including tax.
-   totalAdjustedDeliveryAmount—Change to the adjusted delivery subtotal.
-   totalAdjustedDeliveryTaxAmount—Change to the adjusted delivery subtotal tax.
-   totalAdjustedProductAmount—Change to the adjusted product subtotal.
-   totalAdjustedProductTaxAmount—Change to the adjusted product subtotal tax.
-   totalAdjustmentDistributedAmount—Change to the total order adjustments.
-   totalAdjustmentDistributedTaxAmount—Change to the total order adjustments tax.
-   totalAmount—Change to the pretax total.
-   totalExcessFundsAmount—The amount of excess funds available on the order payment summaries related to the order summary. It’s equal to the captured amount that is owed as a refund but isn’t associated with an invoice or credit memo. Excess funds normally occur when order products are canceled before fulfillment but after payment is captured. This situation isn’t common in the US, where funds are normally authorized but not captured until the fulfillment process begins. This value includes all excess funds related to the order summary, not only the funds related to the current action.
-   totalFeeAmount—The total amount of the fees charged for the cancel.
-   totalFeeTaxAmount—The total amount of tax on the fees charged for the cancel.
-   totalRefundableAmount—The total amount available to be refunded. It’s the sum of the excess funds and any outstanding change order grand total amounts that apply to post-fulfillment changes. This value includes all refundable amounts related to the order summary, not only the amount related to the current action.
-   totalTaxAmount—Change to the total tax.

|

## Usage

To set up the Cancel Order Product Summary Items Input:

1.  If you want to charge fees, use Assignment elements to set the amount, amountType, description, priceBookEntryId, product2Id, and reason field values on one or more ConnectApi.ChangeItemFeeInputRepresentation variables.
2.  Use Assignment elements to set the orderItemSummaryId, quantity, reason, and shippingReductionFlag field values on one or more ConnectApi.ChangeItemInputRepresentation variables.
3.  If you’re charging fees, use Assignment elements to add the ConnectApi.ChangeItemFeeInputRepresentation variables to the changeItemFees fields on the associated ConnectApi.ChangeItemInputRepresentation variables.
4.  Use an Assignment element to add the ConnectApi.ChangeItemInputRepresentation variables to the changeItems field on a ConnectApi.ChangeInputRepresentation variable.
5.  Use the ConnectApi.ChangeInputRepresentation variable and the order summary ID in the action input.

In a flow for canceling order product summaries, display the output of this action for the user to review before executing the cancel. When the user verifies the expected results, pass the same input to a Cancel Order Item Summaries Submit action.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

