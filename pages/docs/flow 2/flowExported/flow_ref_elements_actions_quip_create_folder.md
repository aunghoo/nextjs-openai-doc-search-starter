# Flow Core Action for Quip: Create Quip Folder

Create a private folder, or add it to existing folders.

|Available in: **Lightning Experience**|

In Flow Builder, add an Action element to your flow. In the Action field, enter Quip, and select **Create Quip Folder**.

## Set Input Values

Use values from earlier in the flow to set the inputs for the action.

|Input Parameter|Description|
|---------------|-----------|
|Folder Name|Name of the new folder. Only string values are supported.|
|Folder Color|Optional. Color of the new folder. Valid values are:-   yellow
-   red
-   orange
-   green
-   blue
-   purple
-   manila
-   light red
-   light orange
-   light green
-   light blue
-   light purple

|
|Parent Folder URL|Optional. A list of folder URLs separated by commas to add the new folder to. By default, the folder is added to the user’s Private folder in Quip. Valid values are:-   https://\[quip\_site\_url\]/folder/\[folder1\_name\], https://\[quip\_site\_url\]/folder/\[folder2\_name\]
-   https://\[quip\_site\_url\]/folder/\[folder\_name\]

For example: https://salesforce.quip.com/folder/account-plans

|

## Store Output Values

|Output Parameter|Description|
|----------------|-----------|
|Created Folder Title|Title of the new folder|
|Folder ID|ID of the new folder|

**Parent topic:**[Quip Flow Core Actions](../flow/flow_ref_elements_actions_quip.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

