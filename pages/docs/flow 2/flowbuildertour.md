![Flow Builder UI](https://resources.help.salesforce.com/images/f686c120c52d7801891d7f2b9bc746ac.png)

Button Bar (1)

Manage your flow as you build it.

*   To copy multiple elements in auto-layout, click **Select Elements**, then click ![the Select Element node](https://resources.help.salesforce.com/images/463df415352c6f2b7e33f4b421fe7aee.png) on each element that you want to select. To copy all selected elements to the clipboard, click ![the Copy Elements button](https://resources.help.salesforce.com/images/0a6bdd7b026df617be9b9c1a8a024c0f.png). To paste the elements you copied, click ![the Add node](https://resources.help.salesforce.com/images/e170df024b1b490d086a3a63644e555f.png), and select **Paste Elements**. The Paste Elements option displays the number of elements you copied. For example, Paste 3 Elements.
*   To duplicate an element in free-form, select the element and click ![duplicate icon](https://resources.help.salesforce.com/images/74148c2cefae3d40c17688c35ea32532.png).
*   To undo a change to your flow, click ![undo icon](https://resources.help.salesforce.com/images/1f98522a47d579763509e6dad17ebd78.png). To redo a change, click ![redo icon](https://resources.help.salesforce.com/images/d6dd8a118e430bda7fbf6bcd3e1de71c.png).
*   To show or hide the Toolbox in auto-layout, click ![toggle left panel icon](https://resources.help.salesforce.com/images/bbb1b394030a43e97205054bbbaf2a10.png).
*   To access the flow version’s properties, such as context and API version, click [](/s?language=en_US)![the View Properties button](https://resources.help.salesforce.com/images/b1b1bf53d7efe63c86dd60adfdd36792.png).
*   Choose between **Auto-Layout** or **Free-Form**. Auto-Layout is the default for all new flows.
*   If the flow has warnings or errors, the Show Warnings icon (![The Show Warnings icon](https://resources.help.salesforce.com/images/5d3c405c7e47120dcbabf82243ff3d66.png)) or the Show Errors icon (![The Show Errors icon](https://resources.help.salesforce.com/images/b6327c21ab4d15be6d9c57b10385b52f.png)) appears. To see details, click the icon.
*   To run the most recent save of the flow version that’s open, click **Run**. If the flow version contains Subflow elements, the active version of its referenced flow is executed. If the referenced flow has no active version, then the Subflow element runs the latest version of its referenced flow.
*   Next to the Run button, you can see the version’s active or inactive status and when it was last saved.
*   To [test](/s/articleView?id=sf.flow_test.htm&language=en_US&type=5 "In Flow Builder, you create, save, and run flow tests. Each time you modify the flow, you can run the test.") the flow that’s open, click **View Tests**, and then click **Create**. Set test parameters and assertions.
*   To [debug](/s/articleView?id=sf.flow_test_debug.htm&language=en_US&type=5 "If you’re troubleshooting a flow that fails, the debug option in Flow Builder can be your best friend. See real-time details of what your flow does, set input variables, and restart the flow anytime to debug a different branch.") the most recent save of the flow version that’s open, click **Debug**. Define values for input variables, roll back changes so debugging doesn’t impact data, view debug details about how the flow runs, and use those details to troubleshoot errors.
*   To [make the current flow version available](/s/articleView?id=sf.flow_distribute_activate.htm&language=en_US&type=5 "You can have multiple versions of a flow in Salesforce, but only one version of each flow can be active at a time. You can activate or deactivate a flow right in Flow Builder or from the flow’s detail page in Setup.") to your users, click **Activate**. Only one version of each flow can be active at a time.
*   To save your flow, click **Save**, or to save it as a new version or a new flow, click **Save As**.

Toolbox (2)

*   To create [resources](/s/articleView?id=sf.flow_ref_resources.htm&language=en_US&type=5 "Each resource represents a value that you can reference throughout the flow."), or to view a list of all elements and resources and their details, use the Manager tab.
*   To view resource and element details, such as type, outputs, usage, and incoming go to connections, click ![details chevron right](https://resources.help.salesforce.com/images/863ff627926946797d0538ea5256bc9d.png) for the resource or element.
*   [To add elements in free-form](/s/articleView?id=sf.flow_build_elements_freeform.htm&language=en_US&type=5 "Create a flow with a drag-and-drop interface that allows you to place elements anywhere."), use the Elements tab.

Canvas (3)

Build a flow on the canvas. As you add elements to the canvas, you can see a diagram of your flow.

Start Element (4)

The Start element represents the start of the flow. The flow executes the elements in order following the Start element. In Record-Triggered flows and Schedule-Triggered flows, configure the Start element to indicate when you want the flow to start running.

Elements (5)

*   To add [elements](/s/articleView?id=sf.flow_ref_elements.htm&language=en_US&type=5 "Each element represents an action that the flow can execute. Examples include reading or writing Salesforce data, displaying information and collecting data from flow users, executing business logic, or manipulating data.") in auto-layout, click ![Add element](https://resources.help.salesforce.com/images/e170df024b1b490d086a3a63644e555f.png) on a connector and select an element from the element menu, such as Create Records and Update Records.
*   To see an element’s description in an element menu in auto-layout, hover over ![The tooltip icon](https://resources.help.salesforce.com/images/6067f53a4a865dc48454b8f6e201e215.png).
*   To add elements in free-form, in the Elements tab in the Toolbox, click and drag an element onto the canvas and connect it to the rest of the flow.
*   To edit or see options for an element, click the element.
*   To see an element’s user-provided description on the canvas in auto-layout, hover over ![Element description](https://resources.help.salesforce.com/images/1ab4a922219998218a4864bc32b32e6b.png) next to the element.

Zoom Button Bar (6)

Use this button bar to zoom in and out of the flow.

Flow Builder Keyboard Shortcuts

Use these handy keyboard shortcuts for macOS and Windows to quickly navigate flows.

Action

Layout

macOS

Windows

Zoom in

Both

Cmd+Option++

Ctrl+Alt+=

Zoom out

Both

Cmd+Option+-

Ctrl+Alt+-

Zoom to fit

Both

Cmd+Option+1

Ctrl+Alt+1

Zoom to view

Both

Cmd+Option+0

Ctrl+Alt+0

Select multiple elements on the canvas

Free-Form

Shift+Click

Shift+Click

Delete elements on the canvas

Free-Form

Delete

Backspace

View the description for an element that's in the menu or on the canvas

Auto-Layout

Cmd+i

Ctrl+i

Switch panel focus

Both

F6

F6

Switch focus between tips and toolbox

Both

g and then d

g and then d

View available keyboard shortcuts

Free-Form

Cmd+/

Ctrl+/

#### See Also

*   [Flow Elements](/s/articleView?id=sf.flow_ref_elements.htm&language=en_US&type=5 "Each element represents an action that the flow can execute. Examples include reading or writing Salesforce data, displaying information and collecting data from flow users, executing business logic, or manipulating data.")
*   [Flow Resources](/s/articleView?id=sf.flow_ref_resources.htm&language=en_US&type=5 "Each resource represents a value that you can reference throughout the flow.")
*   [Browser Requirements](/s/articleView?id=sf.flow_browsers_supported.htm&language=en_US&type=5 "These are the web browsers supported by our automation tools.")