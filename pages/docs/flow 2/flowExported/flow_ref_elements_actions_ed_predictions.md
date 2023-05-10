# Flow Core Action: Einstein Discovery

Get predictive and prescriptive intelligence directly in your flows with Einstein Discovery-powered models. Select the row or fields to use for your predictions and let Einstein Discovery generate predictions, suggested ways to improve predicted outcomes, and other details.

## Set Input Values

**Note:** To view Einstein Discovery predictions, improvements, and other details, users must have the **View Einstein Discovery Recommendations** system permission. To learn more, see [Assign Einstein Discovery Permission Sets to Users](../bi/task/bi_edd_setup_assign_permsets.md) .

Use values from an Einstein Discovery model to set the inputs for the action.

|Field|Description|
|-----|-----------|
|Action|Search for the deployed models to which you have access.|
|Label|Descriptive label for the action.|
|API Name|API name for the action.|
|Description|Description for the action.|
|What to Store| |
|Predictions|Enable output from a predictive model to be stored in a flow resource.|
|Top Predictors|Enable top predictors to be stored in a flow resource.|
|Top Improvements|Enable suggested actions to be stored in a flow resource. Applies only to numeric and binary classification models.|
|Select Object Record ID Field|Generate predictions based on a Salesforce object record.|
|Map Fields|Generate predictions using flow resources.|
|Record ID Field|ID of the record to use for the prediction.|
|Model Variable|Map the prediction model variables to flow resources.|
|Advanced|Optionally, for predictions associated with multiclass classification models, expand Advanced, select **Manually assign variables**, and selectively store output values \(class probabilities, the prediction, and top predictors\).|

**Parent topic:**[Provided Flow Core Actions](../flow/flow_ref_elements_actions_list.md)

**Related information**  


[../bi/concept/bi\_edd\_model\_about.md](../bi/concept/bi_edd_model_about.md)

[../flow/flow\_build\_elements.md](../flow/flow_build_elements.md)

