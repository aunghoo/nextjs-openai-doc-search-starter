# HTTP Callout

HTTP Callout pulls or sends data \(beta\) between the Salesforce database and an external system via Flow Builder without using code. You can set up direct integrations as needed without having to work with a developer or call a middleware tool, such as Mulesoft. After you configure the HTTP callout action in a flow, Flow Builder auto-generates an external service registration, an invocable action, and Apex class that you can use to create an Apex-defined resource for flows. You can then use the data output of the API request as input within Flow Builder and across Salesforce.

|Available in: -   Lightning Experience
-   **Enterprise**, **Unlimited**, and **Developer** Editions

|

**Note:** The POST method is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

Admins who have the Customize Applications user permission can use HTTP Callout. You must be familiar with how APIs work and have the API document for the endpoint you’re calling.

The HTTP Callout configuration is powered by External Services, which makes the action reusable and invocable in Flow Builder and across your Salesforce org. Before you configure an integration with HTTP Callout, you set up authentication in Setup \> Named Credentials so that the external service can connect to the API.

You can use HTTP Callout to connect a flow to a variety of APIs.

-   Get address information using a map API–When a user enters an address into a screen flow, a real-time call to the Maps API provider is triggered. The provider sends back details on the address and displays business hours within the screen flow.
-   Get weather conditions with a weather service API–Perform a daily callout to a weather service and check the weather for a specific area. If the weather meets certain conditions, notify students that class is indoors or outdoors.
-   Get payment authorization information with a payment processing API–Call a payment processor with an invoice number and verify whether a payment has been made and has cleared.
-   Add records to an inventory system when product records are added to Salesforce.
-   Add leads and contacts to an external marketing automation tool.
-   Process a payment transaction through an external payment gateway.

-   **[../flow/flow\_http\_callout\_considerations.md](../flow/flow_http_callout_considerations.md)**  

-   **[Configuring an HTTP Callout Action](../flow/flow_http_callout_configuring.md)**  
Connect Flow Builder to an HTTP-based API without using code. To establish a connection between the API and Salesforce, you create an external credential and a named credential in Setup. Then, HTTP Callout guides you through describing the functionality of your API and the endpoint that you’re connecting to. Based on the information that you enter, Flow Builder generates an external service with a corresponding invocable action that you can use across Salesforce.
-   **[../flow/flow\_http\_callout\_manage.md](../flow/flow_http_callout_manage.md)**  


**Parent topic:**[Integrate with External Systems from a Flow](../flow/flow_build_data_integrate.md)

**Related information**  


[*Salesforce Help*: Named Credentials](https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm&type=5)

[*External Link*: FDA API](https://open.fda.gov/apis/openfda-fields/)

[*External Link*: NPPES NPI Registry API](https://npiregistry.cms.hhs.gov/api-page)

