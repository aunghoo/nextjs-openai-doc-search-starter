# B2B Commerce Checkout Flow Core Actions

The B2B Commerce Checkout Flow provides several core actions for implementing a successful checkout process within your Commerce org. To add one of these actions to your flow, add an Action element. Then select the **B2B Commerce** category, and search for the appropriate action.

|Available in: Lightning Experience|
|Available in: **Performance**, **Professional**, and **Unlimited** Editions with B2B Commerce|

These actions use Apex-defined input and output variables that map to input and output classes in the Apex `ConnectApi` namespace. For more information on using Apex-defined variables in flows, see [Considerations for the Apex-Defined Data Type](flow_considerations_apex_data_type.md).

-   **[Flow Core Action for Checkout Flow: Activate Order](../flow/flow_ref_elements_b2b_comm_actions_activate_order.md)**  
Activates a Salesforce standard draft order.
-   **[Flow Core Action for Checkout Flow: Calculate Cart Promotions](../flow/flow_ref_elements_b2b_comm_actions_calculate_cart_promotions.md)**  
Request a full calculation of all line items in the cart that have a promotion.
-   **[Flow Core Action for Checkout Flow: Calculate Cart Shipment Costs](../flow/flow_ref_elements_b2b_comm_actions_calculate_cart_shipment.md)**  
Request the shipping costs of all line items within the cart.
-   **[Flow Core Action for Checkout Flow: Calculate Cart Taxes](../flow/flow_ref_elements_b2b_comm_actions_calculate_cart_taxes.md)**  
Request a tax cost calculation for all line items within the cart.
-   **[Flow Core Action for Checkout Flow: Cancel Cart Async Operation](../flow/flow_ref_elements_b2b_comm_actions_cancel_cart_async_operation.md)**  
Cancel the current checkout so the user can return to an unlocked cart. This operation automatically executes when cart changes are invoked, such as add to cart.
-   **[Flow Core Action for Checkout Flow: Cart to Order](../flow/flow_ref_elements_b2b_comm_actions_cart_to_order.md)**  
Create a Salesforce standard order in draft mode.
-   **[Flow Core Action for Checkout Flow: Check Cart Inventory](../flow/flow_ref_elements_b2b_comm_actions_check_cart_inventory.md)**  
Request a full inventory availability check of all line items in the cart.
-   **[Flow Core Action for Checkout Flow: Checkout Session Action](../flow/flow_ref_elements_b2b_comm_actions_checkout_session_action.md)**  
Get or create a checkout session, and return the ID of the session to the caller.
-   **[Flow Core Action for Checkout Flow: Price Cart](../flow/flow_ref_elements_b2b_comm_actions_price_cart.md)**  
Request a reprice of all line items in a cart.
-   **[Flow Core Action for Checkout Flow: Update Checkout Session Action](../flow/flow_ref_elements_b2b_comm_actions_update_checkout_session_action.md)**  
The Update Checkout Session action updates the checkout session state if the current state matches the expected state. This action provides consistency during checkout handling and guarantees that if two browsers attempt to update the state, one succeeds and the other fails validation.

**Parent topic:**[Provided Flow Core Actions](../flow/flow_ref_elements_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

