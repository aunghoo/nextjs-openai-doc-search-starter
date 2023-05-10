# Flow Core Action for Commerce Checkout Flow: Add Cart Item

Add an item to a cart.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions|

In Flow Builder, add an Action element to your flow. Select the **Commerce** category, and search for **Add Cart Item**. To access this action from REST API, use the name `addCartItem`.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Cart State or ID|ID of the cart or state of the cart to add an item to. Valid state values are: active and current. A current cart is neither closed nor pending deletion.|
|effectiveAccountId|\(Optional\) ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.|
|Web Store ID|The ID of the web store.|
|Cart Item Input|This input is an Apex-defined variable of class [ConnectApi.CartItemInput](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_cart_item.htm), which includes these fields:-   productId — ID of the product.
-   quantity — Quantity of the cart item. Use a value that can be converted to BigDecimal.
-   type — Type of the cart item. The only valid value is Product.

|

## Store Output Values

Use output values later in the flow. The values are assigned when the item is created.

|Output Parameter|Description|
|----------------|-----------|
|Added Cart Item|This output is an Apex-defined variable of class [ConnectApi.CartItem](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_cart_item.htm), which includes these fields:-   itemizedAdjustment​Amount — Total itemized adjustment amount for the item, including promotions and excluding taxes.
-   listPrice — List price for the item.
-   salesPrice — Sales price for the item.
-   totalAdjustmentAmount — Adjustments made to the unit price for the item. This value is informational only and isn’t used in pricing calculations.
-   totalAmount — Total amount for the item.
-   totalListPrice — Total list price for the item.
-   totalPrice — Total price for the item including adjustments but excluding taxes.
-   totalTax — Total tax for the item.
-   unitAdjustedPrice — Unit price, including adjustments, for the item. This value is informational only and isn’t used in pricing calculations.
-   unitAdjustmentAmount — Total amount including discounts, but excluding shipping and tax, for product items in the cart.

|

## Error Conditions

|Error Condition|Description|
|---------------|-----------|
|The user doesn’t have access to the cart.

|Error Message: You don't have access to this cart. If possible, contact the admin for this web store.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 400

|

**Parent topic:**[Commerce Checkout Flow Core Actions](../flow/flow_ref_elements_comm_actions_list.md)

