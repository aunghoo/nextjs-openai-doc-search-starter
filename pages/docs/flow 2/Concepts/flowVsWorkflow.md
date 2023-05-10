What's the Difference Between Workflow Rules and Flows?[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

[](/s?language=en_US)What's the Difference Between Workflow Rules and Flows?
============================================================================

Salesforce offers several features that automate standard internal procedures and business processes to save time across your org. Despite their similar names, workflow rules and flows are separate Salesforce features for automating business processes.

Workflow rule

A workflow rule is the main container for a set of workflow instructions, which can be broken into two main components.

1.  Criteria: what must be true of the record for the workflow rule to execute the associated actions. A workflow rule’s criteria is always tied to one object.
2.  Actions: what to do when the record meets the criteria.

Flow

A flow is an application that automates a business process by collecting data and doing something in your Salesforce org or an external system. Unlike workflow rules, which always execute behind the scenes, flows can provide screens to guide users through your business process.

Flows aren’t tied to any one object. They can look up, create, update, and delete records for multiple objects. You build flows using Flow Builder, which is a point-and-click tool.

#### See Also

*   [Best Practices for Migration to Flows](/s/articleView?id=sf.flow_migrate_to_flow_best_practices.htm&language=en_US&type=5 "Workflow Rules and Process Builder are no longer the preferred tools for automating your business processes. With their pending retirement, now is the time to go with flow as the future of automated processes. Flow offers built-in extensibility, application lifecycle management, faster performance, and a foundation for the future.")
*   [Which Automation Tool Do I Use?](/s/articleView?id=sf.process_which_tool.htm&language=en_US&type=5 "Salesforce provides a robust set of automation features to help you save time and resources. Use Flow Builder to automate most of your organization’s repetitive business processes. More features can provide further automation functionality, including approval processes, Flow Orchestration, Einstein Next Best Action, and Apex.")
*   [Workflow Rules](/s/articleView?id=sf.customize_wf.htm&language=en_US&type=5 "Workflow rules let you automate standard internal procedures and processes to save time across your org. A workflow rule is the main container for a set of workflow instructions. These instructions can always be summed up in an if/then statement.")
*   [Flow Builder](/s/articleView?id=sf.flow.htm&language=en_US&type=5 "Whether they’re buying movie tickets, paying bills, or changing restaurant reservations, when a customer interacts with a company, they expect a seamless and personalized experience. Flow Builder, formerly Salesforce Flow, provides declarative process automation for every Salesforce app, experience, and portal with point-and-click automation.")