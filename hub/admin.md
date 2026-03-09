# Admin

## License[​](#license "Direct link to License")

Every Cryptomator Hub instance requires a license. The license is bound to the instance and cannot be transferred to another instance. Every license has a number of seats and a validity period. As an Hub administrator, you can view license information in the administration area.

![Administration area](/img/hub/admin-area-license.png)

### What Is a Seat?[​](#what-is-a-seat "Direct link to What Is a Seat?")

A regular license contains a fixed number of *seats*. A *seat* is taken for every user, which is assigned to at least one, not-archived vault. Note that:

* If a user is not assigned to any vault, it *does not occupy* a seat.
* If a user is assigned to multiple vaults, it only *occupies one* seat.
* If [a user is created or imported to Hub](/hub/user-group-management/.md), it does not occupy a seat.

note

Enterprise licenses can have an unlimited number of seats. Visit [cryptomator.org](https://cryptomator.org/for-teams/) for more information.

### Community License[​](#community-license "Direct link to Community License")

When you deploy Cryptomator Hub by yourself, it comes with a community license with life-long validity and 5 seats.

### Updating Your License[​](#updating-your-license "Direct link to Updating Your License")

If the community license is not sufficient for your needs, you can upgrade it to a paid license. You can also upgrade an already existing, paid license. To do so, click on the button in the lower right corner of the administration area. It will redirect you to the Cryptomator Hub license store. After the purchase, you will be automatically redirected back to your Hub instance.

## Audit Logs[​](#audit-logs "Direct link to Audit Logs")

The Audit Logs provide an overview of security-related events within Cryptomator Hub. These logs allow administrators to track important account and vault-related actions.

note

Audit Logs are not available with a Community License.

### Event Types[​](#event-types "Direct link to Event Types")

The following events are logged:

#### Device[​](#event-type-device "Direct link to Device")

* **Register Device** - A user [registered a new device](/hub/access-vault/.md#register-device). This can be, e.g., a Cryptomator app (desktop/mobile) to unlock a vault or a web browser to access Cryptomator Hub.
* **Remove Device** – A user [removed a device](/hub/your-account/.md#authorized-devices).

#### Web of Trust[​](#event-type-web-of-trust "Direct link to Web of Trust")

* **Signed Identity** – A user [signed the identity of another user](/hub/vault-management/.md#web-of-trust).
* **Update Wot Setting** – A user updated [Web-of-Trust settings](/hub/vault-management/.md#web-of-trust), e.g., the `wot_max_depth`.

#### Vault[​](#event-type-vault "Direct link to Vault")

* **Add Vault Member** – A vault owner [added a member to a vault](/hub/vault-management/.md#share-a-vault). This only adds the member but does not derive the vault key for the new member.
* **Create Vault** – A user [created a vault](/hub/vault-management/.md#create-a-vault).
* **Grant Vault Access** – A user [derived the vault key for the new member](/hub/vault-management/.md#update-permissions).
* **Retrieve Vault Key** – A user retrieved a vault key. This happens when a user [unlocks a vault](/hub/access-vault/.md#unlocking-a-vault) but also, e.g., when an owner manages the vault. The IP address and device information are optional for legacy reasons.
* **Remove Vault Member** – A vault owner removed a member from a vault.
* **Update Vault Member** – A vault owner [changed a member's role](/hub/vault-management/.md#change-ownership) (owner or user).
* **Update Vault** – A vault owner [updated the vault metadata](/hub/vault-management/.md#edit-vault-metadata). This includes the vault name or description.

#### Account[​](#event-type-account "Direct link to Account")

* **Account Key Changed** – A user [re-generated the account key](/hub/your-account/.md#regenerate-account-key). This also logs `User Keys Change` because changing the account key also changes parts of the user keys.
* **Reset User Account** – A user [reset their account](/hub/your-account/.md#reset-account).
* **User Keys Change** – A user changed their keys. This happens when, e.g., the user [finished the account setup](/hub/your-account/.md#account-setup) or when the `Account Key Changed`.

#### Emergency Access (Enterprise Only)[​](#event-type-emergency-access "Direct link to Emergency Access (Enterprise Only)")

* **Emergency Access Setup** – A vault owner set up or updated the Emergency Access configuration for a vault (e.g. by assigning council members in Vault Details).
* **Emergency Access Settings Updated** – An admin changed the [global Emergency Access settings](#emergency-access).
* **Emergency Access Recovery Started** – A council member [started](/hub/emergency-access/.md#starting-a-recovery-process) an Emergency Access recovery process.
* **Emergency Access Recovery Approved** – A council member [approved](/hub/emergency-access/.md#approve-a-recovery-process) a running recovery process.
* **Emergency Access Recovery Completed** – A council member [completed](/hub/emergency-access/.md#complete-a-recovery-process) a recovery process.
* **Emergency Access Recovery Aborted** – A council member [aborted](/hub/emergency-access/.md#abort-a-recovery-process) a running recovery process.

note

When a council member starts a recovery process, both `Emergency Access Recovery Started` and `Emergency Access Recovery Approved` are logged.

#### Legacy[​](#event-type-legacy "Direct link to Legacy")

* **Claim Vault Ownership** – A user claimed vault ownership. This event is logged when a vault created with hub pre 1.3.0 is claimed by the vault creator using the `Vault Admin Password`.

### Audit Log Table View[​](#audit-log-table-view "Direct link to Audit Log Table View")

The logs are displayed in a structured table containing the following columns:

* **Timestamp** – The exact time of the event.
* **Event** – The type of event that occurred.
* **Details** – Additional information about the event.

![Audit Logs Table View](/img/hub/auditlogs-overview.png)

### Filtering Audit Logs[​](#filtering-audit-logs "Direct link to Filtering Audit Logs")

To refine the displayed logs, a filtering function is available:

![Audit Log Filtering Options](/img/hub/auditlogs-filter.png)

* **Date Range Filter**: Allows filtering logs between two specific dates.
* **Event Type Filter**: A multi-select dropdown enables filtering by event type.

![Audit Log Filtering Options](/img/hub/auditlogs-filter-events.png)

## Web of Trust[​](#web-of-trust "Direct link to Web of Trust")

The Web of Trust (WoT) feature in Cryptomator Hub helps users verify each other's identity by signing the [User Key Pair](/security/hub/.md#user-key-pair) with their private keys using ECDSA. First, the trusting user needs to verify the trustee by entering the first characters of the trustee's public key fingerprint. Once signed, the proof is uploaded to Hub, where others can check its authenticity.

WoT also supports transitive trust, meaning if Alice trusts Bob, and Bob trusts Charlie, then Alice implicitly trusts Charlie. This forms a trust chain, allowing users to establish indirect trust relationships.

![Web of Trust Administration](/img/hub/wot-admin.png)

**In the administration area, administrators can configure the following trust settings:**

The maximum depth of such chains can be configured using the **Maximum WoT Depth** property:

* The default value is 3 ("Great-Grandchild")
* The maximum value is 9
* The minimum value, 0, means no trust chain is allowed, only direct trust relationships are considered.

With the **Fingerprint Verification Preciseness** property, the minimum length of the entered public key fingerprint can be configured:

* The default value is 2
* The minimum value, 0, means the fingerprint of the trustee is fully shown without any input needed.

note

If a user resets their account, their [User Key Pair](/security/hub/.md#user-key-pair) is regenerated, invalidating all previously established trust relationships regarding this user.<br /><!-- -->Additionally, any existing trust chains that included the user will be broken, requiring re-verification to restore trust.

## Emergency Access[​](#emergency-access "Direct link to Emergency Access")

Early Access

Emergency Access is currently in **early access** and will be fully available in version 1.5.0.

Enterprise Feature

Visit [cryptomator.org](https://cryptomator.org/hub/) for more information about Enterprise features.

This configuration defines default [Emergency Access](/hub/emergency-access/.md) values for new or updated vaults.

![Emergency Access](/img/hub/admin-emergency-access.png)

Activate `Enable Emergency Access` and configure:

* `Required Keys`: Number of required key shares
* `Keyholders`: Default council members (only activated users)
* Optional: `Let vault owners choose different keyholders`
* Optional: `At least` (minimum members if owners can choose a different council)

warning

A council without redundancy (`Required Keys == number of council members`) is possible, but not recommended.
