# Flow Core Action for Omnichannel Inventory: Fulfill Reservation

Fulfill one or more inventory reservations at a location.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Omnichannel Inventory|

In Flow Builder, add an Action element to your flow. Select the **Omnichannel Inventory Service** category, and search for **Omnichannel Inventory Service Fulfill Reservation**.

**Note:** Set the flow’s runtime API version to 52.0 or later.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Omnichannel Inventory Service Fulfill Reservation Input|This input is an Apex-defined variable of class [ConnectApi.OCIFulfillReservationInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_o_c_i_fulfill_reservation.htm).The variable has one field, fulfillmentRecords. This field is a list of up to 100 Apex-defined variables of class [ConnectApi.OCIFulfillReservationSingleInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_o_c_i_fulfill_reservation_single.htm). Each variable has these fields:

-   actionRequestId—A UUID that identifies the request. To identify which actions succeeded or failed, use the action request IDs in output variables.
-   externalRefId—Optional. The external reference ID.
-   locationIdentifier—Identifier of the location at which to fulfill reserved inventory.
-   quantity—The quantity of the product to fulfill.
-   stockKeepingUnit—The Stock Keeping Unit of the product to fulfill.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Omnichannel Inventory Service Fulfill Reservation Output|This value is an Apex-defined variable of class [ConnectApi.OCIFulfillReservationOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_fulfill_reservation_output.htm).The variable has these fields:

-   errors—A list of Apex-defined variables of class [ConnectApi.OCIFulfillReservationErrorOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_fulfill_reservation_error_output.htm). Each variable represents a returned error and has these fields:
    -   details—An Apex-defined variable of class [ConnectApi.OCIFulfillReservationSingleOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_fulfill_reservation_single_output.htm). Each variable represents a returned error and includes the values from the input so you can resubmit them:
        -   actionRequestId—A UUID that identifies the failed request.
        -   externalRefId—The external reference ID.
        -   locationIdentifier—Identifier of the location at which to fulfill reserved inventory.
        -   quantity—The quantity of the product to fulfill.
        -   stockKeepingUnit—The Stock Keeping Unit of the product to fulfill.
    -   errorCode—The error code.
    -   message—Details of the error, if available.
-   success—Indicates whether the fulfillment succeeded.

|

## Usage

To set up the Omnichannel Inventory Service Fulfill Reservation Input:

1.  For each reservation to fulfill, use Assignment elements to set the actionRequestId, externalRefId, locationIdentifier, quantity, and stockKeepingUnit field values on a ConnectApi.OCIFulfillReservationSingleInputRepresentation variable.
2.  Use Assignment elements to add the ConnectApi.OCIFulfillReservationSingleInputRepresentation variables to the fulfillmentRecords field on a ConnectApi.OCIFulfillReservationInputRepresentation variable.
3.  Use the ConnectApi.OCIFulfillReservationInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Omnichannel Inventory Flow Core Actions](../flow/flow_ref_elements_oci_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

