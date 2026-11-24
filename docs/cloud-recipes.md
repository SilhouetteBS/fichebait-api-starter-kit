# Cloud recipe walkthroughs

Select your Cloud environment and verify the connection first. Run the requests in each recipe folder individually. Set the recipe inputs in collection Variables or use local environment overrides. Keep bearer credentials local.

## 01 - Find a document by metadata

Set searchCommand to a metadata query scoped to your test folder. Copy the selected result ID into matchedEntryId. If no entries match, check the field value and folder. Verify the selected entry and its metadata.

1. Find matching entries
2. Read entry
3. Read fields

## 02 - Read a search across multiple pages

Start a search expected to return at least three entries. Copy taskId to searchTaskId. Poll until Completed, then read pages with searchSkip=0, 2, 4, and so on. Stop at a short or empty page, or after 10 pages and report a partial result. Compare IDs across pages.

1. Start asynchronous search
2. Check task status
3. Read a search page

## 03 - Upload a PDF and apply metadata

Set testFolderId, allowWrites=true, templateName and metadataFieldsJson. Create the child folder and copy its ID to createdFolderId. Select the bundled file in Body before import. Copy the new document ID to createdEntryId and verify the entry and fields.

1. Create test child folder
2. Import sample PDF with metadata
3. Read entry
4. Read fields

## 04 - Update single-value and multivalue fields

Use a disposable entry and allowWrites=true. Read all fields first and stop if the result is paginated or any field hasMoreValues. Set replacementFieldsJson to the complete list of assigned names and values with edits to one single-value and one multivalue field. Preserve at least one unrelated field. Read back and compare.

1. Read fields
2. Replace field values on disposable entry
3. Verify updated and preserved fields

## 05 - Export a document and download the result

Start the export and copy taskId to exportTaskId. Poll until Completed, then open result.uri separately without repository bearer authentication. Save the file locally and open it. Treat the download URL as a credential.

1. Start electronic document export
2. Check task status

## Test data

Use a disposable folder and a template with an editable single-value field, multivalue field, and unrelated field. An example metadataFieldsJson value is [{"name":"Subject","values":["Starter kit test"]},{"name":"Recipients","values":["one@example.invalid","two@example.invalid"]}]. Adjust names and values to match your test template. For write recipes, request repository.Read and repository.Write and grant the test identity rights on the test location. Record newly created IDs and clean up manually after verification.

## Validation

Cloud US supplied-token connection check passed with HTTP 200 and a matching entry ID. On 2026-11-24, an acceptance script in Postman exercised all five workflows against a Cloud US test repository using a fresh token with repository.Read and repository.Write. The run verified search matches, distinct result pages, PDF import and initial metadata, field updates that preserved the third field, and retrieval of the exported PDF. This validates the API workflows. A fresh import into Postman 12.34.0 also verified the individual metadata search, task and page requests, field update and read-back, and export start and status. Selecting and uploading the local PDF exposed a pre-request file-path check that incorrectly skipped the desktop request. With that check removed, Postman returned 201 and the entry and fields read-back returned 200. The export download was verified by a temporary post-response check to avoid displaying the signed URL. Canada and EU are documented but unverified.
