Define the Run Order of Record-Triggered Flows for an Object[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

Define the Run Order of Record-Triggered Flows for an Object
============================================================

Specify a trigger order value to determine the run order of before-save or after-save flows for the same object.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Declaratively configure a flow to run before or after another flow. Order your flows to help ensure consistent results without creating overly complex flows, letting you divide automation by teams or logical owners.

When you save a before- or after-save record-triggered flow, specify a trigger order value from 1 to 2,000. If a flow is already saved, specify a trigger order value in the flow’s version properties.

*   **[Guidelines for Defining the Run Order of Record-Triggered Flows for an Object](/s/articleView?id=sf.flow_concepts_trigger_guidelines.htm&language=en_US&type=5)**  
    Learn guidelines for configuring a record-triggered flow to run before or after another record-triggered flow.