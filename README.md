# FicheBait API Starter Kit

An independent Postman starter kit for Laserfiche Repository API V2. This scaffold works with the free Postman desktop app. The reference and five guided recipes currently target Laserfiche Cloud.

## Run a connection check

1. Import the three collections and four environment templates from `postman/`.
2. Select your Cloud region or Self-Hosted. For self-hosted, set `apiBaseUrl` to the trusted API Server URL, such as `https://api.example.com/LFRepositoryAPI/v2`, without a trailing slash.
3. Set `repositoryId` and the numeric `entryId` of an entry the authenticated identity can read.
4. Obtain an access token using the [Cloud](https://developer.laserfiche.com/docs/api/authentication/) or [self-hosted](https://developer.laserfiche.com/docs/api/server/authentication/) guide. For Cloud, request `repository.Read` or the appropriate granular scope. Set `accessToken` locally in your personal environment. Never share the value or export a populated environment. Clear the value after testing.
5. Open **01 - Start Here → Verify Your Connection** and send the matching request. A successful run returns HTTP 200 and passes the entry ID assertion.

A 401 calls for checking the token and its target deployment. For a 403, check the granted scope and repository rights. For a 404, check the API base URL, region, repository ID, and entry ID. For a self-hosted TLS or network error, connect to the required network and check the server's certificate trust.

The kit has no paid Postman or GitHub dependency. Live connection checks require an existing Laserfiche deployment and authorized access. The Cloud US read-only connection check passed. See the [Cloud walkthroughs](docs/cloud-recipes.md) for recipe setup and validation status.
