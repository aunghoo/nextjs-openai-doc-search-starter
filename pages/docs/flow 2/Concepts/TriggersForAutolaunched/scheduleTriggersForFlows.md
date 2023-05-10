Schedule Triggers for Flows That Run for Batches of Records[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

Schedule Triggers for Flows That Run for Batches of Records
===========================================================

A schedule-triggered flow starts at the specified time and frequency for a batch of records. Configure the schedule trigger in the Start element of your autolaunched flow.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Schedule an autolaunched flow to start at a specific time and set it to run once, daily, or weekly. To have the scheduled flow run for a batch of records, specify the object and the filter conditions that each record must meet.

A flow interview runs for each record in the batch and stores all of the record’s field values in the `$Record` global variable. As you build the scheduled flow, reference the `$Record` global variable to access the record’s field values.

If you configure an Update Records element to use the ID and all field values from the $Record global variable, enable Filter inaccessible fields from flow requests in your org’s process automation settings. Otherwise, the flow fails because the Update Records element tries to set the values for system fields and other read-only fields.

You can monitor scheduled flows from the Scheduled Jobs page in Setup.

#### See Also

*   [Schedule-Triggered Flow Considerations](/s/articleView?id=sf.flow_considerations_trigger_schedule.htm&language=en_US&type=5 "A schedule-triggered flow starts at the specified time and frequency for a batch of records. Understand the considerations and special behaviors of schedule-triggered flows, also known as scheduled flows.")
*   [Troubleshooting Considerations for Flows](/s/articleView?id=sf.flow_considerations_troubleshooting.htm&language=en_US&type=5 "Before you use the debug option in Flow Builder, understand its limitations and special behaviors.")