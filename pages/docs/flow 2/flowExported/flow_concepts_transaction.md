# Flows in Transactions

Each flow interview runs in the context of a transaction. A transaction represents a set of operations that are executed as a single unit. For example, a transaction can execute Apex triggers and escalation rules in addition to a flow interview. If one interview in a transaction fails, all the interviews in the transaction are rolled back, as well as anything else the transaction did. The transaction doesn’t retry any of the operations—including the flow interview.

In each transaction, Salesforce enforces governor limits to prevent shared resources from being depleted. Because multiple Salesforce organizations share the same resources, Salesforce prevents one organization from depleting all the resources and leaving the other organizations high and dry. It’s similar to an apartment building that uses one cache of water to service every tenant. If your neighbor uses all the water, you can’t take a shower. \(It’s trite, but hopefully you get the idea.\) Per-transaction governor limits help prevent such things from happening.

**Parent topic:**[Advanced Flow Concepts](../flow/flow_concepts_advanced.md)

**Related information**  


[Flow Bulkification in Transactions](../flow/flow_concepts_bulkification.md#)

[../flow/flow\_considerations\_limit\_transaction.md](../flow/flow_considerations_limit_transaction.md)

[../process/process\_limits.md](../process/process_limits.md)

## When Does a Flow’s Transaction Start?

Depending on how the flow was distributed, a transaction that runs an interview for that flow starts in different ways.

|Distribution Method|Transaction starts when...|
|-------------------|--------------------------|
|Process Builder1|A record is created or updated.|
|Flow URL|The URL is accessed.|
|Custom button or link|The button or link is clicked.|
|Visualforce page|The page is accessed.|
|`Interview.start()` method|If the method starts via a `before` or `after` trigger, the transaction starts when a record is created or updated.Otherwise, the transaction starts when the method \(or a parent method\) is invoked.

The `start()` method shares its limits with other operations in the transaction and other methods in the class.

|
|REST API \(Custom Actions or Flows resource\)|When the REST call is made. Depending on how the REST call is implemented, the limits can be shared with other operations.|

1The same also applies if the flow is distributed through a workflow rule.

**Note:** When a Screen element, local action, or Pause element is executed, the existing transaction ends and a new one begins.

## When Does a Flow’s Transaction End?

When a transaction ends depends on whether the flow contains certain elements and whether it originally started because a record was changed.

The transaction ends when:

-   A Screen, Local Action, or Pause element is executed
-   The order of execution has completed—if the flow was triggered when a record was created or updated
-   All the interviews in the transaction have finished

**Tip:** If you think that a flow’s interview is likely to hit governor limits within its transaction, consider adding a Screen, Local Action, or Pause element.

If the interview is one of many things being done in a given transaction, that interview shares the transaction’s governor limits with the other operations.

You update 100 cases through Data Loader. Due to the order of execution in a transaction and the customizations in your organization, here’s what happens.

| |Transaction Operation|DML Statement Used|SOQL Query Used|
|---|---------------------|------------------|---------------|
|1|Cases are saved to the database, but aren’t committed yet.| | |
|2|Case assignment rules are executed. Each case’s owner is updated.|![check icon indicating true](../images/permissions_confirm16.gif)| |
|3|Case escalation rules are executed. If any case has been open for 10 days, an email is sent to the owner.| | |
|4|Process is started.| | |
|5|Process looks up the case’s account.| |![check icon indicating true](../images/permissions_confirm16.gif)|
|6|If the account is hot, process uses Chatter to notify the account owner that there’s a new case associated with the account.|![check icon indicating true](../images/permissions_confirm16.gif)| |
|7|Process launches a flow interview.| | |
|8|Flow interview looks up the parent account and how many cases it has.| |![check icon indicating true](../images/permissions_confirm16.gif)|
|9|Flow interview checks whether the account has more than five open cases.| | |
|10|If it does, flow interview looks up the account’s division manager then posts on the account’s Chatter feed to notify the division manager and account owner.|![check icon indicating true](../images/permissions_confirm16.gif)|![check icon indicating true](../images/permissions_confirm16.gif)|
|11|If it doesn’t, flow interview posts on the account’s Chatter feed to notify only the account owner.|![check icon indicating true](../images/permissions_confirm16.gif)| |

**Related information**  


[*Apex Developer Guide*: Triggers and Order of Execution](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm)

