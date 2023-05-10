Record Triggers for Flows That Make Before-Save Updates[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

Record Triggers for Flows That Make Before-Save Updates
=======================================================

Creating or updating a record can trigger an autolaunched flow to make additional updates to that record before it's saved to the database. A record-triggered flow can update a Salesforce record 10 times faster than a record-change process. Configure the record trigger in the Start element of your autolaunched flow.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Perhaps you’re familiar with Process Builder and using a record-change process to make additional updates to each record that triggers the process. Before-save updates in flows accomplish that same goal, but much more quickly because each record doesn’t get saved to the database again. Avoiding that extra save procedure means skipping another round of assignment rules, auto-response rules, workflow rules, and other customizations that take time to execute.

Perhaps you’re familiar with Apex triggers. A flow that makes before-save updates is similar to a `before` trigger. The previously described record-change process is similar to an `after` trigger. In a save procedure, before-save updates in flows are executed immediately prior to Apex `before` triggers.

Because of their speed, we recommend that you use before-save updates in flows to update fields on new or changed records. However, sometimes you must use a record-change process or an Apex `after` trigger to:

*   Access field values that are set only after the record is saved, such as the Last Modified Date field or the ID of the new record.
*   Create or update related records.
*   Perform actions other than updating the record that launches the flow.

Flows that make before-save updates are typically simpler to build than other types of flows.

*   The `$Record` global variable contains the values from the record that triggers the flow to run. As a result, there’s no need to add a Get Records element to obtain the record data nor create flow variables to store the record data.
*   When the flow changes the values in the `$Record` global variable, Salesforce automatically applies those new values to the record. So there’s no need to add an Update Records element to save the new values to the database.
*   Only these elements are supported: Assignment, Decision, Get Records, and Loop. These elements let you obtain data from other Salesforce records, and use them to decide whether to update the triggering record’s fields and to what values.

#### See Also

*   [Record-Triggered Flow Considerations](/s/articleView?id=sf.flow_considerations_trigger_record.htm&language=en_US&type=5 "A record-triggered autolaunched flow makes additional updates to the triggering record before or after it’s saved to the database. Understand the considerations and special behaviors of flows that make before- and after-save updates.")
*   [_Apex Developer Guide_ : Triggers and Order of Execution](https://developer.salesforce.com/docs/atlas.en-us.242.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm "Apex Developer Guide : Triggers and Order of
    Execution - HTML (New Window)")