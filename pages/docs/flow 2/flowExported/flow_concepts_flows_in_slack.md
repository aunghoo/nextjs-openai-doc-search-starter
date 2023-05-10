# Flows in Slack

Running a flow in Slack requires two things. You must have an active screen flow with the Make available in Slack setting selected. You also need a way to run the flow from Slack.

## Screen Components in Flows in Slack

Screens in a screen flow with the Make available in Slack advanced setting selected can only contain components supported by Flows in Slack.

Flows in Slack don’t support field-level validation for screen components.

|Supported Components|Not Supported Components|
|--------------------|------------------------|
|-   Checkbox
-   CheckboxGroup \(up to 10 choices\)
-   Currency
-   Date
-   Date & Time
-   Display Text
-   Long Text Area
-   Number
-   Picklist \(up to 100 choices\)
-   Radio Button \(up to 10 choices\)
-   Text

|-   Address
-   Dependent Picklist
-   Display Image
-   Email
-   File Upload
-   Lookup
-   Multi-Select Picklist
-   Name
-   Password
-   Phone
-   Section
-   Slider
-   Toggle
-   URL

|

## Input Variables in Flows in Slack

A screen flow with the Make available in Slack advanced setting selected can have text input parameters. Flows designed to run in Slack support only text variables as input parameters, and they can be run from Slack using only the Send Message to Launch Flow action. To get text input from flow users, define text variables that are available for input in your screen flow.

Use functions to convert text input into the format that you need within your screen flow.

|Function|Category|Description|
|--------|--------|-----------|
|[DATEVALUE](https://help.salesforce.com/s/articleView?id=sf.customize_functions_datevalue.htm)|Date and Time Functions|Takes a string with a format of “YYYY-MM-DD” and returns a date value.|
|[DATETIMEVALUE](https://help.salesforce.com/s/articleView?id=customize_functions_datetimevalue.htm)|Date and Time Functions|Takes a string with a format of “YYYY-MM-DD HH:MM:SS” and returns a year, month, day, and GMT time value.|
|[ISNUMBER](https://help.salesforce.com/s/articleView?id=customize_functions_isnumber.htm)|Logical Functions|Determines if a text value is a number and returns TRUE if it is. Otherwise, it returns FALSE.|
|[VALUE](https://help.salesforce.com/s/articleView?id=customize_functions_value.htm)|Text Functions|Converts a text string to a number.|

## Send an Active Screen Flow with or Without Input Variables to Slack with an Action

This method of sending an active screen flow to Slack works only with official Salesforce Slack apps. This method is the only way to run active screen flows with input variables and the Make available in Slack advanced setting selected

An active screen flow with the Make available in Slack advanced setting selected can run in the flow default environment. To send the flow to run in the Slack environment, use another flow that calls a version of the Slack Send Message to Launch Flow action.

The Slack Send Message to Launch Flow action has a version for each active screen flow with the Make available in Slack advanced setting selected. For example, your active screen flow is Get Pet Name. When you add the Action element to the new flow that sends this active screen flow to Slack, select the action labeled Get Pet Name with the API name of slackSendMessageToLaunchFlow - Get\_Pet\_Name.

When the flow containing the action runs, it sends a message to a Slack channel or direct message group. The message includes a button that a channel or group member can click to launch the associated screen flow.

These flow types don’t support the Slack Send Message to Launch Flow action: CMS Orchestrator, EvaluationFlow, Journey, Orchestrator, Survey, SurveyEnrich, and TransactionSecurityFlow.

## Run an Active Screen Flow Without Input Variables from a Button in a Slack View

This method of invoking an active screen flow from Slack works for active screen flows with no input variables and the Make available in Slack advanced setting selected. This method works with official and custom Slack apps.

Use the Apex SDK for Slack \(Beta\) to create a view that invokes an active screen flow from a button in Slack.

## Run an Active Screen Flow Without Input Variables from a Slack Shortcut

This method of invoking an active screen flow from Slack works for active screen flows with no input variables. Create a custom Slack app to use this method. Custom Slack apps don’t have access to [flow\_ref\_elements\_actions\_slack.md](flow_ref_elements_actions_slack.md).

Use the Apex SDK for Slack \(Beta\) to define a custom Slack app that invokes a flow from a global shortcut, a message shortcut, or a slash command in Slack.

**Parent topic:**[../flow/flow\_concepts\_environments.md](../flow/flow_concepts_environments.md)

**Related information**  


[../bundle\_slack\_apps/slack\_apps\_enable.md](../bundle_slack_apps/slack_apps_enable.md)

[*Salesforce Admins*: How Admins Can Connect Salesforce and Slack](https://admin.salesforce.com/blog/2021/how-admins-can-connect-salesforce-and-slack)

[Use Flows with Slack](../flow/flow_build_use_flows_with_slack.md)

[Run Active Screen Flows from Slack](../flow/flow_build_run_screen_flow_from_slack.md)

[*Apex SDK for Slack \(Beta\)*: Define an App](https://developer.salesforce.com/docs/platform/salesforce-slack-sdk/guide/app-definition.html)

[*Apex SDK for Slack \(Beta\)*: Define an View](https://developer.salesforce.com/docs/platform/salesforce-slack-sdk/guide/views_create.html)

