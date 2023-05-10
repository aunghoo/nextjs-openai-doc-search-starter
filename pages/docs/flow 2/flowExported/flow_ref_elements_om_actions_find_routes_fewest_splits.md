# Flow Core Action for Order Management: Find Routes with Fewest Splits

Evaluate ordered product quantities against available inventory to determine the smallest combination of locations that can fulfill the order. If multiple combinations of the minimum number of locations can fulfill the order, the action returns multiple options. Optionally, you can specify a maximum allowable number of locations. By default, the action executes up to 1,000,000 times, stopping once it hits 10,000 results.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Find Routes With Fewest Splits**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Order Routing Minimize Shipments Input|This input is an Apex-defined variable of class [ConnectApi.FindRoutesWithFewestSplitsInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_find_routes_with_fewest_splits.htm).The locationAvailableInventory field is a list of Apex-defined variables of class [ConnectApi.LocationAvailabilityInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_location_availability.htm). Each of the variables represents a fulfillment location to consider and includes these fields:

-   externalReferenceId — External reference ID of the inventory location.
-   quantity — Available quantity of the product.
-   stockKeepingUnit — Stock Keeping Unit \(SKU\) of the product.

The maximumNumberOfSplits field is the maximum allowable number of shipment splits. The action doesn’t return routing options that involve more than this number of splits.

**Note:** Each split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on.

The orderedQuantities field is a list of Apex-defined variables of class [ConnectApi.QuantityWithSkuInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_quantity_with_sku.htm). Each of the variables represents an ordered product quantity to fulfill, and includes these fields:

-   quantity — Ordered quantity of the product.
-   stockKeepingUnit — SKU of the product.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Order Routing Minimize Shipments Output|This output is an Apex-defined variable of class [ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_find_routes_with_fewest_splits_output.htm), which contains the sets of fulfillment locations that meet the requirements.The variable has one field, targetLocations. This field is a list of Apex-defined variables of class [ConnectApi.AvailableLocationOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_available_location_output.htm), each of which represents a set of fulfillment locations that can combine to fulfill the ordered products.

Each of the variables includes one field, locations. This field is a list of the locations in the set.

|

## Usage

To set up the Order Routing Minimize Shipments Input:

1.  Use Assignment elements to set the externalReferenceId, quantity, and stockKeepingUnit field values on one or more ConnectApi.LocationAvailabilityInputRepresentation variables.
2.  Use Assignment elements to set the quantity and stockKeepingUnit field values on one or more ConnectApi.QuantityWithSkuInputRepresentation variables.
3.  Use an Assignment element to add the ConnectApi.LocationAvailabilityInputRepresentation variables to the locationAvailableInventory field on a ConnectApi.FindRoutesWithFewestSplitsInputRepresentation variable.
4.  Optionally, use an Assignment element to set the maximumNumberOfSplits field on the ConnectApi.FindRoutesWithFewestSplitsInputRepresentation variable.
5.  Use an Assignment element to add the ConnectApi.QuantityWithSkuInputRepresentation variables to the orderedQuantities field on the ConnectApi.FindRoutesWithFewestSplitsInputRepresentation variable.
6.  Use the ConnectApi.FindRoutesWithFewestSplitsInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

