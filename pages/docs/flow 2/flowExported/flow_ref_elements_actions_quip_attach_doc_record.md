# Flow Core Action for Quip: Attach Quip Document to Record

Attach a document to a Salesforce record. Linked documents show up in the Quip Associated Documents component.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Attach Quip Document to Record**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Document URL|The URL of the document that you want to attach to a Salesforce record. For example: https://salesforce.quip.com/GVnGbtEasAGa|
|Salesforce Record ID|ID of the Salesforce record that you want to attach your document to.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Content Document Link ID|The ID of the link between the document and the record where it’s attached. The Attach Quip Document to Record flow action creates a Content Document object that references the document. It also creates a Content Document Link object that maps the record to the Content Document object.|

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

