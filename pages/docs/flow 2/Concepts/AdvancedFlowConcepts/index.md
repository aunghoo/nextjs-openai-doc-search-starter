Advanced Flow Concepts[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

[](/s?language=en_US)Advanced Flow Concepts
===========================================

After you understand the basics, you’re ready for a closer look at what you can do after a flow finishes. Learn what happens when a flow interacts with the Salesforce database, and how flows perform similar operations at the same time. Get to know how a flow test saves you time and improves reliability.

*   **[Running User of a Flow](/s/articleView?id=sf.flow_concepts_running_user.htm&language=en_US&type=5)**  
    The running user of a flow is the user that launched the flow. The running user determines what a flow that runs in user context can do with Salesforce data.
*   **[API Version for Running a Flow](/s/articleView?id=sf.flow_concepts_runtime_api_version.htm&language=en_US&type=5)**  
    Some run-time behavior improvements are delivered as versioned updates, so that you can control when each flow adopts those updates. Test and upgrade your flows one by one and at your own pace. You can even opt to never adopt versioned updates for one or all your flows.
*   **[Flow Environments](/s/articleView?id=sf.flow_concepts_environments.htm&language=en_US&type=5)**  
    A flow environment specifies where a flow can run. For example, if a flow is associated with the Slack flow environment, you can enable users to launch the flow from Slack.
*   **[What Happens When a Flow Finishes?](/s/articleView?id=sf.flow_concepts_finish.htm&language=en_US&type=5)**  
    By default, when a flow interview that uses screens finishes, a new interview for that flow begins, and the user is redirected to the first screen. To override the default behavior, you can add a local action to your flow. Some distribution methods also offer other ways to override a flow’s finish behavior, such as by setting the `retURL` parameter in a flow URL.
*   **[Flows in Transactions](/s/articleView?id=sf.flow_concepts_transaction.htm&language=en_US&type=5#flow_concepts_transaction)**  
    Each flow interview runs in the context of a transaction. A transaction represents a set of operations that are executed as a single unit. For example, a transaction can execute Apex triggers and escalation rules in addition to a flow interview. If one interview in a transaction fails, all the interviews in the transaction are rolled back, as well as anything else the transaction did. The transaction doesn’t retry any of the operations—including the flow interview.
*   **[Flow Bulkification in Transactions](/s/articleView?id=sf.flow_concepts_bulkification.htm&language=en_US&type=5#flow_concepts_bulkification)**  
    Programmers can design their code so that similar actions are performed together in one batch. For example, one operation to create 50 records rather than 50 separate operations that each create one record. This process is called bulkification, and it helps your transaction avoid governor limits. If you’re working with flows, you don’t even have to think about bulkification. Flow interviews bulkify actions for you automatically.
*   **[Testing Your Flow](/s/articleView?id=sf.flow_concepts_testing.htm&language=en_US&type=5)**  
    Before you activate a record-triggered flow, you can test it to quickly verify its expected results and identify flow run-time failures.
*   **[Apex-Defined Data Type](/s/articleView?id=sf.flow_concepts_apex_type.htm&language=en_US&type=5)**  
    With the Apex-defined data type, flows can manipulate the kinds of complex data objects that are typically returned from calls to web services. Create Apex-defined variables in flows and directly process JSON returned from web calls.