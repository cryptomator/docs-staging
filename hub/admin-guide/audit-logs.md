# Audit Logs

The Audit Logs provide an overview of security-related events within Cryptomator Hub. These logs allow administrators to track important account and vault-related actions.

note

Audit Logs are not available with a Community License.

## Viewing the Audit Log[​](#audit-log-table-view "Direct link to Viewing the Audit Log")

The logs are displayed in a structured table containing the following columns:

* **Timestamp** – The exact time of the event.
* **Event** – The type of event that occurred.
* **Details** – Additional information about the event.

![Audit Logs Table View](/img/hub/auditlogs-overview.png)

## Filtering Audit Logs[​](#filtering-audit-logs "Direct link to Filtering Audit Logs")

To refine the displayed logs, a filtering function is available:

![Audit Log Filtering Options](/img/hub/auditlogs-filter.png)

* **Date Range Filter**: Allows filtering logs between two specific dates.
* **Event Type Filter**: A multi-select dropdown enables filtering by event type.

![Audit Log Filtering Options](/img/hub/auditlogs-filter-events.png)

## Event Types[​](#event-types "Direct link to Event Types")

The following events are logged:

### Device[​](#event-type-device "Direct link to Device")

* **Register Device** - A user [registered a new device](/hub/user-guide/access-vault/.md#register-device). This can be, e.g., a Cryptomator app (desktop/mobile) to unlock a vault or a web browser to access Cryptomator Hub.
* **Remove Device** – A user [removed a device](/hub/user-guide/your-account/.md#authorized-devices).

### Web of Trust[​](#event-type-web-of-trust "Direct link to Web of Trust")

* **Signed Identity** – A user [signed the identity of another user](/hub/user-guide/vault-management/.md#web-of-trust).
* **Update Wot Setting** – A user updated [Web-of-Trust settings](/hub/user-guide/vault-management/.md#web-of-trust), e.g., the `wot_max_depth`.

### Vault[​](#event-type-vault "Direct link to Vault")

* **Add Vault Member** – A vault owner [added a member to a vault](/hub/user-guide/vault-management/.md#share-a-vault). This only adds the member but does not derive the vault key for the new member.
* **Create Vault** – A user [created a vault](/hub/user-guide/vault-management/.md#create-a-vault).
* **Grant Vault Access** – A user [derived the vault key for the new member](/hub/user-guide/vault-management/.md#update-permissions).
* **Retrieve Vault Key** – A user retrieved a vault key. This happens when a user [unlocks a vault](/hub/user-guide/access-vault/.md#unlocking-a-vault) but also, e.g., when an owner manages the vault. The IP address and device information are optional for legacy reasons.
* **Remove Vault Member** – A vault owner removed a member from a vault.
* **Update Vault Member** – A vault owner [changed a member's role](/hub/user-guide/vault-management/.md#change-ownership) (owner or user).
* **Update Vault** – A vault owner [updated the vault metadata](/hub/user-guide/vault-management/.md#edit-vault-metadata). This includes the vault name or description.

### Account[​](#event-type-account "Direct link to Account")

* **Account Key Changed** – A user [re-generated the account key](/hub/user-guide/your-account/.md#regenerate-account-key). This also logs `User Keys Change` because changing the account key also changes parts of the user keys.
* **Reset User Account** – A user [reset their account](/hub/user-guide/your-account/.md#reset-account).
* **User Keys Change** – A user changed their keys. This happens, for example, when the user [finished the account setup](/hub/user-guide/your-account/.md#account-setup).

### Emergency Access (Enterprise Only)[​](#event-type-emergency-access "Direct link to Emergency Access (Enterprise Only)")

* **Emergency Access Setup** – A vault owner set up or updated the Emergency Access configuration for a vault (e.g. by assigning council members in Vault Details).
* **Emergency Access Settings Updated** – An admin changed the [global Emergency Access settings](/hub/admin-guide/emergency-access/.md#admin-settings).
* **Emergency Access Recovery Started** – A council member [started](/hub/admin-guide/emergency-access/.md#starting-a-recovery-process) an Emergency Access recovery process.
* **Emergency Access Recovery Approved** – A council member [approved](/hub/admin-guide/emergency-access/.md#approve-a-recovery-process) a running recovery process.
* **Emergency Access Recovery Completed** – A council member [completed](/hub/admin-guide/emergency-access/.md#complete-a-recovery-process) a recovery process.
* **Emergency Access Recovery Aborted** – A council member [aborted](/hub/admin-guide/emergency-access/.md#abort-a-recovery-process) a running recovery process.

note

When a council member starts a recovery process, both `Emergency Access Recovery Started` and `Emergency Access Recovery Approved` are logged.

### Legacy[​](#event-type-legacy "Direct link to Legacy")

* **Claim Vault Ownership** – A user claimed vault ownership. This event is logged when a vault created with hub pre 1.3.0 is claimed by the vault creator using the `Vault Admin Password`.
