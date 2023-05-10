Flows in Transactions[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

[](/s?language=en_US)Flows in Transactions
==========================================

Each flow interview runs in the context of a transaction. A transaction represents a set of operations that are executed as a single unit. For example, a transaction can execute Apex triggers and escalation rules in addition to a flow interview. If one interview in a transaction fails, all the interviews in the transaction are rolled back, as well as anything else the transaction did. The transaction doesn’t retry any of the operations—including the flow interview.

In each transaction, Salesforce enforces governor limits to prevent shared resources from being depleted. Because multiple Salesforce organizations share the same resources, Salesforce prevents one organization from depleting all the resources and leaving the other organizations high and dry. It’s similar to an apartment building that uses one cache of water to service every tenant. If your neighbor uses all the water, you can’t take a shower. (It’s trite, but hopefully you get the idea.) Per-transaction governor limits help prevent such things from happening.

*   **[When Does a Flow’s Transaction Start?](/s/articleView?id=sf.flow_concepts_transaction.htm&language=en_US&type=5#flow_concepts_transaction_begin)**  
    Depending on how the flow was distributed, a transaction that runs an interview for that flow starts in different ways.
*   **[When Does a Flow’s Transaction End?](/s/articleView?id=sf.flow_concepts_transaction.htm&language=en_US&type=5#flow_concepts_transaction_end)**  
    When a transaction ends depends on whether the flow contains certain elements and whether it originally started because a record was changed.

#### See Also

*   [Flow Bulkification in Transactions](/s/articleView?id=sf.flow_concepts_bulkification.htm&language=en_US&type=5#flow_concepts_bulkification "Programmers can design their code so that similar actions are performed together in one batch. For example, one operation to create 50 records rather than 50 separate operations that each create one record. This process is called bulkification, and it helps your transaction avoid governor limits. If you’re working with flows, you don’t even have to think about bulkification. Flow interviews bulkify actions for you automatically.")
*   [Per-Transaction Flow Limits](/s/articleView?id=sf.flow_considerations_limit_transaction.htm&language=en_US&type=5 "Salesforce strictly enforces limits to ensure that any runaway flows don’t monopolize shared resources in the multitenant environment. Per-transaction limits, which Apex enforces, govern flows. If an element causes the transaction to exceed governor limits, the system rolls back the entire transaction. The transaction rolls back even if the element has a defined fault connector path.")
*   [Process Limits](/s/articleView?id=sf.process_limits.htm&language=en_US&type=5 "When building processes, keep shared limits and Apex governor limits in mind. In addition, a process’s API name must be unique across all processes and flows in your Salesforce org.")

[](/s?language=en_US)

[](/s?language=en_US)When Does a Flow’s Transaction Start?
----------------------------------------------------------

Depending on how the flow was distributed, a transaction that runs an interview for that flow starts in different ways.

Distribution Method

Transaction starts when...

Process Builder1

A record is created or updated.

Flow URL

The URL is accessed.

Custom button or link

The button or link is clicked.

Visualforce page

The page is accessed.

`Interview.start()` method

If the method starts via a `before` or `after` trigger, the transaction starts when a record is created or updated.

Otherwise, the transaction starts when the method (or a parent method) is invoked.

The `start()` method shares its limits with other operations in the transaction and other methods in the class.

REST API (Custom Actions or Flows resource)

When the REST call is made. Depending on how the REST call is implemented, the limits can be shared with other operations.

1The same also applies if the flow is distributed through a workflow rule. The pilot program for flow trigger workflow actions is closed. If you've already enabled the pilot in your org, you can continue to create and edit flow trigger workflow actions. If you didn't enable the pilot in your org, use Flow Builder to create a record-triggered flow, or use Process Builder to launch a flow from a process.

![Note](https://resources.help.salesforce.com/images/9999d773bec62031a7926ed9be8b18f9.png)

Note When a Screen element, local action, or Pause element is executed, the existing transaction ends and a new one begins.

[](/s?language=en_US)

[](/s?language=en_US)When Does a Flow’s Transaction End?
--------------------------------------------------------

When a transaction ends depends on whether the flow contains certain elements and whether it originally started because a record was changed.

The transaction ends when:

*   A Screen, Local Action, or Pause element is executed
*   The order of execution has completed—if the flow was triggered when a record was created or updated
*   All the interviews in the transaction have finished

![Tip](https://resources.help.salesforce.com/images/1b975641172a45421a590103f03721b3.png)

Tip If you think that a flow’s interview is likely to hit governor limits within its transaction, consider adding a Screen, Local Action, or Pause element.

If the interview is one of many things being done in a given transaction, that interview shares the transaction’s governor limits with the other operations.

![Example](https://resources.help.salesforce.com/images/f3158d3e702ac9d8ee278341a1328246.png)

Example

You update 100 cases through Data Loader. Due to the order of execution in a transaction and the customizations in your organization, here’s what happens.

Transaction Operation

DML Statement Used

SOQL Query Used

1

Cases are saved to the database, but aren’t committed yet.

2

Case assignment rules are executed. Each case’s owner is updated.

![check icon indicating true](https://resources.help.salesforce.com/images/4b2b6d955b6c4577409c1db715c07889.gif)

3

Case escalation rules are executed. If any case has been open for 10 days, an email is sent to the owner.

4

Process is started.

5

Process looks up the case’s account.

![check icon indicating true](https://resources.help.salesforce.com/images/4b2b6d955b6c4577409c1db715c07889.gif)

6

If the account is hot, process uses Chatter to notify the account owner that there’s a new case associated with the account.

![check icon indicating true](https://resources.help.salesforce.com/images/4b2b6d955b6c4577409c1db715c07889.gif)

7

Process launches a flow interview.

8

Flow interview looks up the parent account and how many cases it has.

![check icon indicating true](https://resources.help.salesforce.com/images/4b2b6d955b6c4577409c1db715c07889.gif)

9

Flow interview checks whether the account has more than five open cases.

10

If it does, flow interview looks up the account’s division manager then posts on the account’s Chatter feed to notify the division manager and account owner.

![check icon indicating true](https://resources.help.salesforce.com/images/4b2b6d955b6c4577409c1db715c07889.gif)

![check icon indicating true](https://resources.help.salesforce.com/images/4b2b6d955b6c4577409c1db715c07889.gif)

11

If it doesn’t, flow interview posts on the account’s Chatter feed to notify only the account owner.

![check icon indicating true](https://resources.help.salesforce.com/images/4b2b6d955b6c4577409c1db715c07889.gif)

#### See Also

*   [_Apex Developer Guide_ : Triggers and Order of Execution](https://developer.salesforce.com/docs/atlas.en-us.242.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm "Apex Developer Guide : Triggers and Order of
    Execution - HTML (New Window)")