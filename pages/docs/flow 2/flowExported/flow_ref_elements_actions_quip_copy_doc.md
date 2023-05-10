# Flow Core Action for Quip: Copy Quip Document

To use a document as a template, create a copy. By default, copied documents are added to the running user’s Private folder in Quip.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Copy Quip Document**.

**Important:** Newly copied documents aren’t automatically attached to the record. To attach the newly created document to the record and use Synced Sharing, use the Attach Document to Record action after the Copy Quip Document action and set the Salesforce Record ID to be the ID of the variable.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Document URL|The URL of the document that you want to copy. For example: https://salesforce.quip.com/GVnGbtEasAGa|
|Company Link Access|Optional. Link sharing settings for the copied document. By default, copied documents are set to edit-access. Valid values are:-   view–To let users view the copied document, enter this value.
-   edit–To let users view and edit the copied document, enter this value.
-   none–To block user access to the copied document, enter this value.

|
|Context Record ID|Optional. ID of the record that you want to update with the copied document’s URL. Including the Context Record ID doesn’t attach the document to a record.Valid only if the Quip Document component is set up on the record layout. The Target Record URL Field is required to use Context Record ID.

|
|Copy comments to new document|Optional. This input determines whether to copy comments from the source document to the copied document. Valid values are:-   true–To copy the source document’s comments and annotations, enter this value.
-   false–To copy the source document’s content without comments, enter this value.

|
|Member Emails|Optional. A list of user emails separated by commas to add to the copied document. Valid values are:-   person1@quip.com, person2@quip.com, person3@quip.com
-   person1@quip.com

|
|Member Folder URLs|Optional. A list of folder URLs separated by commas to add the copied document to. Valid values are:-   https://\[quip\_site\_url\]/folder/\[folder1\_name\], https://\[quip\_site\_url\]/folder/\[folder2\_name\]
-   https://\[quip\_site\_url\]/folder/\[folder\_name\]

For example: https://salesforce.quip.com/folder/account-plans

|
|Source Record ID|Optional. ID of the record that you want to use in the place of mail merge syntax. For example, to replace the copied document’s \[\[Account.Name\] merge field with the record’s account name, enter the record ID.|
|Target Record URL Field|Optional. Reference to the URL field on a record used by the Context Record ID. This field is updated with the copied document URL and adds the copied document to the record’s Quip Document component. Valid values are:-   API name of the field–For example: QuipDocumentURL\_\_c

The Context Record ID is required to use the Target Record URL Field. Including the Target Record URL Field doesn’t attach the newly created document to the record.

|
|Title|Optional. The title of the copied document. Only string values are supported.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Created Document Title|The title of the copied document.|
|Document ID|ID of the copied document.|
|Document Link|The URL of the copied document.|

[![Watch Video Demo](../images/play_btn.png) Watch an Account Plan Automation Demo](https://salesforce.vidyard.com/watch/NzZb6RFrBmdD8yPpcPM5bH) \(2 minutes\)

A sales rep wants to create an Account Plan and share it with the regional sales managers to close a large opportunity. You can create a flow that uses the Copy Quip Document core action to copy an Account Plan template when the Opportunity stage is set to Proposal/Quote. Configure the action to replace merge fields with data from the account, add the Account Plan to a folder, and share the folder with the regional sales managers.

![Copy Quip Document with example fields selected](images/flow_quip_copy_doc.png)

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

