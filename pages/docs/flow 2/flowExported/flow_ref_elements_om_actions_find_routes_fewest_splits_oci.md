# Flow Core Action for Order Management: Find Routes with Fewest Splits Using OCI

Evaluate ordered product quantities against available inventory to determine the smallest combination of locations that can fulfill the order. If multiple combinations of the minimum number of locations can fulfill the order, the action returns multiple options. Optionally, you can specify a maximum allowable number of locations and a list of locations to exclude from the calculation. This action combines the Omnichannel Inventory Get Availability action and the Order Management Find Routes with Fewest Splits actions. Instead of calling Get Availability and including the output in the Find Routes with Fewest Splits input, call this action and specify a location or location group to fulfill each ordered product. By default, this action executes up to 1,000,000 times, stopping once it hits 10,000 results. This action handles the inventory check.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Find Routes With Fewest Splits Using OCI**.

**Note:** Set the flow’s runtime API version to 54.0 or later.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Find Routes With Fewest Splits Using OCI Input|This input is an Apex-defined variable of class [ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i.htm).The findRoutesWith​FewestSplits​UsingOCIInputs field is a list of Apex-defined variables of class [ConnectApi.FindRoutesWithFewest​SplitsGroupUsingOCI​InputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_find_routes_with_fewest_splits_group_using_o_c_i.htm). Each of the variables represents one order and includes these fields:

-   excludeLocations —List of locations to exclude from the routing calculations.
-   maximumNumberOfSplits —Maximum allowable number of shipment splits. The action doesn’t return routing options that involve more than this number of splits.

**Note:** Each split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on.

-   orderedItems —A list of Apex-defined variables of class [ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i_item.htm). Each of the variables represents an ordered product quantity to fulfill and a location or location group, and includes these fields:
    -   locationGroup​Identifier —External reference ID of the inventory location or location group.
    -   quantity —Ordered quantity of the product.
    -   stockKeepingUnit —Stock Keeping Unit \(SKU\) of the product.

|

## Store Output Values

Use output values later in the flow.

|Output Parameter|Description|
|----------------|-----------|
|Find Routes With Fewest Splits Using OCI Output|This output is an Apex-defined variable of class [ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm), which contains inventory availability data and the sets of fulfillment locations that meet the requirements.The variable has one field, results. This field is a list of Apex-defined variables of class [ConnectApi.FindRoutesWithFewestSplitsWithInventoryOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_find_routes_with_fewest_splits_with_inventory_output.htm), each of which represents the output for one order, and includes these fields:

-   inventory —Inventory availability data for the location groups and locations specified in the input.
-   targetLocations —A list of Apex-defined variables of class [ConnectApi.AvailableLocationOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_available_location_output.htm), each of which represents a set of fulfillment locations that can combine to fulfill the ordered products. Each of the variables includes one field, locations. This field is a list of the locations in the set.

|

## Usage

To set up the Find Routes With Fewest Splits Using OCI Input:

1.  Use assignment elements to set the values for the locationGroup​Identifier, quantity, and stockKeepingUnit field values on one or more ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation variables.
2.  Use assignment elements to add the ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation variables to the orderedItems field on a ConnectApi.FindRoutesWithFewest​SplitsGroupUsingOCI​InputRepresentation variable.
3.  Optionally, use an assignment element to set the value for the maximumNumberOfSplits field on the ConnectApi.FindRoutesWithFewest​SplitsGroupUsingOCI​InputRepresentation variable.
4.  Use an assignment element to add the ConnectApi.FindRoutesWithFewest​SplitsGroupUsingOCI​InputRepresentation variable to the findRoutesWith​FewestSplits​UsingOCIInputs field on a ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation variable.
5.  Repeat steps 1-4 for each order that you want to include in the action, adding the inputs to the same ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation variable.
6.  Use the ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation variable in the action input.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

