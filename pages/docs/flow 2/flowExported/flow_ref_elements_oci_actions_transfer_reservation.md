# Flow Core Action for Omnichannel Inventory: Transfer Reservation

Transfer one or more inventory reservations between locations or location groups. This action reduces the reserved quantity at the source and increases it at the destination. It doesn’t change physical quantities.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Omnichannel Inventory|

In Flow Builder, add an Action element to your flow. Select the **Omnichannel Inventory Service** category, and search for **Omnichannel Inventory Service Transfer Reservation**.

**Note:** Set the flow’s runtime API version to 52.0 or later.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Omnichannel Inventory Service Transfer Reservation Input|This input is an Apex-defined variable of class [ConnectApi.OCITransferReservationInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_o_c_i_transfer_reservation.htm).The variable has these fields:

-   allOrNothingTransferId—Optional. Controls whether a single failed transfer cancels all other transfers in the transferRecords list.
    -   To allow some transfers in the transferRecords list to succeed when others fail, don’t set this value.
    -   To cancel all the transfers in the transferRecords list when any of them fail, set this value to a UUID. The ID must be unique, but isn’t otherwise used.
-   transferRecords—A list of up to 100 Apex-defined variables of class [ConnectApi.OCITransferReservationSingleInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_o_c_i_transfer_reservation_single.htm). Each variable represents an inventory transfer and has these fields:
    -   actionRequestId—A UUID that identifies the request. To identify which actions succeeded or failed, use the action request IDs in output variables.
    -   externalRefId—Optional. The external reference ID.
    -   fromLocationGroupIdentifier—The identifier of the location group transferring the reservation. Either fromLocationGroupIdentifier or fromLocationIdentifier is required, but not both.
    -   fromLocationIdentifier—The identifier of the location transferring the reservation. Either fromLocationIdentifier or fromLocationGroupIdentifier is required, but not both.
    -   ignoreAvailabilityCheck—If true, force the transfer even if the receiving location doesn’t have sufficient available inventory. The default value is false.
    -   quantity—The quantity of the product reservation to transfer.
    -   stockKeepingUnit—The Stock Keeping Unit \(SKU\) of the product reservation to transfer.
    -   toLocationGroupIdentifier—The identifier of the location group receiving the reservation. Either toLocationGroupIdentifier or toLocationIdentifier is required, but not both.
    -   toLocationIdentifier—The identifier of the location receiving the reservation. Either toLocationIdentifier or toLocationGroupIdentifier is required, but not both.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Omnichannel Inventory Service Transfer Reservation Output|This value is an Apex-defined variable of class [ConnectApi.OCITransferReservationOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_transfer_reservation_output.htm).The variable has these fields:

-   errors—A list of Apex-defined variables of class [ConnectApi.OCITransferReservationErrorOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_transfer_reservation_error_output.htm). Each variable represents a returned error and has these fields:
    -   details—An Apex-defined variable of class [ConnectApi.OCITransferReservationSingleOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_transfer_reservation_single_output.htm). Each variable represents a returned error and includes the fields from the input:
        -   actionRequestId—A UUID that identifies the failed request.
        -   externalRefId—The external reference ID.
        -   fromLocationGroupIdentifier—The identifier of the location group transferring the reservation.
        -   fromLocationIdentifier—The identifier of the location transferring the reservation.
        -   ignoreAvailabilityCheck—Whether this call ignored availability data at the location that received the reservation.
        -   quantity—The quantity of the product reservation to transfer.
        -   stockKeepingUnit—The SKU of the product reservation to transfer.
        -   toLocationGroupIdentifier—The identifier of the location group intended to receive the reservation.
        -   toLocationIdentifier—The identifier of the location intended to receive the reservation.
    -   errorCode—The error code.
    -   message—Details of the error, if available.
-   success—Indicates whether the transfer succeeded.

|

## Usage

To set up the Omnichannel Inventory Service Transfer Reservation Input:

1.  For each reservation to transfer, use Assignment elements to set the actionRequestId, externalRefId, fromLocationGroupIdentifier or fromLocationIdentifier, quantity, stockKeepingUnit, and toLocationGroupIdentifier or toLocationIdentifier field values on a ConnectApi.OCITransferReservationSingleInputRepresentation variable.
2.  Use Assignment elements to add the ConnectApi.OCITransferReservationSingleInputRepresentation variables to the transferRecords field on a ConnectApi.OCITransferReservationInputRepresentation variable.
3.  Use an Assignment element to set the allOrNothingTransferId field on the ConnectApi.OCITransferReservationInputRepresentation variable.
4.  Use the ConnectApi.OCITransferReservationInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Omnichannel Inventory Flow Core Actions](../flow/flow_ref_elements_oci_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

