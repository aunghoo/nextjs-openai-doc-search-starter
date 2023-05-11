Flow Resource: Collection Choice Set[](/s?language=en_US)

[](/s?language=en_US)Flow Resource: Collection Choice Set
=========================================================

[](/s?language=en_US)Use an existing collection of records or external data to generate a set of choices.

### Required Editions

Available in: both Salesforce Classic and Lightning Experience

Available in: [](/s?language=en_US)**Essentials**, **Professional**, **Enterprise**, **Performance**, **Unlimited**, and **Developer** Editions

Field

Description

API Name

The requirement for uniqueness applies only to elements within the current flow. Two elements can have the same API name, provided they're used in different flows. An API name can include underscores and alphanumeric characters without spaces. It must begin with a letter and can’t end with an underscore. It also can’t have two consecutive underscores.

Description

Helps you differentiate this resource from other resources.

Record Collection

The collection you want to use to generate the choices. You can reference an Apex-defined collection from an external service, Apex action, or another screen component.

Configure Each Choice
---------------------

For each record that meets the filter conditions, the flow creates a choice using values from the record. Identify which fields to use for each choice’s label and value.

Field

Description

Choice Label

Determines which field to use as the label for each generated choice. Select a field that enables users to differentiate between the generated choices.

![Tip](https://resources.help.salesforce.com/images/1b975641172a45421a590103f03721b3.png)

Tip Make sure to choose a field that contains data. If the selected field has no value for a given record, the corresponding choice’s label is blank at run time.

Data Type

Data type of the choice’s value. You can’t change the data type of a previously saved collection choice set.

Choice Value

Determines which field’s value to store when the user selects this choice at run time. The value is determined by the most recent user selection of a choice within the generated set.

Data Type determines the available options. If you don’t select a field as the choice value, the choice label is used instead.

![Tip](https://resources.help.salesforce.com/images/1b975641172a45421a590103f03721b3.png)

Tip In most cases, set the choice label to Name and the choice value to ID.

![Example](https://resources.help.salesforce.com/images/f3158d3e702ac9d8ee278341a1328246.png)

Example

Collection choice sets are useful when a flow reuses the same dataset over multiple screens. For example, you’re designing a support flow for a company’s IT department that handles support requests related to employee hardware. The flow references the same employee hardware data over several screens. To get the employee hardware information, use a Get Records action, which populates a record collection. To define the conditions relevant to the support request, use a collection filter on the record collection. Next, to display the user choices, add a collection choice set that uses the filtered collection. Create a relevant collection filter and collection choice set for each branch of the support flow.

With collection choice sets, the server is queried only when the Get Records element is first executed. In comparison, record choice sets require a server query with each use.

#### See Also

*   [Provided Flow Screen Components](/s/articleView?id=sf.flow_ref_elements_screencmp.htm&language=en_US&type=5 "Salesforce provides several screen components that extend the types of input fields available in screens.")
*   [Choice Resources for Flow Screen Components](/s/articleView?id=sf.flow_ref_elements_screen_choiceoptions.htm&language=en_US&type=5 "A key part of configuring flow screen components that display choices is selecting the choices to display in that field. The choices appear as radio buttons, checkboxes, or picklist options. Use at least one of these resources: choices, record choice sets, or picklist choice sets.")
*   [Flow Resources](/s/articleView?id=sf.flow_ref_resources.htm&language=en_US&type=5 "Each resource represents a value that you can reference throughout the flow.")

Did this article solve your issue?

Let us know so we can improve!

YesNo

lds-size\_12-of-12 slds-medium-size\_7-of-12 slds-large-size\_7-of-12">

Did this article solve your issue?

Let us know so we can improve!

YesNo