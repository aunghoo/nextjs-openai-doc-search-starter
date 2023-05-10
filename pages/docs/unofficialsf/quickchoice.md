[Quick Choice – Improved Picklists and Radio Buttons for Flow](https://unofficialsf.com/quick-choice-improved-picklists-and-radio-buttons-for-flow/ "Permanent Link: Quick Choice – Improved Picklists and Radio Buttons for Flow")
===================================================================================================================================================================================================================================

December 25, 2019/[311 Comments](https://unofficialsf.com/quick-choice-improved-picklists-and-radio-buttons-for-flow/#disqus_thread)/in [Flow](https://unofficialsf.com/category/flow/) /by [Alex Edelstein](https://unofficialsf.com/author/alexed1000/ "Posts by Alex Edelstein")

_This Post was most recently updated on:_ **4**_**/24/23**_  
Current Version: **2.40** (FlowScreenComponentsBasePack [v3.2.0](https://unofficialsf.com/flow-action-and-screen-component-basepacks/) or later)

4/23/23 – Eric Smith – Version 2.40

*   Added an attribute for a Help Text hover to appear next to the Master Label for all input types

**Quick Choice is a flow screen component that provides some features that aren’t available in the current picklist and radio button implementation in Flow Builder.**

Features that it provides:

1.  Accepts as an input a pair of string collections.
2.  Can accept a default value that’s dynamically determined by your Flow
3.  Can generate picklists from existing picklist fields with optional filtering based on record type
4.  Supports ‘None’ Value and Requiredness
5.  Choices can be formatted as Radio Buttons, Picklist, or Visual Cards
6.  Visual Cards can be displayed with or without Icons or Images
7.  Visual Cards can be displayed in single or dual columns
8.  Specify the width of the picklist.

Note: the rest of this post focuses on the Quick Choice component. If you are interested in learning more about the initial example shown in the above video, where different record forms are displayed based on Record Type, take a look at the posts about [Record Detail](https://unofficialsf.com/the-recorddetail-component/), [Get Layout Fields](https://unofficialsf.com/get-a-layouts-field-names-flow-action/) and [Get Layout By Record Type and Profile](https://unofficialsf.com/get-the-layout-corresponding-to-a-specific-recordtype-profile-combination-flow-action/), and [Get Record Type by Object](https://unofficialsf.com/get-record-type-info-by-object-flow-action/)

Quick Choice supports both picklists and radio button groups, set by passing in a value for Display Mode. For this document, we’ll always use “Picklist”. There’s no support for multiple select. If you need that, consider the [Dual List Box flow screen component](https://unofficialsf.com/duallistbox/).

Creating Choices from String Collections
----------------------------------------

Use String Collections as your inputs by setting Input Mode to “Dual String Collections”. Pass in one collection for Labels and one for the underlying values (A typical use case for this is when you want your user to see a list of friendly labels, but you need to make sure that you can get the recordId of the selected label.)

Example: You want to take a collection of Account records and use their Name fields as labels and ID fields as values. Note that there’s a convenient utility action [‘Extract Strings from Collections’ that is available in the Collection Processors extension.](https://unofficialsf.com/from-ragan-walker-and-captech-easy-deduping-with-the-new-extract-strings-from-collection-actions/)

Example: You want your flow to let the user choose a record type from a picklist and then display the layout corresponding to that record type (This is demonstrated in the video above). The Quick Choice package includes several utility actions that make this easy. You first start out with the GetRecordTypeInfobyObject action, which returns separate collections of recordTypeNames and Ids. You then use those as inputs to a QuickChoice control. When the user makes their choice, you use a couple of additional utility actions to extract the Layout fields for the layout that corresponds to the combination of the selected RecordType and the running user’s profile. The layout fields are then passed to the new [RecordDetail flow screen component.](https://unofficialsf.com/the-recorddetail-component/)

![](https://unofficialsf.com/wp-content/uploads/2019/12/image-63.png)

_Tip: If you are starting with a collection of SObjects instead of a collection of Strings, you can use the ExtractFieldFromCollection flow action (provided in the same package as SmartChoice) but you’ll need to modify its Apex, swapping the references to “Account” for your chosen SObject._

Tip: The ‘Get Layout ID’ action is found [here](https://unofficialsf.com/get-the-layout-corresponding-to-a-specific-recordtype-profile-combination-flow-action/). It is not packaged but you can install its Apex into your org directly.

Creating Filtered Choices from Picklist Fields
----------------------------------------------

Many orgs take advantage of the ability to create record-type-specific sets of picklist values for picklist fields like Account.Type and Account.Rating. Flow already enables the easy creation of Picklist Choice Sets, which point at an existing picklist field. But you can’t filter a Picklist Choice Set on a specific Record Type. Quick Choice allows you to do that.

Start by setting the Input Mode to “Picklist Field”.

Pass in strings for Object Name and Field Name. (You can also use [Object and Field picker](https://unofficialsf.com/add-an-object-and-field-picklist-pair-to-your-flow/))

Pass a record type ID in. If you don’t, the component uses the ID of the standard “Master” record type ID, which will result in no filtering. This package includes a useful utility function called GetRecordTypeInfoByObject that will return the record type Id’s and Labels for a given object type name. The video above shows how you can use QuickChoice first to let the user select a record type and then to show a set of filtered picklist fields. [Learn more about using a Flow Action to retrieve the available record types so your user can pick the one they want.](https://unofficialsf.com/get-record-type-info-by-object-flow-action/)

Displaying Choices as Visual Cards
----------------------------------

Set the **Display Mode** to “Card” and the **Input Mode** to “Visual Text Box” .

Pass in a collection of Strings in **Choice Labels** for the visual card headers, a collection of Strings in **Choice Values** for visual card descriptions and optionally a collection of icon and/or image references in **Card Mode – Choice Icons** for visual card icons.

If you are displaying icons, set the **Card Mode – Include Icons in Display Box?** parameter to True and set the **Card Mode – Icon Size** parameter.

The visual cards are displayed in a single column by default. Set the **Card Mode – Number of Display Box Columns (1 or 2)** parameter to 2 to display dual columns.

![](https://unofficialsf.com/wp-content/uploads/2019/12/tb1.png)

**_Visual Cards without Icons_**

* * *

![](https://unofficialsf.com/wp-content/uploads/2019/12/tb2.png)

**_Visual Cards with Icons_**

* * *

![](https://i1.wp.com/unofficialsf.com/wp-content/uploads/2020/01/image-13.png?fit=1030%2C316&ssl=1)

**_Dual Column Visual Cards_**

* * *

  
Single Column Visual Card sizes can be responsive.

![](https://unofficialsf.com/wp-content/uploads/2021/01/image-19-990x1030.png)

* * *

Requiredness Support
--------------------

You can set the Required field to $GlobalConstant.True. If you do, Flow will prevent screen transition if the user selects ‘None’ or makes no selection at all.

Controlling the ‘None’ Choice
-----------------------------

By default, there will be no “None” Choice. To add one, set the input “Allow None To Be Chosen” to $GlobalConstant.True.

Multiple QuickChoices on the Same Screen
----------------------------------------

When including multiple Radio Button and/or Visual Card inputs on the same screen, you must provide a unique value for **Master Label** for each of the components.

Multiselect Picklists
---------------------

Not supported directly with this component, but check out [Dual List Box.](https://unofficialsf.com/duallistbox/)

Recent Improvements
===================

4/23/23 – Eric Smith – Version 2.40 (ScreenComponentsBasePack v3.2.0 or later)

*   Added an attribute for a Help Text hover to appear next to the Master Label for all input types

3/29/23 – Eric Smith – Version 2.39

*   Fixed dependent picklist bug (CB\_TRUE not defined)

3/25/23 – Eric Smith – Version 2.38

*   Refactored to work with the Reactive Screen Beta for Dependent Picklists. It had previously worked with the Pilot but failed when switching over to the Beta.
*   Added a new option to allow the body of a Visual Card to be displayed as Rich Text, including pictures.  
    

![](https://unofficialsf.com/wp-content/uploads/2023/03/Rich-Text-Image-375x1030.png)

11/08/22 – Andy Haas – Versions 2.37

*   Updated the cardSize to allow the height of the card to contain the content

10/12/22 – Eric Smith – Version 2.36

*   Fixed backwards compatability bug from 2.34 when no controlling value attribute is provided for a controlled picklist field

6/2/22 – Eric Smith

*   Adjusted the bottom spacing to match that of all the standard flow screen input components
*   Fixed a bug that caused an error when using an empty Label collection with Visual Cards

3/29/22 – Eric Smith – New Controlling Value attribute for Picklist Fields. This can be used for dependent picklists by passing the output of one QuickChoice component to the input of another QuickChoice component in an org where the [**Reactive Screens**](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kGWqSAM?tab=discussion) pilot is enabled.

* * *

### Demonstration Video of Dependent Picklists with QuickChoice

* * *

[New! This tutorial video on using Quick Choice, courtesy of Helpful Salesforce Admin](https://www.youtube.com/watch?v=9qOhQD3Gqyc)

7/3/21 – Eric Smith – Added an \* next to the Label for Visual Cards when the Required attribute is set to True

Reference
=========

**General Attributes**

**Attribute**

**Type**

**Notes**

Master Label

String

The main label for the picklist or radio button group (Must be unique for each component on the same Flow screen)

Help Text

String

Optional help text to appear as a hover next to the Master Label

Display Mode

Enum

Either “Visual”, “Picklist” or “Radio”, depending on which control you want

Input Mode

Enum

“Single String Collection”, “Dual String Collections”, “Picklist Field”, or ” Visual Text Box ” are currently supported

Required

Boolean

Will prevent transition if set to {!$GlobalConstant.True}

Value

String

The selected value. This can be passed into QuickChoice, allowing you to set the default value dynamically.

Allow None To Be Chosen

Boolean

Set this to true to include a None choice. (For Input Mode “Picklist Field” only)

Set Width in Pixels

Integer

Set the width of the component for Picklist & Radio Buttons (Default 320 pixels)

allValues

String\[\]

The complete set of values provided to the user. (V1.3+)

allLabels

String\[\]

The complete set of labels provided to the user (V1.3+)

selectedLabel

String

The selected Label (V1.3+)

**Additional Attributes When Using Input Mode = “Single String Collection”**

**Attribute**

**Type**

**Notes**

Choice Values

String Collection

The values of your choices (The same collection will be used for Labels and Values)  
The selected Label/Value will be returned by the component

**Additional Attributes When Using Input Mode = “Dual String Collections”**

**Attribute**

**Type**

**Notes**

Choice Labels

String Collection

The labels of your choices

Choice Values

String Collection

The values of your choices (should be unique)  
The selected Value will be returned by the component

**Additional Attributes When Using Input Mode = “Visual Text Box ”**

**Attribute**

**Type**

**Notes**

Choice Titles (Labels)

String Collection

The labels of your choices (should be unique)  
The selected Label will be returned by the component

Choice Descriptions (Values)

String Collection

The values of your choices (This is provided as extra descriptive text in the visual card)

Card Mode – Choice Icons  
(OPTIONAL)

String Collection

Mix and Match either:  
– Icon names formatted as icon\_type:icon\_name (Example “utility:attach”)  
See complete selection at [https://lightningdesignsystem.com/icons/](https://lightningdesignsystem.com/icons/)  
– Image names formatted as filename.ext (Example “astro.png”)  
Referenced images must be included in a ZIP file referenced by a Static Resource\* named Quickchoice\_Images. Note that this Static Resource is created by the package and you can edit it and upload a new zip file.

Card Mode – Include Icons in Text Box?

Boolean

Display the provided icons in the visual card

Card Mode – Icon Size

String

Options include x-small, small, medium, or large. This value defaults to medium.

Card Mode – Number of Textbox Columns (1 or 2)

String

1 or blank (default) for a single column or 2 for dual columns

Make Card Size Responsive

Boolean

The default is False and the CPE will only display this selection when Visual Cards and Single Column are selected.

Use Rich Text for Descriptions?

Boolean

When checked, you can provide HTML formatted text to display as Rich Text in the body of the visual card. One use would be to use Text Template variables for each of the Choice Descriptions.

**Additional Attributes When Using Input Mode = “Picklist Field”**

**Attribute**

**Type**

**Notes**

Object Name (for Picklist Field)

String

Example: “Account” (this component no longer uses the combined “Account.Type” as an input)

Field Name (for Picklist Field)

String

Example: “Type” (this component no longer uses the combined “Account.Type” as an input)

Record Type Id

String

This will default to the id of the Master record type

Is this a Dependent Picklist?

Boolean

Check this box if this is a dependent picklist and you will be defining a controlling value.  The controlling value can either be a picklist field value or a checkbox field value. That value can come from another component on the same flow screen when the Reactive Screen functionality is enabled.

Controlling Value (Picklist Field)

String

If the contolling field is a Picklist, reference it here. Provide a value for Controlling Value Picklist or Controlling Value Checkbox but not both.

Controlling Value (Checkbox Field)

Boolean

If the contolling field is a Checkbox, reference it here. Provide a value for Controlling Value Picklist or Controlling Value Checkbox but not both.

\***NOTE: Static Resource**  
The package includes a Static Resource named Quickchoice\_Images. To access your own images, create a ZIP file containing all of the images you want to reference and then, in Setup, Edit the Quickchoice\_Images Static Resource and reference your ZIP file with the “Choose File” option. To learn more about Static Resources and creating ZIP files, see the [Instructions](https://unofficialsf.com/ersquickswitchapp-instructions/) for my [ersQuickSwitchApp](https://unofficialsf.com/add-a-new-quick-smart-app-switcher/) component.

Install
-------

#### Current Version

This component is part of the **[Flow Base Packs](https://unofficialsf.com/introducing-flow-basepacks/)** package libraries.

View Source
-----------

[Source](https://github.com/alexed1/LightningFlowComponents/tree/master/flow_screen_components/quickChoiceCPE)

**Release Notes:**
------------------

4/23/23 – Eric Smith – Version 2.40 (ScreenComponentsBasePack v3.2.0 or later)

*   Added an attribute for a Help Text hover to appear next to the Master Label for all input types

3/29/23 – Eric Smith – Version 2.39

*   Fixed dependent picklist bug (CB\_TRUE not defined)

3/25/23 – Eric Smith – Version 2.38

*   Refactored to work with the Reactive Screen Beta for Dependent Picklists. It had previously worked with the Pilot but failed when switching over to the Beta.
*   Added a new option to allow the body of a Visual Card to be displayed as Rich Text, including pictures.

11/08/22 – Andy Haas – Versions 2.37

*   Updated the cardSize to allow the height of the card to contain the content

10/12/22 – Eric Smith – Version 2.36

*   Fixed backwards compatability bug from 2.34 when no controlling value attribute is provided for a controlled picklist field

Version 2.35 – 6/2/22 – Eric Smith

*   Adjusted the bottom spacing to match that of all the standard flow screen input components
*   Fixed a bug that caused an error when using an empty Label collection with Visual Cards

Version 2.34 – 3/29/22 – Eric Smith – New Controlling Value attribute for Picklist Fields. This can be used for dependent picklists by passing the output of one QuickChoice component to the input of another QuickChoice component in an org where the

Version 2.33 – 7/3/21 – Eric Smith  
Added an \* next to the Label for Visual Cards when the Required attribute is set to True

Version 2.32 – 1/28/21 – [clifford-fra](https://github.com/clifford-fra)  
Added support for responsive sizing for single column Visual Cards

### **Old Versions (not recommended)**

[Version 2.31 Unlocked](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tf4000004PuQ8AAK) – 9/14/20 – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A)  
Before installing this component you need to have on your org the [Flow Base Components](https://unofficialsf.com/introducing-flowbasecomponents/) support package, version 1.2 or greater.  
**[Install that here.](https://unofficialsf.com/install-flow-base-components/)**

[Version 2.2 Unlocked](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tf4000004PuM6AAK) – 9/2/20 – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A)

[version 2.1 Unlocked](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tf4000003RR3MAAW)

[Version 2.0 Unlocked](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000L2kcIAC) 

[**Version 1.4 Managed 6/5/20**](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000B4Xn)

**Version 1.4** – 4/19/20 – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A)

*   [Release Notes](https://unofficialsf.com/quick-choice-v1-4-help-text-new-record-detail-bug-fixes/)
*   Install [Unmanged v1.4 (Production/Developer)](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6C000000HrR5) – All original components
*   Install [Unmanged v1.4 (Sandbox)](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t6C000000HrR5) – All original components
*   Install [Unmanged v1.4 (Production/Developer)](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6C000000HrT6) – Just the quickChoice component and the images Static Resource
*   Install [Unmanged v1.4 (Sandbox)](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t6C000000HrT6) – Just the quickChoice component and the images Static Resourc

Version 1.3

*   [Release Notes](https://unofficialsf.com/quick-choice-v1-3-new-outputs-a-test-class-fix/)
*   Install [Unmanaged v1.3](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tf4000004PtcdAAC)

**3/2/20** – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A)  
v1.27 Added ability to display both images & icons on visual cards (Thanks again to **clifford-fra** for the update)

[Unmanaged v1.27 (Production/Developer)](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1K0000033L8E)  
[Unmanaged v1.27 (Sandbox)](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t1K0000033L8E)

**2/6/20** – v1.26 Display a Visual Card as preselected when passing in a default value (Thanks to **clifford-fra** for the fix)

[Unmanaged v1.26 (Production/Developer)](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000005HM4I)  
[Unmanaged v1.26 (Sandbox)](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t6g000005HM4I)

[Unmanaged V1.24](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000005HM05)

[See Release Notes](https://unofficialsf.com/quickchoice-update-now-with-column-width-control-plus-bug-fixes/)

**1/16/20** – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A)  
v1.23 – Added an option to display the visual cards in a single or dual columns

[Managed V1.23 (Pr](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g00000479Sk)[o](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000004q8sK)[duction/Developer)](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000004qrn4)  
[Managed V1.23 (Sandbox)](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t6g000004qrn4)

**1/3/20** -alexed  
v1.20 – changed actions to global from public to make them visible in flow builder.

**12/31/19** – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A) Enhancements  
v1.17: Added visual text box selection with or without icons. Fixed error handling when Required is set to True

**12/29/19**  
v1.13: Fixed bug with defaults on picklist control. Added flag to allow or disallow a ‘None’ choice

Release Notes

Version 2.3 – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A) – 9/14/20  
Fixed Visual Card selection bug when no Master Label is provided

Version 2.2 – [Eric Smith](https://www.google.com/url?q=https%3A%2F%2Fsuccess.salesforce.com%2FProfileView%3Fu%3D005300000095v5FAAQ&sa=D&sntz=1&usg=AFQjCNFQ60Uqiy37i0e5DUJUky8GRX1C7A) – 9/2/20  
Includes a new option to sort the values in the Picklist

Version 2.1 – [Now includes a CPE (Custom Property Editor)](https://unofficialsf.com/preview-quick-choice-2-0-with-a-custom-property-editor/)

### _Related_

[](/quick-choice-v1-3-new-outputs-a-test-class-fix/?relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0 "Quick Choice V1.3: New Outputs, a Test Class Fix")

#### [Quick Choice V1.3: New Outputs, a Test Class Fix](/quick-choice-v1-3-new-outputs-a-test-class-fix/?relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=0 "Quick Choice V1.3: New Outputs, a Test Class Fix")

QuickChoice is an improved Picklist and Radio Buttons component for Flow screesn. V1.3 includes the following improvements: The test class utility MockHTTPResponseGenerator was renamed to eliminate conflicts with existing installations that use this utilityNew Output Attributes: allValues and allLabelsNew Output Attribute: selectedLabel allValues and allLabels These are two new string…

April 18, 2020

In "Flow"

[![](https://i0.wp.com/unofficialsf.com/wp-content/uploads/2020/10/qcInstantNav.gif?resize=350%2C200&ssl=1)](/from-chase-kaiser-a-new-quick-choice-feature-instantnavigation-mode/?relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1 "From Chase Kaiser: A New Quick Choice Feature &#8211; &#8220;InstantNavigation Mode&#8221;")

#### [From Chase Kaiser: A New Quick Choice Feature – “InstantNavigation Mode”](/from-chase-kaiser-a-new-quick-choice-feature-instantnavigation-mode/?relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=1 "From Chase Kaiser: A New Quick Choice Feature &#8211; &#8220;InstantNavigation Mode&#8221;")

“InstantNavigation Mode” is a new feature added to the Quick Choice component (now located in the new flowscreencomponentsbasepack) that, when set to true, triggers a navigateNext event when a visual card is selected.  This allows for fast navigation through a flow, especially when additional processing is needed based on the…

October 26, 2020

In "Flow"

[![Screenshot of the three display options available for this Record Type Picker component](https://i0.wp.com/unofficialsf.com/wp-content/uploads/2022/09/RecordTypePickerDisplayOptions-3.png?resize=350%2C200&ssl=1)](/introducing-user-aware-record-type-picker-for-flows/?relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2 "Introducing: User-aware Record Type Picker for Flows")

#### [Introducing: User-aware Record Type Picker for Flows](/introducing-user-aware-record-type-picker-for-flows/?relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2&relatedposts_hit=1&relatedposts_origin=15451&relatedposts_position=2 "Introducing: User-aware Record Type Picker for Flows")

The Record Type Picker is an open-source, free-to-use component that can be used in Screen Flows to give users selectable choices of Record Types, automatically filtered to just the Record Types that the running user has access to!

September 16, 2022

In "Flow"

##### Share this entry

*   [Share on Facebook](https://www.facebook.com/sharer.php?u=https://unofficialsf.com/quick-choice-improved-picklists-and-radio-buttons-for-flow/&t=Quick%20Choice%20%E2%80%93%20Improved%20Picklists%20and%20Radio%20Buttons%20for%20Flow)
*   [Share on Twitter](https://twitter.com/share?text=Quick%20Choice%20%E2%80%93%20Improved%20Picklists%20and%20Radio%20Buttons%20for%20Flow&url=https://wp.me/pasQ6m-41d)
*   [Share on Linkedin](https://linkedin.com/shareArticle?mini=true&title=Quick%20Choice%20%E2%80%93%20Improved%20Picklists%20and%20Radio%20Buttons%20for%20Flow&url=https://unofficialsf.com/quick-choice-improved-picklists-and-radio-buttons-for-flow/)
*   [Share on Reddit](https://reddit.com/submit?url=https://unofficialsf.com/quick-choice-improved-picklists-and-radio-buttons-for-flow/&title=Quick%20Choice%20%E2%80%93%20Improved%20Picklists%20and%20Radio%20Buttons%20for%20Flow)
*   [Share by Mail](mailto:?subject=Quick%20Choice%20%E2%80%93%20Improved%20Picklists%20and%20Radio%20Buttons%20for%20Flow&body=https://unofficialsf.com/quick-choice-improved-picklists-and-radio-buttons-for-flow/)

https://unofficialsf.com/wp-content/uploads/2022/09/largeUCSF-300x133.png 0 0 Alex Edelstein https://unofficialsf.com/wp-content/uploads/2022/09/largeUCSF-300x133.png Alex Edelstein2019-12-25 12:57:062023-04-24 08:16:37Quick Choice - Improved Picklists and Radio Buttons for Flow