# What's the Difference Between Workflow Rules and Flows?

Salesforce offers several features that automate standard internal procedures and business processes to save time across your org. Despite their similar names, workflow rules and flows are separate Salesforce features for automating business processes.

Workflow rule
:   A workflow rule is the main container for a set of workflow instructions, which can be broken into two main components.

    1.  Criteria: what must be true of the record for the workflow rule to execute the associated actions. A workflow rule’s criteria is always tied to one object.
    2.  Actions: what to do when the record meets the criteria.

Flow
:   A flow is an application that automates a business process by collecting data and doing something in your Salesforce org or an external system. Unlike workflow rules, which always execute behind the scenes, flows can provide screens to guide users through your business process.

    Flows aren’t tied to any one object. They can look up, create, update, and delete records for multiple objects. You build flows using Flow Builder, which is a point-and-click tool.

**Parent topic:**[Flow Concepts](../flow/flow_concepts.md)

**Related information**  


[../process/process\_which\_tool.md](../process/process_which_tool.md)

[../workflow/customize\_wf.md](../workflow/customize_wf.md)

[Flow Builder](../flow/flow.md)

