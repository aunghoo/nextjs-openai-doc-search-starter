API Version for Running a Flow[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

API Version for Running a Flow
==============================

Some run-time behavior improvements are delivered as versioned updates, so that you can control when each flow adopts those updates. Test and upgrade your flows one by one and at your own pace. You can even opt to never adopt versioned updates for one or all your flows.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

By default, when you create a flow, it’s configured to run in the latest API version. That API version doesn’t change as future Salesforce releases roll out. You decide when, if ever, to change the API version for running each flow.

Before you select a new API version, review all run-time improvements that were delivered between the currently selected API version and the new API version. You can find all flow and process run-time improvements for an API version in the Salesforce Release Notes. The API version for running a flow is specified in the flow version properties.

Sometimes, a release update is also available as a versioned update. Such a versioned update lets you adopt the changes for individual flows or processes before the release update is enforced. After the release update is adopted or enforced, all flows and processes in your org get the updated behavior regardless of their run-time API versions.

#### See Also

*   [Flow Version Properties](/s/articleView?id=sf.flow_ref_properties.htm&language=en_US&type=5 "A flow version’s properties consist of its label, description, interview label, and type. These properties drive the field values that appear on the flow’s detail page.")