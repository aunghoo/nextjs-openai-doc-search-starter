Flow Environments[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

Flow Environments
=================

A flow environment specifies where a flow can run. For example, if a flow is associated with the Slack flow environment, you can enable users to launch the flow from Slack.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Flows can have these environments.

Default

The flow can run offline or from a Visualforce component, Lightning page, flow action, or custom Aura component.

Slack

The flow can run in Slack and the default environment. You specify the Slack flow environment when you save the flow. Then, you use the Slack Send Message to Launch Flow action in a different flow to enable users to run the flow from Slack.

You can determine the current environment of a flow from the Flows page of Setup and from the detailed view of a flow. For example:

![Flows page in Setup](https://resources.help.salesforce.com/images/58f0c2c64a4bfe5979ce8ee7bd48332d.png)

![Flow details page](https://resources.help.salesforce.com/images/02c7e995c75bbac5efe02948409eed01.png)

*   **[Flows in Slack](/s/articleView?id=sf.flow_concepts_flows_in_slack.htm&language=en_US&type=5)**  
    Running a flow in Slack requires two things. You must have an active screen flow with the Make available in Slack setting selected. You also need a way to run the flow from Slack.