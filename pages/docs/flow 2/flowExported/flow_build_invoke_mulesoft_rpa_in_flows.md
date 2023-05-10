# Invoke a MuleSoft RPA Process in a Flow

After you make a MuleSoft RPA process available to flows, you can start and check the status of the process from a flow.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions|

You add invocable actions for the `startProcess` and `getProcessExecutionStatus` operations that you selected when you registered the RPA process as an external service.

1.  In Flow Builder, create a flow.

2.  To store the input variables for the RPA process that you want to invoke, create a resource with these values.

    |Field|Value|
    |-----|-----|
    |**Resource Type**|Variable|
    |**Data Type**|Apex-Defined|
    |**Apex Class**|ExternalService\_External\_Service\_Name\_ProcessExecutionWithExecutionIdExternal\_Service\_Name is the name that you provided when you registered the MuleSoft RPA API as an external service.

|

    ![New Resource dialog box](../images/invoke_mulesoft_rpa_flow_resource.png)

3.  Assign values to the input variables.

    1.  On the Flow Builder canvas, add an assignment node.

    2.  Assign values to the variable that you created in the previous step.

        -   A variable’s input values differ for each RPA process. In this example, the process requires an order number and a tracking number.
        -   Every input requires a value, even if the value is an empty string. If you don’t specify a value for each input, the RPA process invocation generates an error.
        -   Each RPA process invocation requires a unique `executionId`. If your flow starts only one RPA process, you can use the `$Flow.InterviewGuid` global variable, which is the flow interview ID.

        -   Callbacks for MuleSoft RPA processes aren’t supported in flows. Specify the `$GlobalConstant.EmptyString` global variable as the value of the `callbackUri` variable.

        ![New variable assignment dialog box](../images/invoke_mulesoft_rpa_flow_assignment.png)

4.  Add an action for the `startProcess` operation to the flow.

    1.  On the Flow Builder canvas, add an action node.

    2.  In the Action field, type startProcess, and select the **startProcess** action.

    3.  Configure the action, setting the body to the resource that you created to store the input values.

        ![New Action dialog box for startProcess operation](../images/invoke_mulesoft_rpa_flow_action_start.png)

    4.  Click **Done**.

5.  Add an action for the `getProcessExecutionStatus` operation to the flow.

    1.  On the Flow Builder canvas, add an action node.

    2.  In the Action field, type `getProcessExecutionStatus` operation, and select the **getProcessExecutionStatus** action.

    3.  Configure the action, setting the executionId to the value of the `executionID` parameter that you specified for starting the MuleSoft RPA process.

        ![New action dialog box for getProcessExecutionStatus dialog box](../images/invoke_mulesoft_rpa_flow_action_status.png)

    4.  Click **Done**.

6.  Save and run your flow.

    The output of the `startProcess` action indicates whether the process started successfully.

    The output of the `getProcessExecutionStatus` action indicates the status of the RPA process.


This simple screen flow invokes a MuleSoft RPA process called Get Tracking Info. It includes an Assignment node for input variables and actions that start and check the status of the process.

![Complete screen flow example](../images/invoke_mulesoft_rpa_flow_complete.png)

**Parent topic:**[Use Flows with MuleSoft RPA](../flow/flow_build_use_flows_with_mulesoft_rpa.md)

**Related information**  


[../flow/flow\_build.md](../flow/flow_build.md)

[../flow/flow\_ref\_elements\_assignment.md](../flow/flow_ref_elements_assignment.md)

[../flow/flow\_ref\_resources\_variable.md](../flow/flow_ref_resources_variable.md)

