# Flow Core Action for Order Management: Adjust Order Item Summaries Preview

Preview the expected results of adjusting the price of one or more order product summaries on an order summary, without executing the adjustment. You can only apply a discount, not an increase. The output of this action contains the values that would be set on the change orders created by submitting the proposed adjustment.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Adjust Order Item Summaries Preview**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Order Summary Id|ID of the order summary associated with the order product summaries that you want to preview adjusting the prices of.|
|Adjust Order Product Summaries Input|This input is an Apex-defined variable of class [ConnectApi.AdjustOrderItemSummaryInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_adjust_order_item_summary.htm), which includes these fields:-   adjustItems —This field is a list of Apex-defined variables of class [ConnectApi.AdjustItemInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_adjust_item.htm). Each of the variables includes these fields:
    -   orderItemSummaryId —ID of an order product summary to preview a price adjustment for.
    -   description —Optional description of the adjustment.
    -   adjustmentType —Specifies how to calculate the adjustment amount from the discountValue field. It can have one of these values:
        -   AmountWithTax—The value of discountValue is the adjustment, including tax.
        -   AmountWithoutTax—The value of discountValue is the adjustment, not including tax. Tax is calculated on the value and added.
        -   Percentage—The value of discountValue is a percentage discount. It’s divided by 100, and then multiplied by the total price and total tax amount of the order product summary to determine the adjustment amount.
    -   discountValue —The value used to calculate the adjustment amount, as specified by the adjustmentType. It must be a negative value.
    -   reason —Adjustment reason. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object.
-   allocatedItemsChangeOrderType —Specifies how change orders would be created for order product summary quantities that are currently being fulfilled, defined as QuantityAllocated - QuantityFulfilled. It can have one of these values:
    -   Disallowed—When distributing the adjustment, ignore any quantities being fulfilled. If an order product summary’s entire quantity is being fulfilled, return an error. This is the default value.
    -   InFulfillment—When distributing the adjustment, include quantities being fulfilled. Submitting the adjustment would create a separate change order for the adjustments made to those quantities.
    -   PreFulfillment—When distributing the adjustment, include quantities being fulfilled. Submitting the adjustment would include the adjustments made to those quantities in the change order for pre-fulfillment quantity adjustments.

|

## Store Output Values

Use output values later in the flow.

|Output Parameter|Description|
|----------------|-----------|
|Adjust Order Product Summary Output|This output is an Apex-defined variable of class [ConnectApi.AdjustOrderSummaryOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_preview_adjust_output.htm), which contains the financial changes that would result from the proposed adjustment. Most of the values represent the deltas of the values on the associated order summary.**Note:** The sign of a value in the changeBalances field is the opposite of the corresponding value on a change order record. For example, a discount is a positive value in changeBalances and a negative value on a change order record.

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

The postFulfillmentChangeOrderId field is always null for a preview action.

The preFulfillmentChangeOrderId field is always null for a preview action.

The inFulfillmentChangeOrderId field is always null for a preview action.

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

-   Distribute the adjustment evenly between pre-fulfillment and post-fulfillment quantities. Ignore in-fulfillment quantities. Submitting the adjustment would create one change order for the adjustments to pre-fulfillment quantities and one change order for the adjustments to post-fulfillment quantities.
-   Distribute the adjustment evenly between pre-fulfillment, in-fulfillment, and post-fulfillment quantities. Submitting the adjustment would create one change order for the adjustments to both pre-fulfillment and in-fulfillment quantities, and one change order for the adjustments to post-fulfillment quantities.
-   Distribute the adjustment evenly between pre-fulfillment, in-fulfillment, and post-fulfillment quantities. Submitting the adjustment would create one change order for the adjustments to pre-fulfillment quantities, one change order for the adjustments to in-fulfillment quantities, and one change order for the adjustments to post-fulfillment quantities.

To set up the Adjust Order Product Summaries Input:

1.  Use Assignment elements to set the orderItemSummaryId, description, adjustmentType, discountValue, and reason field values on one or more ConnectApi.AdjustItemInputRepresentation variables.
2.  Use an Assignment element to add the ConnectApi.AdjustItemInputRepresentation variables to the changeItems field on a ConnectApi.AdjustOrderItemSummaryInputRepresentation variable.
3.  Use an Assignment element to set the allocatedItemsChangeOrderType field on the ConnectApi.AdjustOrderItemSummaryInputRepresentation variable.
4.  Use the ConnectApi.AdjustOrderItemSummaryInputRepresentation variable and the order summary ID in the action input.

In a flow for adjusting the prices of order product summaries, display the output of this action for the user to review before executing the adjustment. When the user verifies the expected results, pass the same input to an Adjust Order Item Summaries Submit action.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[Flow Core Action for Order Management: Adjust Order Item Summaries Submit](../flow/flow_ref_elements_om_actions_adjust_ois_submit.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

