# Place Record Fields Directly on Flow Screens

Build flow screens faster by adding fields directly from your Salesforce objects. When you add a record field to a flow screen, its name, data type, help text, requiredness, and, in certain cases, existing values are automatically configured. If the field contains a value in the record variable, that value is set on the screen at runtime as a default value.

|Available in: **Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions|

|User Permissions Needed|
|-----------------------|
|To open, edit, or create a flow in Flow Builder:|Manage Flow|
| |

Record fields support these field data types: Address, Checkbox, Date, Date and Time, Email, Name, Number, Phone, Picklist, Text, Text Area, and Text Area \(Long\). Record fields use record variables to determine which fields can be placed on a flow screen and their configuration.

1.  Create or edit a screen element.

2.  On the Fields tab, select a record variable or create a variable with the Record data type and the object that contains the desired field.

    Alternatively, select a record variable automatically created by a Get Records element or a Loop element.

3.  From the list of fields that appear, drag a field to the screen canvas.

4.  To use a record field’s existing value, use a Get Records element for the record variable.


Considerations

-   Just like other fields on a screen, Record fields don’t save data automatically. To save the record variable, use a Create Records or Update Records element.
-   You can’t reference record fields in other areas of your flow, such as formulas, decisions, and conditional visibility. Instead, reference the record variable that you used to create the record field.

**Parent topic:**[Screen](../flow/flow_ref_elements_screen.md)

