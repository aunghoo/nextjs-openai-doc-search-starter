Guidelines for Defining the Run Order of Record-Triggered Flows for an Object[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

[](/s?language=en_US)Guidelines for Defining the Run Order of Record-Triggered Flows for an Object
==================================================================================================

Learn guidelines for configuring a record-triggered flow to run before or after another record-triggered flow.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

*   You can define a trigger order values only for before-save or after-save flows on an object. Trigger order affects only the specified object's flows with the same trigger type.
*   Trigger order values always respect order of execution rules. For example, you can make an after-save flow run before other after-save flows, but you can’t make an after-save flow run before a before-save flow or an Apex trigger, even if the trigger order value is lower.
*   Flows with the same trigger (before- or after-save) on the same object with trigger order values from 1 to 1,000 run in ascending order (1, 2, 3, and so on). Multiple flows with the same trigger order value run in alphabetical order based on the flows’ API names.
*   Flows without trigger order values run next and in the order of their created dates. Flows created in Winter ’22 and earlier run in this order, unless you define a trigger order value for them.
*   Flows with trigger order values from 1,001 to 2,000 run next and in ascending order. Multiple flows with the same trigger order value run in alphabetical order based on the flows’ API names.
*   When you order a large number of flows, a best practice is to evenly distribute the trigger order values, for example, 10, 20, 30, or 100, 200, 300. Then later, you can easily slot another flow in between, for example, between 10 and 20. This practice can help you avoid changing the trigger order values for preexisting flows.
*   Activating, deactivating, or changing the order for one flow can cause the order for other flows to automatically update. Ordering record-triggered flows has no direct effect on any associated scheduled or asynchronous paths.

#### See Also

*   [_Apex Developer Guide_: Triggers and Order of Execution](https://developer.salesforce.com/docs/atlas.en-us.242.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm "Apex Developer Guide: Triggers and Order of Execution
    - HTML (New Window)")