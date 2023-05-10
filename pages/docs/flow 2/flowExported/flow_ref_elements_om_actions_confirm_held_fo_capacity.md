# Flow Core Action for Order Management: Confirm Held Fulfillment Order Capacity

Confirm held fulfillment order capacity at one or more locations. This action decreases a location’s held capacity and increases its assigned fulfillment order count. Confirm held capacity when you assign a fulfillment order to a location.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Confirm Held Fulfillment Order Capacity**.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Confirm Held Fulfillment Order Capacity Input|This input is an Apex-defined variable of class [ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_confirm_held_f_o_capacity_request.htm), which includes these fields:-   allOrNothing —\(Optional\) Controls whether a single failed request cancels all other requests in the list \(true\) or whether some requests can succeed if others fail \(false\). The default value is false.
-   capacityRequests —This field is a list of Apex-defined variables of class [ConnectApi.CapacityRequestInputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_capacity_request.htm). Each of the variables represents a request to confirm one fulfillment order assigned to one location, and includes these fields:
    -   actionRequestId —Unique string that identifies the request. Can be a UUID. Use the action request IDs in response data to identify which requests succeeded or failed.
    -   locationId —ID of the location associated with the request.

|

## Store Output Values

Use output values later in the flow. The values are assigned when the capacity properties are updated.

|Output Parameter|Description|
|----------------|-----------|
|Confirm Held Fulfillment Order Capacity Output|This output is an Apex-defined variable of class [ConnectApi.ConfirmHeldFOCapacityResponseOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_confirm_held_f_o_capacity_response_output.htm), which includes this field:-   capacityResponses —This field is a list of Apex-defined variables of class [ConnectApi.CapacityResponseOutputRepresentation](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_capacity_response_output.htm), each of which includes these fields:
    -   actionRequestId —Unique string that identifies the original capacity request.
    -   error —This field is an Apex-defined variable of class [ConnectApi.ErrorResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_error_response.htm), which includes these fields:
        -   errorCode —Error code, if the request returned an error.
        -   message —More error detail, if available.
    -   success —Indicates whether the request was successful \(true\) or not \(false\).

|

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

