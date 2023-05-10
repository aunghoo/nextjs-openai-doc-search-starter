# Flow Core Action for Order Management: Create Fulfillment Orders

Create fulfillment orders and fulfillment order products for multiple order delivery group summaries, each of which defines a recipient and delivery method. You specify the order product summaries to fulfill and the fulfillment locations to handle them. If you specify multiple fulfillment locations for one order delivery group summary, a fulfillment order is created for each one.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Create Fulfillment Orders**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Fulfillment Orders Input|This input is an Apex-defined variable of class [ConnectApi.MultipleFulfillmentOrderInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_multiple_fulfillment_order.htm).The variable has one field, fulfillmentOrders. This field is a list of Apex-defined variables of class [ConnectApi.FulfillmentOrderInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_fulfillment_order.htm). Each variable has three fields:

-   fulfillmentGroups — A list of Apex-defined variables of class [ConnectApi.FulfillmentGroupInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_fulfillment_order.htm). A fulfillment order is created for each fulfillment group. A group represents a set of order product summaries to fulfill from a single location using the same fulfillment type. Each fulfillment group variable has these fields:
    -   fulfilledFromLocationId — Reference to the fulfillment location.
    -   fulfillmentType — The fulfillment type. Specify one of the values that you defined for the Type field picklist on the Fulfillment Order object.
    -   orderItemSummaries — A list of Apex-defined variables of class [ConnectApi.OrderItemSummaryInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_order_item_summary.htm). Each variable has these fields:
        -   orderItemSummaryId — Reference to an order product summary.
        -   quantity — The quantity of the order product summary to allocate to the fulfillment order.
    -   referenceId — Reference to the fulfillment group input. Use this value to troubleshoot a failure.
-   orderDeliveryGroupSummaryId — Reference to the order delivery group summary associated with the order product summaries.
-   orderSummaryId — Reference to the order summary associated with the order product summaries.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Fulfillment Orders Output|This value is an Apex-defined variable of class [ConnectApi.MultipleFulfillmentOrderOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_multiple_fulfillment_order_output.htm).The variable has one field, fulfillmentOrders. This field is a list of Apex-defined variables of class [ConnectApi.FulfillmentGroupOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_fulfillment_group_output.htm). Each variable has these fields:

-   fulfilledFromLocationId — Reference to the fulfillment location. This value is included so that you can resubmit the creation if it fails.
-   fulfillmentOrderId — Reference to the created fulfillment order.
-   fulfillmentType — The fulfillment type. This value is included if the creation failed, so you can resubmit it.
-   orderDeliveryGroupSummaryId — Reference to the order delivery group summary associated with the order product summaries. This value is included if the creation failed, so you can resubmit it.
-   orderItemSummaries — A list of Apex-defined variables of class [ConnectApi.OrderItemSummaryInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_order_item_summary.htm). This value is included if the creation failed, so you can resubmit it. Each variable has these fields:
    -   orderItemSummaryId — Reference to an order product summary.
    -   quantity — The quantity of the order product summary to allocate to the fulfillment order.
-   orderSummaryId — Reference to the order summary associated with the order product summaries. This value is included if the creation failed, so you can resubmit it.
-   referenceId — Reference to the fulfillment group input. Use this value to troubleshoot a failure.

|

## Usage

To set up the Fulfillment Orders Input:

1.  For each order delivery group:
    1.  Use Assignment elements to set the orderItemSummaryId and quantity field values on one or more ConnectApi.OrderItemSummaryInputRepresentation variables.
    2.  Use Assignment elements to add the ConnectApi.OrderItemSummaryInputRepresentation variables to the orderItemSummaries fields on one or more ConnectApi.FulfillmentGroupInputRepresentation variables, one for each fulfillment group.
    3.  Use Assignment elements to set the fulfilledFromLocationId, fulfillmentType, and referenceId field values on the ConnectApi.FulfillmentGroupInputRepresentation variables.
    4.  Use Assignment elements to add the ConnectApi.FulfillmentGroupInputRepresentation variables to the fulfillmentGroups field on a ConnectApi.FulfillmentOrderInputRepresentation variable.
    5.  Use Assignment elements to set the orderDeliveryGroupSummaryId and orderSummaryId field values on the ConnectApi.FulfillmentOrderInputRepresentation variable.
2.  Use Assignment elements to add the ConnectApi.FulfillmentOrderInputRepresentation variables to the fulfillmentOrders field on a ConnectApi.MultipleFulfillmentOrderInputRepresentation variable.
3.  Use the ConnectApi.MultipleFulfillmentOrderInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

