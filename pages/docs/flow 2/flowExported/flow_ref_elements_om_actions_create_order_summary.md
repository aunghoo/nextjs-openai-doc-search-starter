# Flow Core Action for Order Management: Create Order Summary

Create an order summary based on an order. That order is considered the original order for the order summary. Subsequent change orders that apply to the order summary are also represented as order records.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Create Order Summary**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Order Summary Create Input|This input is an Apex-defined variable of class [ConnectApi.OrderSummaryInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_order_summary.htm).The variable has these fields:

-   businessModel—The order’s business model. It can have one of these values:
    -   B2B
    -   B2C
-   externalReferenceIdentifier—Used to prevent duplicate records. This value is case-sensitive.
-   name—Order summary number to assign to the order summary.
-   orderId—Required. The ID of the original order to create an order summary for.
-   orderLifeCycleType—Specifies whether the order is managed in Salesforce Order Management or by an external system. It can have one of these values:
    -   MANAGED—The order is managed in Salesforce Order Management. If no value is specified, the default is MANAGED.
    -   UNMANAGED—The order is managed by an external system.
-   sourceProcess—Describes the order process creating the order summary. It can have one of these values:
    -   OrderOnBehalf—An Order on Behalf Of process.
    -   Standard—Any process other than Order on Behalf Of.
-   status—Status to assign to the order summary. The value must match one of the picklist values on the Status field of the Order Summary object.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Order Summary Output|This value is an Apex-defined variable of class [OrderSummaryOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_order_summary_output.htm).The orderSummaryId field contains the ID of the created order summary.

|

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

