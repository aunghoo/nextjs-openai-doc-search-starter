# Generate Flow Choice Options From External Data

If your business process interacts with external data, your users can select from it on flow screens.

|Available in: **Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions|

|User Permissions Needed|
|-----------------------|
|To open, edit, or create a flow in Flow Builder:|Manage Flow|
| | |

You can allow users to select external data.

1.  Create a collection choice set and reference an Apex-defined collection from an external service, Apex action, or another screen component.

2.  Add your collection choice set to the appropriate choice component, such as a picklist.


For example, a car dealership stores car inventory data outside of Salesforce. They have an external service to access the inventory, and now their users can select which cars to view.

At runtime, the picklist options are generated based on whatever data was populated in the referenced Apex-defined collection.

**Parent topic:**[Working with Data](../flow/flow_build_data.md)

