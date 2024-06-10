# CHANGELOG

## 2024-06-11 v2.22.0

- Based on Comet 24.6.0
- Added custom HELO/EHLO STMP support
- Added support to set if disabled Office 365 accounts should be backed up
- Added EngineType as a property of VaultSnapshots

## 2024-05-31 v2.21.0

- Based on Comet 24.5.0
- Added support for matching Microsoft Office 365 users and groups by Drive ID
- Added support for configuring Object Lock on a Impossible Cloud Partner API Storage Template
- Added support for Custom Body Date when using a Custom Remote Bucket Storage Template

## 2024-05-24 v2.20.0

- Based on Comet 24.3.9

## 2024-05-17 v2.19.0

- Based on Comet 24.3.8
- Added support for configuring Software Build Role builder count
- Added LastStartTime field to job statistics

## 2024-05-14 v2.18.0

- Based on Comet 24.3.7
- Added support for configuring concurrency in Microsoft 365 Protected Items

## 2024-05-02 v2.17.0

- Based on Comet 24.3.6
- Testing new release process

## 2024-04-12 v2.16.0

- Based on Comet 24.3.5

## 2024-01-23 v2.15.0

- Based on Comet 23.12.3

## 2024-01-17 v2.14.0

- Based on Comet 23.12.3

## 2023-12-21 v2.13.0

- Based on Comet 23.12.1

## 2023-12-20 v2.12.0

- Based on Comet 23.11.2

## 2023-11-21 v2.11.0

- Based on Comet 23.9.11

## 2023-11-06 v2.10.0

- Based on Comet 23.9.9
- Add Syncro support

## 2023-11-03 v2.9.0

- Based on Comet 23.9.8

## 2023-10-25 v2.8.0

- Based on Comet 23.9.7
- Add VMware support

## 2023-10-18 v2.7.0

- Based on Comet 23.9.6
- Added Comet Storage Remote Server Type

## 2023-10-12 v2.6.0

- Based on Comet 23.9.5
- Add new field `LogLevel` to control job log verbosity
- Add new `RESTORETYPE_WINDISK_ESXI` for restoring to VMware-compatible
virtual disks

## 2023-09-19 v2.5.0

- Based on Comet 23.9.2
- 'UseObjectLock' for S3 compatible storage settings deprecated. Replaced by 'ObjectLockMode'
- New Streamable event SEVT_DEVICE_LOBBY_CONNECT and SEVT_DEVICE_LOBBY_DISCONNECT
- Added 'TOTPCode' to 'InstallCreds' used for device registration.
- 'GroupedBy' added to 'PSAConfig' for grouping statistics.
- New APIs
	- AdminInstallationDispatchDropConnection
	- AdminInstallationDispatchRegisterDevice
	- AdminInstallationListActive
	- AdminJobAbandon

## 2023-08-29 v2.4.0

- Based on Comet 23.8.0
- Improve documentation of JobStatus constants

## 2023-08-09 v2.3.0

- Based on Comet 23.6.9
- Added WebDAV `DestinationLocation`

## 2023-08-02 v2.2.0

- Based on Comet 23.6.9
- Support new API endpoints for managing external admin authentication sources
- Support Object Lock policy option
- Update docstrings for various types and fields

## 2023-07-11 v2.1.0

- Based on Comet 23.6.5
- Support `DeviceConfig->ClientVersion`
- Support new `OSInfo` and `RestoreJobAdvancedOptions` fields
- Support new `SourceConfig` fields for tracking policy-enforced Protected Items
- Support new optional parameters in `AdminDispatcherRunRestoreCustom` API
- Add many more documentation comments, including behaviour of base64 byte arrays

## 2023-06-01 v2.0.0

- **BREAKING:** The `_requestP` function was changed from a throwing method to an abstract method. This will have no effect on most use cases.
- Based on Comet 23.5.0
- Add new `StreamableEventType` constants (`SEVT_*`) used for tracking Comet Server config changes
- Add new `StreamerType` constants (`STREAMER_TYPE_*`)
- Add new `FileOptions` type for configuring the Comet Server to log live events to a file
- Add new field `AuditFileOptions` to the `Organization` type for configuring per-tenant audit log options
- Add `Actor` (authenticated user), `ResourceID`, `Timestamp` and `TypeString` fields to the `StreamableEvent` type
- Deprecate the `UserProfileFragment` type
- Add extra comments to many types

## 2023-05-05 v1.3.0

- Based on Comet 23.3.7
- No functional changes
- Add significantly many more comments to constants, fields and types

## 2023-04-24 v1.2.0

- Based on Comet 23.3.5
- Support new `AdminDispatcherSearchSnapshots` API to remotely search for files in a Storage Vault
- Support new `AdminMetaRemoteStorageVaultTest` API to test connections for a Storage Template
- Support new `AccentColor` and `BrandingStyleType` branding options for the Comet Server web interface
- New Self-Backup option to include server logs
- Track creation and modification timestamps for `GroupPolicy` objects

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
