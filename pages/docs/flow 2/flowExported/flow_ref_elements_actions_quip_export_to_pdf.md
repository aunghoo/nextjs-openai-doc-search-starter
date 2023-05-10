# Flow Core Action for Quip: Export Quip Document to PDF

To mark a document as complete and to keep a copy for your records, export it as a PDF. You can attach the exported PDF to a document or to a Salesforce record.

|Available in: **Lightning Experience**|

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Source Document URL|URL of the document you want to export to PDF. Valid values are:-   String values
-   Field references—To pull a document housed in a custom URL field, enter the field API name.

|
|Sheet Name|Name of the sheet in a spreadsheet that you want to export to a PDF. Valid only for spreadsheet files. If no sheet name is entered, defaults to the first sheet.|
|Target Document URL|Optional. URL of the document where you want to attach the created PDF. The PDF is added to the end of the document.|
|Salesforce Organization ID|ID of the Salesforce org where you want to attach your new PDF. You can use the same Salesforce org ID of the triggering record, or attach the PDF to a different org. Valid only if Target Record ID is specified.|
|Target Record ID|Optional. ID of the Salesforce record you want to attach your document to. PDFs attached to a record are added to the record’s Files component and Notes and Attachments component, and are visible to any user with access to the record. Valid values are:-   Alphanumeric series of numbers and letters for a specific Salesforce record.
-   \{!$Record.Id\}To attach the PDF to the same record that triggered the flow, enter this value.

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Request ID|ID to check the status of the PDF export.|
|Status message|Error message that explains why the document wasn’t exported to a PDF.|
|Status of the request|Success marker of whether the document was exported to a PDF. Can be success, failure, or pending.|

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_ref\_elements.md](../flow/flow_ref_elements.md)

