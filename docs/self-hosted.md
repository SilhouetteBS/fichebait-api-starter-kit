# Self-hosted Repository API V2

Start by confirming which API Server build is installed and that this computer can reach its HTTPS host with the certificate trusted. The API Server generally exposes its Swagger UI under /LFRepositoryAPI/. Choose V2 and use the installed Swagger definition to confirm routes for that build.

In Postman, select Self-Hosted and set apiBaseUrl to https://YOUR-SERVER/LFRepositoryAPI/v2, plus repositoryId and the numeric entryId of a test entry the authenticated account can read. Enter a short-lived bearer token locally as accessToken. The Start Here collection has a read-only Self-Hosted connection check that expects HTTP 200 and the requested entry ID.

Obtain a token using the authentication flow supported by the installed API Server and its configuration. Laserfiche documents username/password and the V2 Directory Server authorization code flow. Confirm the token route in the installed Swagger UI before configuring a password exchange. LFDS authorization code requires PKCE and an allowed callback URI.

- [Laserfiche self-hosted authentication](https://developer.laserfiche.com/docs/api/server/authentication/)
- [Laserfiche API Server and deployment differences](https://developer.laserfiche.com/docs/api/server/)

Self-hosted live validation is pending. Record the build, auth method, and connection result before validating recipe parity.
