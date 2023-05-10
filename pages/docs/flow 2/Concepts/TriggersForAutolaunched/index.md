Triggers for Autolaunched Flows[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

Triggers for Autolaunched Flows
===============================

In the Start element of an autolaunched flow, you can specify a trigger that launches the flow. The flow trigger can be a schedule or the new and changed records of a specified object. Without a trigger, you must set up other things to launch the flow, such as custom buttons, processes, Apex classes, or even Einstein Bots.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

*   **[Manage Record-Triggered Flows](/s/articleView?id=sf.flow_trigger_explorer.htm&language=en_US&type=5)**  
    See and manage your record-triggered flows with Flow Trigger Explorer. Flow Trigger Explorer shows all of the flows that are associated with a specified object and that run when a record is created, updated, or deleted.
*   **[Schedule Triggers for Flows That Run for Batches of Records](/s/articleView?id=sf.flow_concepts_trigger_schedule.htm&language=en_US&type=5)**  
    A schedule-triggered flow starts at the specified time and frequency for a batch of records. Configure the schedule trigger in the Start element of your autolaunched flow.
*   **[Record Triggers for Flows That Make Before-Save Updates](/s/articleView?id=sf.flow_concepts_trigger_record.htm&language=en_US&type=5)**  
    Creating or updating a record can trigger an autolaunched flow to make additional updates to that record before it's saved to the database. A record-triggered flow can update a Salesforce record 10 times faster than a record-change process. Configure the record trigger in the Start element of your autolaunched flow.
*   **[Define the Run Order of Record-Triggered Flows for an Object](/s/articleView?id=sf.flow_task_trigger_run_order.htm&language=en_US&type=5)**  
    Specify a trigger order value to determine the run order of before-save or after-save flows for the same object.

#### See Also

*   [_Apex Developer Guide_: Triggers and Order of Execution](https://developer.salesforce.com/docs/atlas.en-us.242.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm "Apex Developer Guide: Triggers and Order of Execution
    - HTML (New Window)")