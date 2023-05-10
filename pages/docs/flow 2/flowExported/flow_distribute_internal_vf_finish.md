# Customize a Visualforce Component to Control the Flow's Finish Behavior

By default, users who click **Finish** start a new interview and see the first screen of the flow. After you embed a flow in a Visualforce page, configure the `finishLocation` attribute to route users to another page in Salesforce.

## Set `finishLocation` with the `URLFOR` Function

**Note:**

-   You can’t redirect flow users to a URL that’s external to your Salesforce org.
-   Don’t call the `Auth.SessionManagement.finishLoginFlow` method and the `finishLocation` attribute in the same flow. `Auth.SessionManagement.finishLoginFlow` indicates the end of a Visualforce page login flow. If `finishLocation` is in the same flow, ``finishLocation`` executes when the flow starts, giving users full access to the session.

For details about `URLFOR`, see Functions in the **Visualforce Developer’s Guide**.

## Set `finishLocation` with the `$Page` Variable

For details about `$Page`, see Global Variables in the **Visualforce Developer’s Guide**.

## Set `finishLocation` with a Controller

**Parent topic:**[Visualforce Page](../flow/flow_distribute_internal_vf.md)

