# Launch a Flow from Apex

Use the `start` method in the `Flow.Interview` class to launch an autolaunched flow or user provisioning flow from Apex.

The following includes a sample controller that starts a flow and the corresponding Visualforce page. The Visualforce page contains an input box and a start button. When the user enters a number in the input box and clicks **Start**, the controller’s `start` method is called. The button saves the user-entered value to the flow’s `input` variable and launches the flow using the `start` method. The flow doubles the value of `input` and assigns it to the `output` variable, and the output label displays the value for `output` by using the `getVariableValue` method.

```
public class FlowController {
            
   //Instance of the Flow
   public Flow.Interview.doubler myFlow {get; set;}
   public Double value {get; set;}

   public Double getOutput() {
      if (myFlow == null) return null;
      return (Double)(myFlow.getVariableValue('v1'));
   }

   public void start() {
      Map<String, Object> myMap = new Map<String, Object>();
      myMap.put('v1', input);
      myFlow = new Flow.Interview.doubler(myMap);
      myFlow.start();
   }
}
```

The following is the Visualforce page that uses the sample flow controller.

``` {#interview_start_vf_sample}
<apex:page controller="FlowController">
   <apex:outputLabel id="text">v1 = {!output}</apex:outputLabel>

   <apex:form >
      value : <apex:inputText value="{!output}"/>
      <apex:commandButton action="{!start}" value="Start" reRender="text"/>
   </apex:form>
</apex:page>
```

**Parent topic:**[Distribute Flows to Automated Systems](../flow/flow_distribute_system.md)

