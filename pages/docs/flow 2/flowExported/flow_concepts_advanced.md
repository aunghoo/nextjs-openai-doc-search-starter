# Advanced Flow Concepts

After you understand the basics, you’re ready for a closer look at what you can do after a flow finishes. Learn what happens when a flow interacts with the Salesforce database, and how flows perform similar operations at the same time. Get to know how a flow test saves you time and improves reliability.

-   **[../flow/flow\_concepts\_running\_user.md](../flow/flow_concepts_running_user.md)**  

-   **[../flow/flow\_concepts\_runtime\_api\_version.md](../flow/flow_concepts_runtime_api_version.md)**  

-   **[../flow/flow\_concepts\_environments.md](../flow/flow_concepts_environments.md)**  

-   **[Finish Behavior](../flow/flow_concepts_finish.md)**  

-   **[Flows in Transactions](../flow/flow_concepts_transaction.md#)**  
Each flow interview runs in the context of a transaction. A transaction represents a set of operations that are executed as a single unit. For example, a transaction can execute Apex triggers and escalation rules in addition to a flow interview. If one interview in a transaction fails, all the interviews in the transaction are rolled back, as well as anything else the transaction did. The transaction doesn’t retry any of the operations—including the flow interview.
-   **[Flow Bulkification in Transactions](../flow/flow_concepts_bulkification.md#)**  
Programmers can design their code so that similar actions are performed together in one batch. For example, one operation to create 50 records rather than 50 separate operations that each create one record. This process is called bulkification, and it helps your transaction avoid governor limits. If you’re working with flows, you don’t even have to think about bulkification. Flow interviews bulkify actions for you automatically.
-   **[Testing](../flow/flow_concepts_testing.md)**  

-   **[../flow/flow\_concepts\_apex\_type.md](../flow/flow_concepts_apex_type.md)**  


**Parent topic:**[Flow Concepts](../flow/flow_concepts.md)

