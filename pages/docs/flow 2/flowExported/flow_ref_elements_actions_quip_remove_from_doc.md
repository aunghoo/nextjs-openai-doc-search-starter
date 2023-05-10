# Flow Core Action for Quip: Remove Members from Quip Document

To rescind access to a document for certain users, remove them from the document.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Remove Members from Quip Document**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Document URL|URL of the document that you want to remove members from.|
|Remove Members by Email Address|A list of user emails separated by commas to remove from the document. Valid values are:-   person1@quip.com, person2@quip.com, person3@quip.com
-   person1@quip.com

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Document ID|ID of the document|
|Document Link|URL of the document|
|Document Title|Title of the document|

A service manager previously added Tier 3 service reps and sales reps to a Case Swarm document to solve a customer case. Now that the case is closed, the service manager wants to remove user access to the document to preserve its integrity. You can create a flow that uses the Remove Members from Quip Document core action to remove Tier 3 reps and sales reps from the document.

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

