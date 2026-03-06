# Supported Cloud Services

A standard use case for Cryptomator is storing your encrypted vaults in a Cloud Service of your choice for safe and private synchronization of your data. When using Cryptomator for Desktop, you will need to have your Cloud Service's synchronization software installed on your computer to access cloud-based vaults.

In comparison, Cryptomator for Android and Cryptomator for iOS support access to vaults that are stored with a range of Cloud Services directly from within the app.

While the Cryptomator for Android and Cryptomator for iOS apps offer native support for a growing number of cloud services, it can happen, especially with smaller ones, that your Cloud Service is not natively supported.

In this case, however, most providers allow you to connect to your vaults via WebDAV instead.

note

Depending on how well it is supported by your provider, individual features may not work optimally when using WebDAV.

If possible, *we therefore recommend that you access your data using the native integration* of your Cloud Service for an optimal user experience.

The following sections will provide you with an overview of [natively supported Cloud Services](#natively-supported-cloud-services), as well as information about [selected Cloud Services with WebDAV support](#cloud-services-with-webdav-support) and a list of [incompatible Cloud Services](#incompatible-cloud-services).

## Natively Supported Cloud Services (Recommended)[​](#natively-supported-cloud-services "Direct link to Natively Supported Cloud Services (Recommended)")

The following Cloud Services are natively supported by Cryptomator for Android and/or Cryptomator for iOS.

| Cloud Service                                                      | Android [1](#user-content-fn-android-recommendation)                                                                    | iOS |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --- |
| Dropbox                                                            | ✅ [2](#user-content-fn-no-fdroid-main)                                                                                 | ✅  |
| Google Drive                                                       | ✅ [2](#user-content-fn-no-fdroid-main) [3](#user-content-fn-no-fdroid-cryptomator) [4](#user-content-fn-no-accrescent) | ✅  |
| OneDrive                                                           | ✅ [2](#user-content-fn-no-fdroid-main)                                                                                 | ✅  |
| pCloud                                                             | ✅ [2](#user-content-fn-no-fdroid-main)                                                                                 | ✅  |
| S3                                                                 | ✅                                                                                                                      | ✅  |
| Box.com                                                            | ❌                                                                                                                      | ✅  |
| iCloud                                                             | ❌                                                                                                                      | ✅  |
| Local device storage                                               | ✅                                                                                                                      | ✅  |
| Spaces provided by other apps [5](#user-content-fn-file-providers) | ✅                                                                                                                      | ✅  |
| WebDAV [6](#user-content-fn-webdav-list)                           | ✅                                                                                                                      | ✅  |

## Cloud Services With WebDAV Support[​](#cloud-services-with-webdav-support "Direct link to Cloud Services With WebDAV Support")

The following *non-exhaustive* table lays out information about Cloud Services that can be accessed using WebDAV by both Cryptomator for Android and Cryptomator for iOS.

| Cloud Service                                       | URL                                                       |
| --------------------------------------------------- | --------------------------------------------------------- |
| 1&1 Online-Speicher (DSL)                           | `https://sd2dav.1und1.de`                                 |
| 1&1 Online-Speicher (Webhosting)                    | `https://webdav.office.1und1.de`                          |
| blaucloud                                           | `https://{username}.blaucloud.de/remote.php/webdav`       |
| Disroot [7](#user-content-fn-disroot)               | `https://cloud.disroot.org/remote.php/webdav/`            |
| freenetcloud                                        | `https://webmail.freenet.de/webdav`                       |
| GMX MediaCenter                                     | `https://webdav.mc.gmx.net`                               |
| HiDrive IONOS [8](#user-content-fn-hidrive-ionos)   | `https://webdav.hidrive.ionos.com`                        |
| HiDrive Strato [9](#user-content-fn-hidrive-strato) | `https://webdav.hidrive.strato.com`                       |
| IceDrive [10](#user-content-fn-icedrive)            | `https://webdav.icedrive.io/`                             |
| kDrive [11](#user-content-fn-kdrive)                | `https://connect.drive.infomaniak.com`                    |
| Koofr [12](#user-content-fn-koofr)                  | `https://app.koofr.net/dav/Koofr`                         |
| MagentaCLOUD [13](#user-content-fn-magentacloud)    | `https://magentacloud.de/remote.php/webdav`               |
| Mailbox.org                                         | `https://dav.mailbox.org/servlet/webdav.infostore/`       |
| Mail.Ru                                             | `https://webdav.cloud.mail.ru`                            |
| Nextcloud [14](#user-content-fn-nextcloud)          | `https://{host}/{path}/remote.php/dav/files/{username}`   |
| OpenCloud [15](#user-content-fn-opencloud)          | `https://{host}/remote.php/dav/spaces/{space-id}`         |
| ownCloud [16](#user-content-fn-owncloud)            | `https://{host}/{path}/remote.php/webdav`                 |
| pCloud (EU) [17](#user-content-fn-pcloud)           | `https://ewebdav.pcloud.com`                              |
| pCloud (US) [17](#user-content-fn-pcloud)           | `https://webdav.pcloud.com`                               |
| Seafile (self-hosted)                               | `https://{host}/{path}/seafdav`                           |
| STACK                                               | `https://{username}.stackstorage.com/remote.php/webdav`   |
| SWITCHdrive                                         | `https://drive.switch.ch/remote.php/dav/files/{username}` |
| Syncwerk (formerly Seafile.de)                      | `https://app.syncwerk.com/seafdav`                        |
| WEB.DE Online-Speicher                              | `https://webdav.smartdrive.web.de`                        |
| wölkli                                              | `https://cloud.woelkli.com/remote.php/webdav`             |
| Yandex.Disk [18](#user-content-fn-yandex)           | `https://webdav.yandex.com`                               |

## Incompatible Cloud Services[​](#incompatible-cloud-services "Direct link to Incompatible Cloud Services")

The Cloud Services listed in the following *non-exhaustive* table can currently **not** be used natively or via WebDAV.

This applies to both Cryptomator for Android and Cryptomator for iOS.

| Cloud Service | Android Feature Request                                 | iOS Feature Request                                   |
| ------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| Mega          | [#39](https://github.com/cryptomator/android/issues/39) | [#258](https://github.com/cryptomator/ios/issues/258) |

<!-- -->

## Footnotes[​](#footnote-label "Direct link to Footnotes")

1. **We recommend using the** [**Google Play Store variant**](/android/setup/.md#google-play-store) **of Cryptomator for Android users** for the best experience. Please see [here](/android/setup/.md#differences-between-variants-and-how-to-choose) for more information about the different Cryptomator for Android variants and the reasoning behind those. [↩](#user-content-fnref-android-recommendation)

2. Not supported by the [Main F-Droid repo variant](/android/setup/.md#main-f-droid-repository) because this Cloud Service requires an API key. [↩](#user-content-fnref-no-fdroid-main) [↩2](#user-content-fnref-no-fdroid-main-2) [↩3](#user-content-fnref-no-fdroid-main-3) [↩4](#user-content-fnref-no-fdroid-main-4)

3. Not supported by the [Cryptomator F-Droid repo variant](/android/setup/.md#cryptomator-f-droid-repository) because this Cloud Service requires proprietary dependencies. [↩](#user-content-fnref-no-fdroid-cryptomator)

4. Not supported by the [Accrescent variant](/android/setup/.md#accrescent) because this Cloud Service requires proprietary dependencies. [↩](#user-content-fnref-no-accrescent)

5. Some Android and iOS apps integrate into the operating system's file manager with their own storage spaces to allow seamless access to their files via so called "File Providers." Cryptomator generally supports saving vaults in those spaces, but is dependent on those apps explicitly supporting access by other apps like Cryptomator. For more technical information about this see [here](https://github.com/cryptomator/android/issues/553) for Android and [here](https://github.com/cryptomator/ios/issues/51) for iOS. [↩](#user-content-fnref-file-providers)

6. Please see [Cloud Services with WebDAV support](#cloud-services-with-webdav-support) for a non-exhaustive list of Cloud Services and information about accessing them with WebDAV. [↩](#user-content-fnref-webdav-list)

7. Disroot: To login, you must provide your disroot username (or your email if you are using your own domain) and your password. If 2FA is enabled you will have to generate an app-specific password. [↩](#user-content-fnref-disroot)

8. HiDrive IONOS: When using 2FA WebDAV requires the OTP provided next to the password but it is only valid for 30 minutes then (see [here \[de\]](https://www.ionos.de/hilfe/hidrive/sicherheit-in-hidrive/aktivieren-der-zwei-faktor-authentifizierung/)) [↩](#user-content-fnref-hidrive-ionos)

9. HiDrive Strato: When using 2FA WebDAV requires the OTP provided next to the password but it is only valid for 60 minutes then (see [here \[de\]](https://www.strato.de/faq/cloud-speicher/2-Faktor-Authentifizierung/)) [↩](#user-content-fnref-hidrive-strato)

10. IceDrive: WebDAV requires a paid plan and a separate access key as password. (see [here](https://icedrive.net/help/account/does-icedrive-support-webdav)) [↩](#user-content-fnref-icedrive)

11. kDrive: WebDAV support is disabled for free users. [↩](#user-content-fnref-kdrive)

12. Koofr: WebDAV access requires a separate app password. [↩](#user-content-fnref-koofr)

13. MagentaCLOUD: WebDAV access requires a separate protocol password. [↩](#user-content-fnref-magentacloud)

14. Nextcloud: WebDAV requires an app-specific password when 2FA is enabled. [↩](#user-content-fnref-nextcloud)

15. OpenCloud: WebDAV requires an App Token generated from Settings > App Tokens. The `{space-id}` is obtained from the info panel of the resource in OpenCloud. [↩](#user-content-fnref-opencloud)

16. ownCloud: WebDAV requires an app-specific password when 2FA is enabled. [↩](#user-content-fnref-owncloud)

17. pCloud: WebDAV access is disabled when 2FA is enabled. Requires a paid plan. [↩](#user-content-fnref-pcloud) [↩2](#user-content-fnref-pcloud-2)

18. Yandex.Disk: WebDAV requires an app-specific password when 2FA is enabled. [↩](#user-content-fnref-yandex)
