What Happens When a Flow Finishes?[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

What Happens When a Flow Finishes?
==================================

By default, when a flow interview that uses screens finishes, a new interview for that flow begins, and the user is redirected to the first screen. To override the default behavior, you can add a local action to your flow. Some distribution methods also offer other ways to override a flow’s finish behavior, such as by setting the `retURL` parameter in a flow URL.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Distribution Method

Default Finish Behavior

Override Options

URL (Direct URL, web tab, custom button, custom link)

Starts new interview

*   Add a local action to the flow
*   Set the `retURL` parameter

Lightning page

Starts new interview

Add a local action to the flow

Experience Builder page

Starts new interview

Add a local action to the flow

Flow action

Closes dialog

Add a local action to the flow

Utility bar

Starts new interview

Add a local action to the flow

lightning:flow Aura component

Starts new interview

*   Add a local action to the flow
*   Set the `onstatuschange` action

flow:interview Visualforce component

Starts new interview

*   Add a local action to the flow
*   Set the `finishLocation` attribute

*   **[Redirect Flow Users with a Local Action](/s/articleView?id=sf.flow_concepts_finish_override.htm&language=en_US&type=5)**  
    By default, when a flow finishes, a new interview starts and the user sees the first screen of the flow. To instead redirect the user to another page, build or install a local action that does so. Then add the action to your flow with a Core Action element. For example, a local action can open a record, list view, or URL or to show a toast message. Or it can use the Lightning Console JavaScript API to close a console tab.

#### See Also

*   [Redirect Flow Users with a Local Action](/s/articleView?id=sf.flow_concepts_finish_override.htm&language=en_US&type=5 "By default, when a flow finishes, a new interview starts and the user sees the first screen of the flow. To instead redirect the user to another page, build or install a local action that does so. Then add the action to your flow with a Core Action element. For example, a local action can open a record, list view, or URL or to show a toast message. Or it can use the Lightning Console JavaScript API to close a console tab.")
*   [Customize a Flow URL to Control Finish Behavior](/s/articleView?id=sf.flow_distribute_internal_url_retURL.htm&language=en_US&type=5 "By default, when a flow interview that uses screens finishes, a new interview for that flow begins, and the user is redirected to the first screen. If you want to redirect users to another page within Salesforce when they click Finish, use the retURL parameter in the flow URL.")
*   [Customize a Visualforce Component to Control the Flow's Finish Behavior](/s/articleView?id=sf.flow_distribute_internal_vf_finish.htm&language=en_US&type=5 "By default, users who click Finish start a new interview and see the first screen of the flow. After you embed a flow in a Visualforce page, configure the finishLocation attribute to route users to another page in Salesforce.")