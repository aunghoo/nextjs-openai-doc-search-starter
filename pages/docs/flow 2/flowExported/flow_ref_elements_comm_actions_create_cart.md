# Flow Core Action for Commerce Checkout Flow: Create Cart

Create a cart.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions|

In Flow Builder, add an Action element to your flow. Select the **Commerce** category, and search for **Create Cart**. To access this action from REST API, use the name `createCart`.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Web Store ID|The ID of the web store.|
|Cart Input|This input is an Apex-defined variable of class [ConnectApi.CartInput](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_cart.htm), which includes these fields:-   effectiveAccountId — \(Optional\) ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.
-   isSecondary — \(Optional\) Specifies whether the cart is secondary \(true\) or not \(false\). If unspecified, defaults to false.
-   name — \(Optional\) Name of the cart. The name can have up to 250 Unicode characters. If unspecified, defaults to the generated name.
-   type — \(Optional\) Type of cart. The only valid value is Cart. If unspecified, defaults to Cart.

|

## Store Output Values

Use output values later in the flow. The values are assigned when the cart is created.

|Output Parameter|Description|
|----------------|-----------|
|Cart Summary|This output is an Apex-defined variable of class [ConnectApi.CartSummary](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_cart_summary.htm), which includes these fields:-   accountId — ID of the account for the cart.
-   cartId — ID of the cart.
-   currencyIsoCode — Three-letter ISO 4217 currency code associated with the cart.
-   grandTotalAmount — Grand total amount including shipping and tax for items in the cart, in the currency of the cart.
-   isSecondary — Specifies whether the cart is secondary \(true\) or not \(false\).
-   name — Name of the cart.
-   purchaseOrderNumber — Purchase order for the cart.
-   status — Status of the cart. Possible values are:
    -   Active— Cart is active.
    -   Checkout— Cart is in checkout.
    -   Closed— Cart is closed.
    -   PendingDelete— Cart is pending deletion; for example, a user deleted the cart but the job hasn’t completed yet.
    -   Processing— Cart is processing.
-   totalChargeAmount — Total amount for shipping and other charges in the currency of the cart.
-   totalListPrice — Total list price for the cart.
-   totalProductAmount — Total amount including discounts, but excluding shipping and tax, for product items in the cart.
-   totalProductAmount​AfterAdjustments — Total product amount, including promotions.
-   totalProductCount — Total count of items in the cart.
-   totalPromotional​AdjustmentAmount — Total promotional adjustment amount for items in the cart.
-   totalTaxAmount — Total tax amount for the cart, including tax on shipping, if applicable.
-   type — Type of cart. Value is always Cart.
-   uniqueProductCount — Total count of unique items, or SKUs, in the cart.
-   webstoreId — ID of the web store of the cart.

|

## Error Conditions

|Error Condition|Description|
|---------------|-----------|
|The user doesn’t have access to create a cart.

|Error Message: You don't have access to this cart. If possible, contact the admin for this web store.

 Error Code: INSUFFICIENT\_ACCESS\_OR\_READONLY

 HTTP Status Code: 400

|

**Parent topic:**[Commerce Checkout Flow Core Actions](../flow/flow_ref_elements_comm_actions_list.md)

