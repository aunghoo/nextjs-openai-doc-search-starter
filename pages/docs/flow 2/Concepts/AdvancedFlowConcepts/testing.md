Testing Your Flow[](/s?language=en_US)

You are here:

1.  [Salesforce Help](/s/?language=en_US)
2.  [Docs](/s/products?language=en_US)
3.  [Automate Your Business Processes](/s/articleView?id=sf.extend_click_process.htm&language=en_US&type=5)

Testing Your Flow
=================

Before you activate a record-triggered flow, you can test it to quickly verify its expected results and identify flow run-time failures.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Automated testing for flows saves you time and improves the flow’s reliability because the test automates the process of determining whether the flow runs as expected. When you debug a flow, you manually configure the debug parameters and inputs each time you start to debug. With a flow test, you configure the test parameters and inputs one time. Each time you run the test, it uses the same configuration to evaluate the flow. Also, you’re not stuck with the same test per flow. You can edit the test or create more tests for different scenarios. We recommend that you create a test for every path that the flow can take.

![Example](https://resources.help.salesforce.com/images/f3158d3e702ac9d8ee278341a1328246.png)

Example

This test verifies the flow when an account is updated and the flow takes the path that runs immediately.

![The New Test window](https://resources.help.salesforce.com/images/d4dbc9771ecf9febd5acfa84e2d7bd1b.png)

The test includes fields to set the initial and updated values for the triggering record, which is the same record that triggers the flow to run. The test creates a copy of the record to use only for the test. The record isn’t saved to the database.

The test evaluates each assertion to verify that the flow runs as expected. A test can only evaluate whether a flow element was executed and whether flow resource values are set as expected. The test evaluates the flow based on the existing data in your Salesforce database and customizations such as rules and restrictions.

![The Set Assertions section](https://resources.help.salesforce.com/images/3cc2e3d77f5656a59ad4dc72cc29bd49.png)

When a flow includes tests, the Tests list view shows all tests for a flow and associated test results.

![The Tests list view](https://resources.help.salesforce.com/images/40145545a9806281c11fe43b70c675ef.png)

After a test is run, Test Run Details shows how each assertion was evaluated. If a condition evaluates to false, the assertion and test fail. If all assertions pass, the test passes.

![The Assertions tab under Test Run Details in Flow Builder](https://resources.help.salesforce.com/images/a10d56b6469f929615f7df675dcb2e20.png)

All Details shows the results for the entire test run. Assertions are evaluated at the end of the test run.

![The All Details tab under Test Run Details](https://resources.help.salesforce.com/images/fc3e3e5bb51e20b4c645776edcd97352.png)

#### See Also

*   [Test a Flow](/s/articleView?id=sf.flow_test.htm&language=en_US&type=5 "In Flow Builder, you create, save, and run flow tests. Each time you modify the flow, you can run the test.")