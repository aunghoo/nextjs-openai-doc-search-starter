# Flow Core Action for Omnichannel Inventory: Get Availability

Get inventory availability data for one or more products at one or more inventory locations or location groups.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Omnichannel Inventory|

In Flow Builder, add an Action element to your flow. Select the **Omnichannel Inventory Service** category, and search for **Omnichannel Inventory Service Get Availability**.

**Note:** Set the flow’s runtime API version to 52.0 or later.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Omnichannel Inventory Service Get Availability Input|This input is an Apex-defined variable of class [ConnectApi.OCIGetInventoryAvailabilityInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_o_c_i_get_inventory_availability.htm).The variable has these fields:

-   locationGroupIdentifier—Optional. Can’t combine with locationGroupIdentifiers or locationIdentifiers. The identifier of a location group to retrieve inventory availability data for. Specifying this value retrieves inventory data for all locations belonging to this group.
-   locationGroupIdentifiers—Optional; can’t combine with locationGroupIdentifier or locationIdentifiers. A list of up to 100 identifiers of location groups to retrieve inventory availability data for.
-   locationIdentifiers—Optional; can’t combine with locationGroupIdentifier or locationGroupIdentifiers. A list of up to 100 identifiers of locations to retrieve inventory availability data for.
-   stockKeepingUnit—Optional; can’t combine with stockKeepingUnits. The SKU of a product to retrieve inventory availability data for. Specifying a SKU with no locations or location groups returns availability data for that SKU at all inventory locations that aren’t assigned to location groups.
-   stockKeepingUnits—Optional; can’t combine with stockKeepingUnit. A list of up to 100 SKUs of products to retrieve inventory availability data for.
-   useCache—Optional. Fetch the inventory data from the cache. Default value is true.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Omnichannel Inventory Service Get Availability Output|This input is an Apex-defined variable of class [ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_get_inventory_availability_output.htm).The variable has these fields:

-   locationGroups—A list of Apex-defined variables of class [ConnectApi.OCILocationGroupAvailabilityOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_location_group_availability_output.htm). Each variable represents availability data for one location group and has these fields:
    -   inventoryRecords—A list of Apex-defined variables of class [ConnectApi.OCIInventoryRecordOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_inventory_record_output.htm). Each variable represents availability of one product and has these fields:
        -   availableToFulfill—The Available To Fulfill quantity.
        -   availableToOrder—The Available To Order quantity.
        -   effectiveDate—The effective date of the inventory.
        -   futures—A list of Apex-defined variables of class [ConnectApi.OCIFutureInventoryOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_future_inventory_output.htm). Each variable represents one future restock and has these fields:
            -   expectedDate—Date when the future inventory is expected.
            -   quantity—Quantity of the future inventory.
        -   onHand—The On Hand quantity.
        -   reserved—The Reserved quantity.
        -   safetyStockCount—The Safety Stock Count.
        -   stockKeepingUnit—The SKU of the product.
    -   locationGroupIdentifier—The identifier of the location group.
-   locations—A list of Apex-defined variables of class [ConnectApi.OCILocationAvailabilityOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_location_availability_output.htm). Each variable represents availability data for one location and has these fields:
    -   inventoryRecords—A list of Apex-defined variables of class [ConnectApi.OCIInventoryRecordOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_inventory_record_output.htm). Each variable represents availability of one product and has these fields:
        -   availableToFulfill—The Available To Fulfill quantity.
        -   availableToOrder—The Available To Order quantity.
        -   effectiveDate—The effective date of the inventory.
        -   futures—A list of Apex-defined variables of class [ConnectApi.OCIFutureInventoryOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_o_c_i_future_inventory_output.htm). Each variable represents one future restock and has these fields:
            -   expectedDate—Date when the future inventory is expected.
            -   quantity—Quantity of the future inventory.
        -   onHand—The On Hand quantity.
        -   reserved—The Reserved quantity.
        -   safetyStockCount—The Safety Stock Count.
        -   stockKeepingUnit—The SKU of the product.
    -   locationIdentifier—The identifier of the location.

|

## Usage

To set up the Omnichannel Inventory Service Get Availability Input:

1.  Use Assignment elements to set the locationGroupIdentifier, locationGroupIdentifiers, or locationIdentifiers field value, stockKeepingUnit or stockKeepingUnits field value, and useCache field value on a ConnectApi.OCIGetInventoryAvailabilityInputRepresentation variable.
2.  Use the ConnectApi.OCIGetInventoryAvailabilityInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Omnichannel Inventory Flow Core Actions](../flow/flow_ref_elements_oci_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

