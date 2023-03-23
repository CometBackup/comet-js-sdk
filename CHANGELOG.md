# CHANGELOG

## 2023-03-23 v1.1.0

- Based on Comet 23.3.1
- Support filter parameters on `AdminGetJobLogEntries`
- Support S3 Object Lock
- Support Azure Key Vault codesigning

## 2023-02-15 v1.0.8

- Based on 22.12.8
- Add `TimeSpan` option to `EmailReportOptions`
- Add `AlertsDisabled` (default: false) toggle for `PSAConfig` objects
- Add `LastSuspended` for tracking `UserProfileConfig` suspensions
- Improve documentation

## 2023-01-11 v1.0.7

- Based on 22.12.2
- Add new `AdminCountJobsForCustomSearchRequest` API to count total number of jobs for a given search query
- Add new `AdminMetaEmailOptionsGetRequest` / `AdminMetaEmailOptionsSetRequest` / `AdminMetaSendTestReportRequest` APIs for managing tenant email settings
- Add new O365 Protected Accounts quota option in the `UserProfileConfig`
- Add new tenant admin permission `AllowEditEmailOptions`

## 2022-12-09 v1.0.6

- Fix the missing PSAConfig return type

## 2022-11-25 v1.0.5

- Make it easier to have imports from comet-js-sdk when using typescript by adding all the lib types to the root of the library.

## 2022-11-23 v1.0.2

- Based on 22.9.9

## 2022-07-07 v0.0.1

- Based on 22.5.2

- Initial release
