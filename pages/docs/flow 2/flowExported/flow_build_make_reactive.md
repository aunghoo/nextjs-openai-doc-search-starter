# Make Your Components and Formulas Reactive \(Beta\)

Build screens that feel like single-page applications, reducing the number of screens for your users. Set up supported components or your custom Lightning web components by configuring them to react to changes in other components on the same screen. Working with supported formula functions, you can configure a screen component to perform real-time formula calculations and logic. When the flow detects a change in any of the values in the formula, it recalculates and updates the value of the screen component. Reactivity is supported with API version 57.0 and later.

|Available in: both Salesforce Classic and Lightning Experience|
|--------------------------------------------------------------|
|Available in: **Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions|

Reactivity involves:

-   Identifying which screen component is the source and which component is reactive.
-   Understanding the different interactions for each set of components.

With standard Flow components, you add the components, provide API names for each and a label \(if required\), identify the source and the reactive component, then save and run the flow.

Depending on your Custom component, you need to understand the interactions of each. For more information see, Set Up Your Screen Flow Components for Reactivity \(Beta\).

**Note:** This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

1.  For example, from the screen editor, add a Data Table component and a Name component and enter labels for each.

    To build a reactive screen, it’s easiest to use a standard component. For example, make a Name component’s First Name field react to and display all text input from a Data Table component.

2.  In the Name component’s First Name’s source field, select the Data Table’s **DataTableAPIName.firstSelectedRow.FirstName** output as the source for each.

    The source is any component of the same type. For example, the DataTableAPIName.firstSelectedRow.FirstName component’s output and the Name component’s First Name field are of type text.

3.  Save and run the flow.


When selecting a row from the Data Table, the First Name field updates immediately. For more information, see [Considerations for Reactivity in Screen Flows \(Beta\)](flow_build_reactive_set.md)

**Parent topic:**[Screen](../flow/flow_ref_elements_screen.md)

