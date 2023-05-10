# Launch a Flow from the REST API

Use the Custom Invocable Actions endpoint to invoke an autolaunched flow from the REST API.

This example invokes the active version of the flow “Escalate\_to\_Case”.

```
POST /v33.0/actions/custom/flow/Escalate_to_Case
```

The request sets values for two of the flow’s input variables: `CommentCount` and `FeedItemId`. Once invoked, the flow checks whether:

-   A given feed item has more than five comments and
-   A best comment hasn’t been selected yet

```
{ 
"inputs" : [ {
   "CommentCount" : 6,
   "FeedItemId" : "0D5D0000000cfMY"
   } ] 
}
```

**Parent topic:**[Distribute Flows to Automated Systems](../flow/flow_distribute_system.md)

