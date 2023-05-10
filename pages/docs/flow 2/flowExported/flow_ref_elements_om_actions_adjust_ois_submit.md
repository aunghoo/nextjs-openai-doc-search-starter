# Flow Core Action for Order Management: Adjust Order Item Summaries Submit

Adjust the price of one or more order product summaries on an order summary. You can only apply a discount, not an increase. This action creates one or more change order records.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Adjust Order Item Summaries Submit**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Order Summary Id|ID of the order summary associated with the order product summaries that you want to adjust the prices of.|
|Adjust Order Product Summaries Input|This input is an Apex-defined variable of class [ConnectApi.AdjustOrderItemSummaryInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_adjust_order_item_summary.htm), which includes these fields:-   adjustItems —This field is a list of Apex-defined variables of class [ConnectApi.AdjustItemInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_adjust_item.htm). Each of the variables includes these fields:
    -   orderItemSummaryId —ID of an order product summary to adjust the price of.
    -   description —Optional description of the adjustment.
    -   adjustmentType —Specifies how to calculate the adjustment amount from the discountValue field. It can have one of these values:
        -   AmountWithTax—The value of discountValue is the adjustment, including tax.
        -   AmountWithoutTax—The value of discountValue is the adjustment, not including tax. Tax is calculated on the value and added.
        -   Percentage—The value of discountValue is a percentage discount. It’s divided by 100, and then multiplied by the total price and total tax amount of the order product summary to determine the adjustment amount.
    -   discountValue —The value used to calculate the adjustment amount, as specified by the adjustmentType. It must be a negative value.
    -   reason — Adjustment reason.The value must match one of the picklist values on the Reason field of the Order Product Summary Change object.
-   allocatedItemsChangeOrderType —Specifies how to create change orders for order product summary quantities that are currently being fulfilled, defined as QuantityAllocated - QuantityFulfilled. It can have one of these values:
    -   Disallowed—When distributing the adjustment, ignore any quantities being fulfilled. If an order product summary’s entire quantity is being fulfilled, return an error. This is the default value.
    -   InFulfillment—When distributing the adjustment, include quantities being fulfilled. Create a separate change order for the adjustments made to those quantities.
    -   PreFulfillment—When distributing the adjustment, include quantities being fulfilled. Include the adjustments made to those quantities in the change order for pre-fulfillment quantity adjustments.

|

## Store Output Values

Use output values later in the flow. The values are assigned when the change orders are created.

|Output Parameter|Description|
|----------------|-----------|
|Adjust Order Product Summary Output|This output is an Apex-defined variable of class [ConnectApi.AdjustOrderSummaryOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_preview_adjust_output.htm). Depending on the order product summaries included in the adjustment, one or more change orders are generated. If multiple change orders are generated, then the changeBalances values combine the values from both of them.**Note:** The sign of a value in the changeBalances field is the opposite of the corresponding value on a change order record. For example, a discount is a positive value in changeBalances and a negative value on a change order record.

The orderSummaryId field is the ID of the order summary specified in the input.

The changeBalances field is an Apex-defined variable of class [ConnectApi.ChangeItemOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_change_item_output.htm), which includes these fields:

-   grandTotalAmount —Change to the total with tax.
-   totalAdjDeliveryAmtWithTax —Change to the adjusted delivery subtotal, including tax.
-   totalAdjDistAmountWithTax —Change to the total order adjustments, including tax.
-   totalAdjProductAmtWithTax —Change to the adjusted product subtotal, including tax.
-   totalAdjustedDeliveryAmount —Change to the adjusted delivery subtotal.
-   totalAdjustedDeliveryTaxAmount —Change to the adjusted delivery subtotal tax.
-   totalAdjustedProductAmount —Change to the adjusted product subtotal.
-   totalAdjustedProductTaxAmount —Change to the adjusted product subtotal tax.
-   totalAdjustmentDistributedAmount —Change to the total order adjustments.
-   totalAdjustmentDistributedTaxAmount —Change to the total order adjustments tax.
-   totalAmount —Change to the pretax total.
-   totalExcessFundsAmount —The amount of excess funds available on the order payment summaries related to the order summary. It’s equal to the captured amount that is owed as a refund but isn’t associated with an invoice or credit memo. Excess funds normally occur when order products are canceled before fulfillment but after payment has been captured. This situation isn’t common in the US, where funds are normally authorized but not captured until the fulfillment process begins. This value includes all excess funds related to the order summary, not only the funds related to the current action.
-   totalRefundableAmount —The total amount available to be refunded. It’s the sum of the excess funds and any outstanding change order grand total amounts that apply to post-fulfillment changes. This value includes all refundable amounts related to the order summary, not only the amount related to the current action.
-   totalTaxAmount —Change to the total tax.

