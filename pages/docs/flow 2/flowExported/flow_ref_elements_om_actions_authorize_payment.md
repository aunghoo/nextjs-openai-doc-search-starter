# Flow Core Action for Order Management: Authorize Payment

Authorize a payment on a credit card. You can include details for a new credit card or reference an existing PaymentMethod.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Order Management|

In Flow Builder, add an Action element to your flow. Select the **Order Management** category, and search for **Authorize Payment**. To access this action from REST API, use the name `authorizePayment`.

**Note:** This action is available with the PaymentsAPIUser user permission.

## Set Input Values

Use values from earlier in the flow to set the inputs.

|Input Parameter|Description|
|---------------|-----------|
|Payment Authorization Request|This input is an Apex-defined variable of class [ConnectApi.AuthorizationRequest](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_authorization.htm), which includes these fields:-   accountId —ID of the account that contains the payment transaction being authorized.
-   amount —Authorization amount.
-   comments —\(Optional\) Comments for the payment authorization.
-   currencyIsoCode —Three-letter ISO 4217 currency code associated with the payment group record.
-   effectiveDate —Date that the authorization is applied to the transaction.
-   paymentGatewayId —Payment gateway that processes the authorization.
-   paymentGroup —\(Optional\) Payment group for the authorization. The payload must reference either a paymentGroup or a paymentGroupId, but not both. This field is an Apex-defined variable of class [ConnectApi.PaymentGroupRequest](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_payment_group.htm), which includes these fields:
    -   createPaymentGroup—\(Optional\) Specifies whether to create a payment group \(true\) or not \(false\).
    -   currencyIsoCode —\(Optional\) Three-letter ISO 4217 currency code associated with the payment group record.
    -   id—\(Optional\) ID of the payment group record.
    -   sourceObjectId—\(Optional\) Source object ID of the payment group record. Supports only OrderId.
-   paymentMethod —Payment method for the authorization. The payload must either reference an existing payment method or include details for a new payment method, but not both. This field is an Apex-defined variable of class [ConnectApi.AuthApiPaymentMethodRequest](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_auth_api_payment_method.htm), which includes these fields:

**Note:** This input includes the fields from the parent class, [ConnectApi.BaseApiPaymentMethodRequest](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_base_api_payment_method.htm).

    -   address—Address for the payment method. This field is an Apex-defined variable of class [ConnectApi.AddressRequest](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_address.htm). It includes these fields, all of which are optional:
        -   city
        -   companyName
        -   country
        -   postalCode
        -   state
        -   street
    -   cardPaymentMethod —\(Optional\) When using a new payment method, the details of that method. This field is an Apex-defined variable of class [ConnectApi.CardPaymentMethodRequest](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_input_card_payment_method.htm), which includes these fields:
        -   accountId—Salesforce account to which this payment method is linked.
        -   cardCategory —Valid values are CreditCard and DebitCard.
        -   cardHolderFirstName—First name of the card holder.
        -   cardHolderLastName—Last name of the card holder.
        -   cardHolderName—Full name of the card holder.
        -   cardNumber—Card number.
        -   cardType—Valid values are:
            -   AmericanExpress
            -   DinersClub
            -   JCB
            -   Maestro
            -   MasterCard
            -   Visa
        -   comments —\(Optional\) Comments for the payment method.
        -   cvv—CVV.
        -   email—Email of the card holder.
        -   expiryMonth—Card expiration month.
        -   expiryYear—Card expiration year.
        -   nickName—\(Optional\) Nickname for the payment method.
        -   startMonth—\(Optional\) Start month of the card.
        -   startYear—\(Optional\) Start year of the card.
    -   id—\(Optional\) When using an existing payment method, the ID of that method.
    -   saveForFuture—Whether to save the payment method for future use.

|

## Store Output Values

Use output values later in the flow. The values are assigned when a response is received from the payment gateway.

|Output Parameter|Description|
|----------------|-----------|
|Payment Authorization Response|This output is an Apex-defined variable of class [ConnectApi.AuthorizationResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_authorization_output.htm), which includes these fields:-   error —If an error is returned, details about that error. This field is an Apex-defined variable of class [ConnectApi.ErrorResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_error_response.htm), which includes these fields:
    -   errorCode—Error code.
    -   message—More detail, if available.
-   gatewayResponse —Response from the payment gateway. This field is an Apex-defined variable of class [ConnectApi.AuthorizationGatewayResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_authorization_gateway_response.htm), which includes this field:
    -   gatewayAuthorizationCode—Payment authorization code.
-   paymentAuthorization —Details about the payment authorization. This field is an Apex-defined variable of class [ConnectApi.PaymentAuthorizationResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_payment_authorization_output.htm), which includes these fields:
    -   accountId —ID of the account that contains the payment transaction being authorized.
    -   amount —Amount that the gateway authorized for the payment transaction.
    -   currencyIsoCode —Three-letter ISO 4217 currency code associated with the payment group record.
    -   effectiveDate—Date that the authorization becomes effective.
    -   expirationDate—Date that the authorization expires.
    -   id—ID of the payment authorization record.
    -   paymentAuthorizationNumber—System-defined number for the payment authorization record.
    -   requestDate—Date that the authorization occurred.
    -   status—Status of the payment authorization as returned by the gateway.
-   paymentGatewayLogs —Payment gateway log information about the authorization transaction. This field is a list of Apex-defined variables of class [ConnectApi.GatewayLogResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_gateway_log_output.htm), each of which includes these fields:
    -   createdDate—Date when the gateway log was created.
    -   gatewayResultCode—Result codes that show the status of a transaction as it is passed to the financial institution and then returned to the client.
    -   id—ID of the gateway log record.
    -   interactionStatus—Gateway interaction status. It can be `SUCCESS`, `FAILED`, or `TIMEOUT`.
-   paymentGroup —Details about the payment group. This field is an Apex-defined variable of class [ConnectApi.PaymentGroupResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_payment_group.htm), which includes these fields:
    -   currencyIsoCode —Three-letter ISO 4217 currency code associated with the payment group record.
    -   id—ID of the payment group record.
    -   sourceObjectId—Source object ID of the payment group record.
-   paymentMethod —Details about the payment method. This field is an Apex-defined variable of class [ConnectApi.PaymentMethodResponse](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_connectapi_output_payment_method_output.htm), which includes these fields:
    -   accountId —ID of the account for the payment method.
    -   id—ID of the payment method.
    -   status—Status of the payment method.

|

## Usage

Use this action in custom flows that require payment authorization, such as adding an item to an order or an uneven exchange. Before using it, verify with your payment provider that it supports payment authorization calls from Salesforce Order Management.

**Parent topic:**[Salesforce Order Management Flow Core Actions](../flow/flow_ref_elements_om_actions_list.md)

