Flow Bulkification in Transactions[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

[](/s?language=en_US)Flow Bulkification in Transactions
=======================================================

Programmers can design their code so that similar actions are performed together in one batch. For example, one operation to create 50 records rather than 50 separate operations that each create one record. This process is called bulkification, and it helps your transaction avoid governor limits. If you’re working with flows, you don’t even have to think about bulkification. Flow interviews bulkify actions for you automatically.

*   **[How Does Flow Bulkification Work?](/s/articleView?id=sf.flow_concepts_bulkification.htm&language=en_US&type=5#flow_concepts_bulkification_how)**  
    Interview operations are bulkified only when they execute the same element. That means that the interviews must all be associated with the same flow.
*   **[Which Flow Elements Can Be Bulkified?](/s/articleView?id=sf.flow_concepts_bulkification.htm&language=en_US&type=5#flow_concepts_bulkification_elements)**  
    Flows can bulkify any element that performs a DML statement or SOQL query or does something else external to the flow, like sending an email.
*   **[Example of Flow Bulkification](/s/articleView?id=sf.flow_concepts_bulkification.htm&language=en_US&type=5#flow_concepts_bulkification_example)**  
    This example demonstrates how operations are bulkified for a flow when 100 cases are updated through Data Loader.

#### See Also

*   [Flows in Transactions](/s/articleView?id=sf.flow_concepts_transaction.htm&language=en_US&type=5#flow_concepts_transaction "Each flow interview runs in the context of a transaction. A transaction represents a set of operations that are executed as a single unit. For example, a transaction can execute Apex triggers and escalation rules in addition to a flow interview. If one interview in a transaction fails, all the interviews in the transaction are rolled back, as well as anything else the transaction did. The transaction doesn’t retry any of the operations—including the flow interview.")

[](/s?language=en_US)

[](/s?language=en_US)How Does Flow Bulkification Work?
------------------------------------------------------

Interview operations are bulkified only when they execute the same element. That means that the interviews must all be associated with the same flow.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

When multiple interviews for the same flow run in one transaction, each interview runs until it reaches a bulkifiable element. Salesforce takes all the interviews that stopped at the same element and intelligently executes those operations together. If other interviews are at a different element, Salesforce then intelligently executes those operations together. Salesforce repeats this process until all the interviews finish.

If, despite the bulkification, any interview hits a governor limit, all the interviews in the transaction fail. Any operations that the interviews performed in the transaction are rolled back, and the transaction doesn’t try to perform the operations again. Any operations that access external data aren’t rolled back.

If an error that isn’t due to a governor limit occurs while executing one of these elements, Salesforce attempts to save all successful record changes in the bulk operation up to three times.

*   Subflow (Create Records and Update Records elements only)
*   Create Records
*   Update Records

![Example](https://resources.help.salesforce.com/images/f3158d3e702ac9d8ee278341a1328246.png)

Example When you upload 100 cases, the flow MyFlow\_2 triggers one interview for each case.

*   50 interviews stop at Create Records element **Create\_Task\_1**.
*   The other 50 interviews stop at Create Records element **Create\_Task\_2**.

The result? At least two groups of bulk operations to execute.

*   One for the 50 interviews that execute **Create\_Task\_1**
*   One for the 50 interviews that execute **Create\_Task\_2**

[](/s?language=en_US)

[](/s?language=en_US)Which Flow Elements Can Be Bulkified?
----------------------------------------------------------

Flows can bulkify any element that performs a DML statement or SOQL query or does something else external to the flow, like sending an email.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Elements that create, update, or delete records

When a record is created, updated, or deleted, the transaction performs a DML statement.

*   Create Records elements
*   Update Records elements
*   Delete Records elements
*   Quick Action, Post to Chatter, or Submit for Approval core actions
*   Apex Action elements—depending on your org

Elements that look up records

When fields on a record are looked up, the transaction performs a SOQL query.

*   Get Records elements
*   Update Records elements
*   Delete Records elements
*   Apex Action elements—depending on your org

Elements that send emails

*   Send Email core actions
*   Email Alert elements
*   Apex Action elements—depending on your org

![Note](https://resources.help.salesforce.com/images/9999d773bec62031a7926ed9be8b18f9.png)

Note

*   Unlike Apex actions, legacy Apex actions aren’t bulkified.
*   Although Apex actions are bulkified, the flow has no way of knowing what the invoked methods’ operations are. If you want those operations to also be bulkified, make sure the code follows bulkification best practices.

#### See Also

*   [_Apex Developer Guide_ : Running Apex with Governor Execution Limits](https://developer.salesforce.com/docs/atlas.en-us.242.0.apexcode.meta/apexcode/apex_limits_tips.htm "Apex Developer Guide : Running Apex with Governor
    Execution Limits - HTML (New Window)")

[](/s?language=en_US)

[](/s?language=en_US)Example of Flow Bulkification
--------------------------------------------------

This example demonstrates how operations are bulkified for a flow when 100 cases are updated through Data Loader.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

### The Associated Flow

You’ll understand the concepts better if you understand the design of the associated flow.

![Screenshot of example flow](https://resources.help.salesforce.com/images/f74e323f6e7b249539af47c173d873fa.png)

The flow:

1.  Looks up the case’s parent account and how many open cases that account has.
2.  Checks whether the account has more than five cases open.
3.  If the account has more than five open cases:
    1.  Looks up the division manager for the account.
    2.  Posts on the account’s Chatter feed to notify the division manager and the account owner.
4.  If the account has five or fewer open cases, posts on the account’s Chatter feed to notify only the account owner.

### The Bulkified Interviews

When you update the records, one flow interview is created for each case simultaneously. All of the interviews are associated with the same flow. Each interview runs until it gets to a bulkifiable element.

The first interview goes through the Get Records element **(1)**. Because Get Records can be bulkified, the interview waits there until all the other interviews have done the same. Then, Salesforce executes all the Get Records operations together (because they’re all for the same element in the same flow). Instead of 100 SOQL queries, the transaction issues one SOQL query.

The first interview is evaluated by the Decision element **(2)**. The account has six cases, so the interview is routed down the “More than 5” path. The interview proceeds to the second Get Records element **(3a)**. Because it’s a bulkifiable element, the interview waits there.

The second interview is evaluated by the Decision element **(2)**. This account has one case, so the interview is routed down the “5 or fewer” path. The interview proceeds to the Post to Chatter core action **(4)**. This element is also bulkifiable, so the interview waits there.

After all the interviews have been processed, 30 are waiting to execute the second Get Records element **(3a)** and the remaining 70 are waiting to execute the Post to Chatter core action **(4)**.

Salesforce executes all the Get Records **(3a)** operations for the first 30 interviews together. Instead of 30 separate SOQL queries, the transaction issues one.

Next, the transaction returns to the Post to Chatter core action **(4)**, where the 70 interviews are ready to execute their Post to Chatter operations. Remember, these are the interviews whose accounts don’t have more than five cases. Salesforce executes the Post to Chatter operations together. Instead of 100 separate DML statements to create each Chatter post, the transaction issues one DML statement to create all 100 posts at one time. Because the Post to Chatter core action isn’t connected to a subsequent element, those 70 interviews finish.

The 30 interviews—which looked up the relevant division manager—proceed to the final Post to Chatter core action **(3b)**. When all 30 interviews are ready, Salesforce executes all 30 Post to Chatter operations together. Instead of issuing 30 separate DML statements for the individual Chatter posts, it issues one. Because the Post to Chatter core action isn’t connected to another element, those 30 interviews finish.