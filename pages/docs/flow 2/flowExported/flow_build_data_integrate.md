# Integrate with External Systems from a Flow

With Get Records elements, you can easily look up your Salesforce data in a flow. But what if you need data that lives outside of Salesforce? To connect your flow to an external database, use platform events, external objects, Lightning components, External Services, or Apex.

|Available in: both Salesforce Classic \([not available in all orgs](../overview/overview_edition_lex_only.md)\) and Lightning Experience|
|Platform events, External Services, and Apex are available in: **Enterprise**, **Performance**, **Unlimited**, and **Developer** EditionsLightning components are available in: ****

|

Platform Events
:   Deliver secure and expandable custom notifications within Salesforce or from external sources by using platform events. To publish event messages from your flow, add a Create Records element, where the specified object is the platform event. To subscribe to messages, add a Pause element.

External Objects
:   Reference data that’s stored outside your Salesforce org by using external objects. After you’ve mapped the external system to an external object in your org, use flow data elements to get, create, or update data in the external system.

Custom Lightning Components
:   Connect to a database that’s behind your firewall without going through the Salesforce server by calling a local action. All local actions appear in Flow Builder as Core Action elements.

External Services
:   Connect to any external system without writing a line of code. You tell us which endpoint and schema you want to use, and we generate Apex classes for you. The Apex classes appear in Flow Builder as Apex actions. External Services supports OpenAPI 2.0 JSON schema format.

Apex
:   If you want more control, write your own Apex code to integrate with an external system. To make your Apex code available in the Flow Builder, use either the `@InvocableMethod` annotation or the `Process.Plugin` interface.

|Integration Option|Declarative|Server-Side|Client-Side|Synchronous|Asynchronous|
|------------------|-----------|-----------|-----------|-----------|------------|
|Platform events|![Checkmark icon indicating true](../images/checkmark_16x16.png)|![Checkmark icon indicating true](../images/checkmark_16x16.png)| | |![Checkmark icon indicating true](../images/checkmark_16x16.png)|
|External objects|![Checkmark icon indicating true](../images/checkmark_16x16.png)|![Checkmark icon indicating true](../images/checkmark_16x16.png)| |![Checkmark icon indicating true](../images/checkmark_16x16.png)| |
|Custom Lightning components| | |![Checkmark icon indicating true](../images/checkmark_16x16.png)|![Checkmark icon indicating true](../images/checkmark_16x16.png)|![Checkmark icon indicating true](../images/checkmark_16x16.png)|
|External Services|![Checkmark icon indicating true](../images/checkmark_16x16.png)|![Checkmark icon indicating true](../images/checkmark_16x16.png)| |![Checkmark icon indicating true](../images/checkmark_16x16.png)| |
|Apex| |![Checkmark icon indicating true](../images/checkmark_16x16.png)| |![Checkmark icon indicating true](../images/checkmark_16x16.png)|![Checkmark icon indicating true](../images/checkmark_16x16.png)|

-   **[HTTP Callout](../flow/flow_http_callout.md)**  
HTTP Callout pulls or sends data \(beta\) between the Salesforce database and an external system via Flow Builder without using code. You can set up direct integrations as needed without having to work with a developer or call a middleware tool, such as Mulesoft. After you configure the HTTP callout action in a flow, Flow Builder auto-generates an external service registration, an invocable action, and Apex class that you can use to create an Apex-defined resource for flows. You can then use the data output of the API request as input within Flow Builder and across Salesforce.

**Parent topic:**[Working with Data](../flow/flow_build_data.md)

**Related information**  


[../developer/platform\_events.md](../developer/platform_events.md)

[../external\_services/external\_services.md](../external_services/external_services.md)

[../flow/flow\_build\_extend\_apex.md](../flow/flow_build_extend_apex.md)

[../flow/flow\_build\_extend\_lc\_action.md](../flow/flow_build_extend_lc_action.md)

[*Lightning Aura Components Developer Guide*: Create Flow Local Actions Using Aura Components](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions.htm)

