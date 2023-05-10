# Flow Formula Builder

You can use Flow Formula Builder to build an expression in Formula-type resources or in the Collection Filter or Start elements of a Record-triggered Flow. To build your expression, select from a list of functions and operators. To catch errors as you work, check the formula syntax for each expression.

-   Automate a process for records where the closed date changed for US-based accounts that have more than 100 employees.
-   Automate a process for new case records for Premier support accounts in North America and Europe that have revenue of over one million dollars.

**Parent topic:**[Build](../flow/flow_build.md)

**Related information**  


[Start](../flow/flow_ref_elements_start.md)

[../flow/flow\_ref\_elements\_filter.md](../flow/flow_ref_elements_filter.md)

[../flow/flow\_ref\_resources\_formula.md](../flow/flow_ref_resources_formula.md)

[../flow/flow\_considerations\_design\_formulas.md](../flow/flow_considerations_design_formulas.md)

[../fields/customize\_functions.md](../fields/customize_functions.md)

## Create Formulas in the Flow Start Element with Formula Builder

You can use Flow Formula Builder to build an expression in the Start element of a Record-triggered Flow. To build your expression, select from a list of functions and operators. To catch errors as you work, check the formula syntax for each expression.

|Available in: **Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions|

|User Permissions Needed|
|-----------------------|
|To open, edit, or create a flow in Flow Builder:|Manage Flow|

1.  Edit the Start element in a Record-Triggered flow.

2.  Select the object with records that trigger the flow.

3.  Select when to trigger the flow.

4.  In the Set Entry Conditions section, set Condition Requirements to **Formula Evaluates to True**.

5.  Insert a resource from the list of Global Variables.

    1.  You can add more than one resource to an expression.

6.  Insert a function.

    1.  To see a list of functions, click **Insert a function**.

    2.  To filter functions by category, select the **All Functions** dropdown and choose the category.

7.  Select an operator from the dropdown.

8.  Complete the expression.

9.  After you build each expression, click **Check Syntax**. The formula builder shows one error at a time.

10. Complete the configuration for the Start element.

11. Click **Done**.

12. Save your work.

    ![Start element configuration screen](images/flow_formula_builder_start.png)


## Create Formulas in the Flow Collection Filter with Formula Builder

You can use Flow Formula Builder to build an expression in the Collection Filter element of a flow. To build your expression, select from a list of functions and operators. To catch errors as you work, check the formula syntax for each expression.

|Available in: **Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions|

|User Permissions Needed|
|-----------------------|
|To open, edit, or create a flow in Flow Builder:|Manage Flow|

1.  Add an element to a flow.

2.  Select **Collection Filter**.

3.  Enter the **Label** and **API Name**.

4.  Select a collection.

5.  In the Apply Filter Conditions section, set Condition Requirements to **Formula Evaluates to True**.

6.  Insert a resource from the list.

    1.  You can add more than one resource to an expression.

7.  Insert a function.

    1.  To see a list of functions, click **Insert a function**.

    2.  To filter functions by category, select the **All Functions** dropdown and choose the category.

8.  Select an operator from the dropdown.

9.  Complete the expression.

10. After you build each expression, click **Check Syntax**. The formula builder shows one error at a time.

11. Click **Done**.

12. Save your work.

    ![Collection filter configuration screen](images/flow_formula_builder_collection_filter.png)


## Create Formulas in Flow Formula-type Resources with Formula Builder

You can use Flow Formula Builder to build an expression in Flow Formula-type resources. To build your expression, select from a list of functions and operators. To catch errors as you work, check the formula syntax for each expression.

|Available in: **Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions|

|User Permissions Needed|
|-----------------------|
|To open, edit, or create a flow in Flow Builder:|Manage Flow|

1.  In Flow, in the Toolbox, in Manager, click **New Resource**.

2.  From the Resource Type dropdown, select **Formula**.

3.  Enter an **API Name**.

4.  Select the **Data Type**.

5.  Insert a resource from the list.

    1.  You can add more than one resource to an expression.

6.  Insert a function.

    1.  To see a list of functions, click **Insert a function**.

    2.  To filter functions by category, select the **All Functions** dropdown and choose the category.

7.  Select an operator from the dropdown.

8.  Complete the expression.

9.  After you build each expression, click **Check Syntax**. The formula builder shows one error at a time.

10. Click **Done**.

11. Save your work.

    ![Formula-type resource configuration screen](images/flow_formula_builder_formula_resource.png)


