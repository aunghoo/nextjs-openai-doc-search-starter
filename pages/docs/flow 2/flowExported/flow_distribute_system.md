# Distribute Flows to Automated Systems

Some flows don’t require any user interaction to start. To enable a system to automatically launch a flow, use the `start` Apex method, a process, or a workflow action.

Most of these methods can be used only with an autolaunched flow. A flow can be launched without user interaction, such as from a process or the Apex `interview.start` method. Autolaunched flows run in bulk and without user interaction. They can’t contain steps, screens, choices, or dynamic choices in the active or latest flow version.

-   **[Process](../flow/flow_distribute_system_process.md)**  

-   **[Workflow](../flow/flow_distribute_system_wf.md)**  

-   **[Launch a Flow from Apex](../flow/flow_distribute_system_apex.md)**  
Use the `start` method in the `Flow.Interview` class to launch an autolaunched flow or user provisioning flow from Apex.
-   **[Launch a Flow from the REST API](../flow/flow_distribute_system_rest.md)**  
Use the Custom Invocable Actions endpoint to invoke an autolaunched flow from the REST API.

**Parent topic:**[Distribute a Flow](../flow/flow_distribute.md)

