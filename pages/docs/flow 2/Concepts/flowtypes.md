Flow Types[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

[](/s?language=en_US)Flow Types
===============================

A flow or flow version’s type determines which elements and resources are supported and the ways that the flow can be distributed.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Standard Flow Types
-------------------

These flow types are supported in Flow Builder.

Type

Description

Available Distribution Methods

Supported in Translation Workbench

Screen Flow

Requires user interaction because it includes screens, local actions, steps, choices, or dynamic choices. Screen flows don’t support Pause elements.

*   Flow actions
*   Lightning pages
*   Experience Builder pages
*   Custom Aura components
*   Custom Lightning web components
*   Custom buttons or custom links
*   Flow Orchestration
*   Web tabs
*   Direct flow URLs
*   Visualforce pages
*   Lightning Out
*   Embedded Service deployments

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Autolaunched Flow with No Flow Trigger

Doesn’t require user interaction. This flow type doesn’t support screens, local actions, choices, or choice sets.

*   Processes
*   Custom Apex classes
*   REST API
*   Flow Orchestration
*   Web tabs
*   Custom buttons or custom links
*   Visualforce pages

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Autolaunched Flow with a Schedule Trigger

Runs only from a schedule. This flow type doesn’t support user interaction, screens, local actions, choices, or choice sets.

A schedule-triggered flow runs only at the scheduled time and frequency.

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Autolaunched Flow with a Record Trigger

Makes before-save updates to the new or changed record that launches the flow. Only these elements are supported: Assignment, Decision, Get Records, and Loop.

A record-triggered flow runs only when a record is created or updated.

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Recommendation Strategy

Builds a personalized list of recommendations for users. When a user responds to a recommendation, that recommendation launches its assigned flow. Used by Einstein Next Best Action.

*   Einstein Next Best Action component on Lightning pages
*   Suggested Actions component on Experience Cloud pages
*   Visualforce pages

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

User Provisioning Flow

Provisions users for third-party services.

For example, use this flow type to customize the user provisioning configuration for a connected app to link Salesforce users with their Google Apps accounts.

A user provisioning flow can only be implemented by associating it with a connected app when running the User Provisioning Wizard.

Field Service Mobile Flow

Requires user interaction because it has one or more screens.

Field Service mobile app

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Field Service Embedded Flow

Requires user interaction because it has one or more screens.

Embedded Appointment Booking

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Contact Request Flow

Requires user interaction because it has one or more screens.

Use one of these Experience Builder components to add this flow.

*   Contact Request Button & Flow—launch the flow in a window
*   Flow—embed the flow directly on the page

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Checkout Flow

Used in Lightning B2B Commerce to create a checkout for your store. Requires user interaction because it has one or more screens.

Use the following Experience Builder component to add this flow to your store.

*   Checkout

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Orchestrator

Used by Flow Orchestration to create an orchestration. An orchestration is a series of stages made up of steps. Interactive steps contain a screen flow and require user interaction. Background steps contain an autolaunched flow and don’t require user interaction. See [Orchestration Types](/s/articleView?id=sf.orchestrator_concepts_type.htm&language=en_US&type=5 "An orchestration’s type determines how the orchestration can be distributed.") for Flow Orchestration availability.

*   Autolaunched orchestrations
    *   Custom Apex classes
    *   Custom buttons or custom links
*   Record-triggered orchestrations run only when a record is created or updated.

Evaluation Flow

Evaluates custom entry and exit conditions in an orchestration. Uses the `isOrchestrationConditionMet`output variable and discards values from any other output variables.

*   Orchestration stage custom exit condition
*   Orchestration interactive step custom entry or exit condition
*   Orchestration background step custom entry condition

Loyalty Management Flow

Used to create flows that are triggered by loyalty program processes. Doesn’t require user interaction. This flow type doesn’t support screens, local actions, choices, or choice sets.

Loyalty Management app

![check icon indicating true](https://resources.help.salesforce.com/images/68cdc42b112b13f66432c742b3b95266.png)

Managed Content Authoring Workflow (Beta)

Used to create an orchestration for CMS. Includes the mContentVariantId and mContentSpaceIdinput variables. For more details, see [CMS Workflows and Approvals (Beta)](/s/articleView?id=sf.cms_workflows.htm&language=en_US&type=5).

Salesforce CMS in the Digital Experiences app

Other Flow Types
----------------

Not all flow types are supported in Flow Builder. Some flow types are used only in other parts of Salesforce, so they’re not listed in the Flows page in Setup. However, the list of paused flow interviews can include these types.

Type

Description

Invocable Process

A process, created in Process Builder, that starts when it’s called from another process.

Platform Event Process

A process, created in Process Builder, that starts when a particular platform event message is received.

Record Change Process

A process, created in Process Builder, that starts when a record is created or edited for a particular object.

Transaction Security Flow

A flow used in the Transaction Security App.

#### See Also

*   [Flow Version Properties](/s/articleView?id=sf.flow_ref_properties.htm&language=en_US&type=5 "A flow version’s properties consist of its label, description, interview label, and type. These properties drive the field values that appear on the flow’s detail page.")
*   [User Provisioning for Connected Apps](/s/articleView?id=sf.connected_app_user_provisioning.htm&language=en_US&type=5 "You can use a connected app to link your users with a third-party app. User provisioning for a connected app simplifies account creation and links your Salesforce users’ accounts to their third-party accounts. After the accounts are linked, you can configure the App Launcher to display the connected app as a tile. With a single click, users get instant access to the third-party app.")
*   [Triggers for Autolaunched Flows](/s/articleView?id=sf.flow_concepts_trigger.htm&language=en_US&type=5 "In the Start element of an autolaunched flow, you can specify a trigger that launches the flow. The flow trigger can be a schedule or the new and changed records of a specified object. Without a trigger, you must set up other things to launch the flow, such as custom buttons, processes, Apex classes, or even Einstein Bots.")