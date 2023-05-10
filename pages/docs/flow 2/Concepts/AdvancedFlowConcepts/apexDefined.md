Apex-Defined Data Type[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

Apex-Defined Data Type
======================

With the Apex-defined data type, flows can manipulate the kinds of complex data objects that are typically returned from calls to web services. Create Apex-defined variables in flows and directly process JSON returned from web calls.

### Required Editions

Available in: both Salesforce Classic ([not available in all orgs](/s/articleView?id=sf.overview_edition_lex_only.htm&language=en_US&type=5)) and Lightning Experience

Available in: **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

A developer can define an Apex class to serve as a pattern for automatic conversion from web to a flow, allowing full manipulation of the resulting objects to be carried out in flows using declarative approaches and no additional code. Apex-defined resources are useful for connecting flows to rich external web objects accessed via Mulesoft and REST calls. If a data type is not supported, flows can pass the value to a Lightning component and you can use Apex to operate on it.

![Example](https://resources.help.salesforce.com/images/f3158d3e702ac9d8ee278341a1328246.png)

Example A car dealership has a screen flow that lets customers search the dealership’s inventory data, which is stored in another database. The dealership creates an Apex class in their org to define the Car data type. Then, the dealership creates a screen flow that includes two Apex-defined variables. The flow passes the variables between the flow, an Apex action, and a Lightning component.

#### See Also

*   [Considerations for the Apex-Defined Data Type](/s/articleView?id=sf.flow_considerations_apex_data_type.htm&language=en_US&type=5 "Understand these considerations when you’re building flows that include an Apex-defined data type.")