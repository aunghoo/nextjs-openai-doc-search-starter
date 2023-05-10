# Flow Core Action for Omnichannel Inventory: Create Reservation

Create one or more inventory reservations at a location or location group.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Omnichannel Inventory|

In Flow Builder, add an Action element to your flow. Select the **Omnichannel Inventory Service** category, and search for **Omnichannel Inventory Service Create Reservation**.

**Note:** Set the flow’s runtime API version to 52.0 or later.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Omnichannel Inventory Create Service Reservation Input|This input is an Apex-defined variable of class [ConnectApi.OCICreateReservationInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_o_c_i_create_reservation.htm).The variable has these fields:

-   actionRequestId—A UUID that identifies the request. To identify which actions succeeded or failed, use the action request IDs in output variables.
-   allowPartialReservations—Optional. When true, if the system can’t create the entire reservation, then it attempts to create a partial reservation.
-   createRecords—A list of up to 100 Apex-defined variables of class [ConnectApi.OCICreateReservationSingleInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_o_c_i_create_reservation_single.htm). Each variable has these fields:
    -   locationGroupIdentifier—Identifier of the location group at which to reserve inventory. Either locationGroupIdentifier or locationIdentifier is required, but not both.
    -   locationIdentifier—Identifier of the location at which to reserve inventory. Either locationIdentifier or locationGroupIdentifier is required, but not both.
    -   quantity—The quantity of the product to reserve.
    -   stockKeepingUnit—The Stock Keeping Unit \(SKU\) of the product to reserve.
-   expirationSeconds—Optional. A length of time in seconds. If the reservation isn’t fulfilled within this amount of time after the reservationTime, then it expires. The maximum value is 14400.
-   externalRefId—Optional The external reference ID.
-   reservationTime—Optional The time at which to record the reservation. Example: 2020-07-24T21:13:00Z

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Omnichannel Inventory Service Create Reservation Output|This value is an Apex-defined variable of class [ConnectApi.OCICreateReservationOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_create_reservation_output.htm).The variable has these fields:

-   details—A list of Apex-defined variables of class [ConnectApi.OCICreateReservationSingleOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_create_reservation_single_output.htm). Each variable represents one product being reserved and has these fields:
    -   errorCode—The error code, if any.
    -   locationGroupIdentifier—Identifier of the location group where the inventory is reserved.
    -   locationIdentifier—Identifier of the location where the inventory is reserved
    -   quantity—The reserved quantity of the product.
    -   stockKeepingUnit—The SKU of the reserved product.
-   errors—A list of Apex-defined variables of class [ConnectApi.OCICreateReservationErrorOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_create_reservation_error_output.htm). Each variable represents a returned error, and has these fields:
    -   errorCode—The error code.
    -   message—Details of the error, if available.
-   expirationTime—The time at which the reservation would expire.
-   reservationTime—The time when the reservation was recorded.
-   success—Indicates whether the reservation succeeded.

|

## Usage

To set up the Omnichannel Inventory Create Service Reservation Input:

1.  For each product to reserve, use Assignment elements to set the locationGroupIdentifier or locationIdentifier field, quantity field, and stockKeepingUnit field values on a ConnectApi.OCICreateReservationSingleInputRepresentation variable.
2.  Use Assignment elements to add the ConnectApi.OCICreateReservationSingleInputRepresentation variables to the createRecords field on a ConnectApi.OCICreateReservationInputRepresentation variable.
3.  Use Assignment elements to set the actionRequestId, allowPartialReservations, expirationSeconds, externalRefId, and reservationTime field values on the ConnectApi.OCICreateReservationInputRepresentation variable.
4.  Use the ConnectApi.OCICreateReservationInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Omnichannel Inventory Flow Core Actions](../flow/flow_ref_elements_oci_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

