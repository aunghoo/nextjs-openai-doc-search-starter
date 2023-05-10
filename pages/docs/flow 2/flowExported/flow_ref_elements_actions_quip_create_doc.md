# Flow Core Actions for Quip: Create Quip Document

Create a document, spreadsheet, or slide deck, and add content to it.



|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Create Quip Document**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Document Title|The title of the new document. Only string values are supported.|
|Add Members by Email Address|Optional. A list of user emails separated by commas to add to the new document. Valid values are:-   person1@quip.com, person2@quip.com, person3@quip.com
-   person1@quip.com

|
|Company Link Address|Optional. Link sharing settings for the new document. By default, new documents are set to edit-access. Valid values are:-   view–To let users view the document, enter this value.
-   edit–To let users view and edit the document, enter this value.
-   none–To block user access to the document, enter this value.

|
|Content Type|Optional. Format of content added to the document. By default, content format is set to html. Valid values are:-   html–To format text added to Document Content with html, enter this value.
-   liveapp–To add a live app to your document, enter this value. Only valid if Document Type is set to document.

|
|Document Content|Optional. Content added to the new document. Valid only when Content Type is set to html. By default, the document title is used for the document’s content. Valid values are:-   String values
-   @\[Salesforce user ID\]–To @mention a Salesforce user in the document, enter the Salesforce ID. If the user’s Salesforce email is connected to Quip, the user ID is replaced with a Quip user @mention. If not, the Salesforce ID is replaced with the user’s Salesforce email.
-   @\[person1@quip.com\]–To @mention a user by email, enter this value.
-   @Everyone–To send a notification to all users added to document, enter this value.

|
|Document Type|Optional. Type of document created including documents and spreadsheets. By default, new documents are created as documents. Valid values are:-   document–To create a document, enter this value.
-   spreadsheet–To create a spreadsheet, enter this value.

|
|Live App Type|Type of live app added to the document. Required if Content Type is set to liveapp. Only documents support live apps. Valid values are:-   salesforce\_record–To add the Salesforce Record live app to the document, enter this value.
-   salesforce\_list–To add the Salesforce List live app to the document, enter this value.

|
|Object Type|Type of object used by the Salesforce List live app. Required if Live App Type is set to salesforce\_list. Only string values are supported. For example: Account, Opportunity, or CustomObject\_\_c.|
|Parent Folder URL|Optional. A list of Quip folder URLs separated by commas to add the new document to. By default, the document is added to the user’s Private folder in Quip. Valid values are:-   https://\[quip\_site\_url\]/folder/\[folder1\_name\], https://\[quip\_site\_url\]/folder/\[folder2\_name\]
-   https://\[quip\_site\_url\]/folder/\[folder\_name\]

For example: https://salesforce.quip.com/folder/account-plans

|
|Record Name|Optional. Name of the record added to the document through the Salesforce Record live app. Valid only if the Live App Type is set to salesforce\_record. Only string values are supported.|
|Record Type|Optional. Type of object used by the Salesforce Record live app. Valid only if Live App Type is set to salesforce\_record. Only string values are supported. For example: Account, Opportunity, or CustomObject\_\_c.|
|Salesforce List View ID|ID of the Salesforce list view added to the document. Required if Live App Type is set to salesforce\_list.|
|Salesforce Org Name|Optional. Salesforce org name used in the live app. Valid only if Content Type is set to liveapp. Only string values are supported. For example: Acme.|
|Salesforce Record ID|ID of the Salesforce record added to the document. Required if Live App Type is set to salesforce\_record.|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Document Title|Title of the new document|
|Document ID|ID of the new document|
|Document Link|URL of the new document|

A sales manager wants to create a document at the end of each quarter to identify which accounts are at risk of attrition. You can create a flow that uses the Create Quip Document core action to create a document called Red Accounts. Add a Salesforce list view through the Salesforce List live app that shows all accounts in the red. Then add the document a Red Accounts folder.

![Create Quip doc with list live app](images/flow_quip_create_doc.png)

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_ref\_elements.md](../flow/flow_ref_elements.md)