The postFulfillmentChangeOrderId is the ID of the change order representing the portion of the adjustment that was applied to order product summary quantities that have been fulfilled.

The preFulfillmentChangeOrderId is the ID of the change order representing the portion of the adjustment that was applied to order product summary quantities that haven’t been fulfilled. If the input specified an allocatedItemsChangeOrderType of PreFulfillment, this change order also includes the changes applicable to order product summary quantities that are in the process of being fulfilled.

The inFulfillmentChangeOrderId is the ID of the change order representing the portion of the adjustment that was applied to order product summary quantities that are in the process of being fulfilled. This change order is only created for an input that specified an allocatedItemsChangeOrderType of InFulfillment.

|

## Usage

When a price adjustment is applied to an order product summary, its quantities are considered in three groups:

Pre-fulfillment
:   QuantityAvailableToFulfill, which is equal to QuantityOrdered - QuantityCanceled - QuantityAllocated

In-fulfillment
:   QuantityAllocated - QuantityFulfilled

Post-fulfillment
:   QuantityAvailableToReturn, which is equal to QuantityFulfilled - QuantityReturnInitiated

You can apply adjustments to these groups in three different ways, controlled by the allocatedItemsChangeOrderType input property:

-   Distribute the adjustment evenly between pre-fulfillment and post-fulfillment quantities. Ignore in-fulfillment quantities. Create one change order for the adjustments to pre-fulfillment quantities and one change order for the adjustments to post-fulfillment quantities.
-   Distribute the adjustment evenly between pre-fulfillment, in-fulfillment, and post-fulfillment quantities. Create one change order for the adjustments to both pre-fulfillment and in-fulfillment quantities, and one change order for the adjustments to post-fulfillment quantities.
-   Distribute the adjustment evenly between pre-fulfillment, in-fulfillment, and post-fulfillment quantities. Create one change order for the adjustments to pre-fulfillment quantities, one change order for the adjustments to in-fulfillment quantities, and one change order for the adjustments to post-fulfillment quantities.

To set up the Adjust Order Product Summaries Input:

1.  Use Assignment elements to set the orderItemSummaryId, description, adjustmentType, discountValue, and reason field values on one or more ConnectApi.AdjustItemInputRepresentation variables.
2.  Use an Assignment element to add the ConnectApi.AdjustItemInputRepresentation variables to the changeItems field on a ConnectApi.AdjustOrderItemSummaryInputRepresentation variable.
3.  Use an Assignment element to set the allocatedItemsChangeOrderType field on the ConnectApi.AdjustOrderItemSummaryInputRepresentation variable.
4.  Use the ConnectApi.AdjustOrderItemSummaryInputRepresentation variable and the order summary ID in the action input.

In a flow for adjusting the prices of order product summaries, run an Adjust Order Item Summaries Preview action before running this action. Then display its output for the user to review. When the user verifies the expected results, pass the same input to this action.

After submitting a price adjustment, process refunds as appropriate:

-   If the discount only applied to order product summaries for which payment hasn’t been captured, it doesn’t require a refund. This situation normally applies to order products in the US that haven’t been fulfilled.
-   If the discount applied to order product summaries that haven’t been fulfilled and for which payment has been captured, process a refund. In this case, pass the totalExcessFundsAmount from changeBalances to the Ensure Refunds Async action.
-   If the discount applied to order product summaries that have been fulfilled, process a refund. Pass the postFulfillmentChangeOrderId to the Create Credit Memo action, then pass the credit memo to the Ensure Refunds Async action.
-   If the discount applied to both fulfilled and unfulfilled order product summaries for which payment has been captured, process both refunds. Pass the postFulfillmentChangeOrderId to the Create Credit Memo action, then pass the credit memo and the totalExcessFundsAmount from changeBalances to the Ensure Refunds Async action.

**Important:** Excess funds aren’t reduced until the payment processor issues a refund. If you don’t process refunds promptly, subsequent refunds can be inaccurate. Consider the following example.

1.  An order with a total amount of $100 is placed, and the amount is captured immediately.
2.  A product is canceled from the order, resulting in $20 of excess funds.
3.  Before the excess funds are sent to the payment provider in an ensure refunds action, another product is canceled. This cancellation adds another $20 of excess funds. However, because the original $20 hasn’t been refunded yet, the cancel action returns a total excess funds amount of $40.
4.  The first excess funds amount \($20\) is sent to the payment provider in an ensure refunds request.
5.  The second excess funds amount \($40\) is sent to the payment provider in an ensure refunds request.
6.  The payment provider receives requests for $60 of refunds, when the correct refund total is $40. Because the total refund amount is less than the total captured amount of $100, the payment provider issues $60 in refunds.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[Flow Core Action for Order Management: Adjust Order Item Summaries Preview](../flow/flow_ref_elements_om_actions_adjust_ois_preview.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

