# Salesforce Omnichannel Inventory Flow Core Actions

Salesforce Omnichannel Inventory provides several core actions for implementing inventory functionality in flows. To add one of these actions to your flow, add an Action element. Then select the **Omnichannel Inventory Service** category, and search for the appropriate action.

|Available in: Lightning Experience|
|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions with Salesforce Omnichannel Inventory|

These actions use Apex-defined input and output variables that map to input and output classes in the Apex ConnectApi namespace. For more information on using Apex-defined variables in flows, see [Considerations for the Apex-Defined Data Type](flow_considerations_apex_data_type.md).

**Important:** A flow that uses Omnichannel Inventory actions must have a runtime API version of 52.0 or later. If possible, always use the latest API version in your flows.

-   **[Flow Core Action for Omnichannel Inventory: Create Reservation](../flow/flow_ref_elements_oci_actions_create_reservation.md)**  
Create one or more inventory reservations at a location or location group.
-   **[Flow Core Action for Omnichannel Inventory: Fulfill Reservation](../flow/flow_ref_elements_oci_actions_fulfill_reservation.md)**  
Fulfill one or more inventory reservations at a location.
-   **[Flow Core Action for Omnichannel Inventory: Get Availability](../flow/flow_ref_elements_oci_actions_get_availability.md)**  
Get inventory availability data for one or more products at one or more inventory locations or location groups.
-   **[Flow Core Action for Omnichannel Inventory: Release Reservation](../flow/flow_ref_elements_oci_actions_release_reservation.md)**  
Release one or more inventory reservations.
-   **[Flow Core Action for Omnichannel Inventory: Transfer Reservation](../flow/flow_ref_elements_oci_actions_transfer_reservation.md)**  
Transfer one or more inventory reservations between locations or location groups. This action reduces the reserved quantity at the source and increases it at the destination. It doesn’t change physical quantities.

**Parent topic:**[Provided Flow Core Actions](../flow/flow_ref_elements_actions_list.md)

**Related information**  


[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

