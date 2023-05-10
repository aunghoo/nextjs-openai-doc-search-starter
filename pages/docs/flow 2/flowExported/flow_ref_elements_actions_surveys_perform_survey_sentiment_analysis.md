# Flow Core Action: Perform Survey Sentiment Analysis

Get insights into the sentiments that underlie survey responses.

In Flow Builder, add an Action element to your flow. In the Action field, enter Sentiment, and select **Perform Survey Sentiment Analysis**. Or, in the left navigation, click **Survey**, enter Sentiment in the Action field, and select **Perform Survey Sentiment Analysis**. Define the name of the action and the survey recipients.

To access this action from the API, use the name `performSurveySentimentAnalysis`.

## Set Input Values

|Field|Description|
|-----|-----------|
|End Date|Required. The date until when participant responses are processed to get sentiment insights.|
|Operation|Required. The action performed on the AI Sentiment Result records.

-   **Create**: Use the create operation when sentiment analysis is yet to be done on survey responses and there are no associated AI Sentiment Result records, or to analyze the sentiment again. After the processing is completed, AI Sentiment Result records are created with the sentiment of the survey responses and with the Submitted status.
-   **Update**: Use the update operation to bulk process survey responses that have associated AI Sentiment Result records in Draft status. After the processing is completed, the AI Sentiment Result records are updated with the sentiment of the survey responses and their status is changed to Submitted.

|
|Question IDs|Required. The IDs of the questions for whose responses you want to get sentiment insights.|
|Start Date|Required. The date from when participant responses are processed to get sentiment insights.|
|Survey ID|Required. The ID of the survey containing the questions for whose responses you want to get sentiment insights.|

## Usage

At run time, the AI Sentiment Result record isn’t created until the interview’s transaction is completed. After the transactions are completed, AI Sentiment Result records are created with Completed status.

**Parent topic:**[Provided Flow Core Actions](../flow/flow_ref_elements_actions_list.md)

