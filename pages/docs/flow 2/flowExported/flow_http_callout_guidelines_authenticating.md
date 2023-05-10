# Guidelines for Authenticating HTTP Callout Actions

Before you configure an HTTP Callout action within Flow Builder, set up a named credential to authenticate calls to the external system. From Setup, follow these guidelines to create a permission set, auth provider, external credential, and named credential, in that order. Then grant users access to the User Credentials object.

|Available in: **Enterprise**, **Unlimited**, and **Developer** Editions|

## Permission Set

Required. Grants users access to make the callout.

If an existing permission set doesn’t exist, create one. Then assign the permission set to each user who can make the callout. Alternatively, consider creating a legacy-named credential to save time because it doesn’t require a permission set.

## Auth. Provider

Required only for the OAuth protocol use cases. Interacts with the identity provider to obtain tokens.

## External Credential

Required. Defines the authentication.

Create the external credential from the Named Credential Setup page, on the External Credential tab.

Select the appropriate protocol based on the API’s requirement:

-   Custom. Select for:
    -   Basic authentication \(username and password\)
    -   Key or token
    -   No authentication
-   OAuth 2.0
-   AWS Signature Version 4

Add a Permission Set Mapping to the external credential and select the related permission set.

For APIs that require a key or token in the header:

-   Add an Authentication Parameter to the Permission Set Mapping. Enter a unique Name and enter the key in the Value field.
-   Add a Custom Header. Enter exact Name that API expects. For the Value, point to the name Authentication Parameter. Example: $Credential.namedCredApiName.authParameterName

For APIs that require basic authentication \(username and password\):

-   Add an Authentication Parameter to the Permission Set Mapping to name and store the value of the username.
-   Add another Authentication Parameter to name and store the value of the password.
-   Add a Custom Header. Enter the Name “Authorization.” For the value, point it to the username and password Authentication Parameters. Example: \{!'Basic ' & BASE64ENCODE\(BLOB\($Credential.BasicAuth.Username & ':' & $Credential.BasicAuth.Password\)\)\}

## Named Credential

Required. Defines the name and URL of the endpoint. The named credential is associated with the HTTP callout action when you create the action in Flow Builder.

The external credential and named credential are separate because APIs often have multiple endpoints that are addressed with the same authentication, for example, calendar.google.com/api and drive.google.com/api.

Enter a Label name that describes the endpoint you’re connecting to, enter the base URL in the URL field, and select the External Credential from previous step.

For the Generate Authorization Header field, leave checked for no authentication and OAuth use cases. Deselect for key or token and basic authentication \(username and password\) use cases.

For the Allow Formulas in HTTP Header field, check if the header that contains a formula, which includes basic auth use cases.

## Access to User Credentials Object

Required for all use cases except for Open APIs that don’t require authentication. Named Credentials subsystem stores secret tokens or values in the User Credentials object.

Using Permission Sets or Profiles, grant the needed access \(Read, Create, Edit, Delete\) to the User Credentials Object.

**Parent topic:**[Configuring an HTTP Callout Action](../flow/flow_http_callout_configuring.md)

**Related information**  


[../security/nc\_named\_creds\_and\_ext\_creds.md](../security/nc_named_creds_and_ext_creds.md)

[../security/named\_credentials\_legacy\_about.md](../security/named_credentials_legacy_about.md)

