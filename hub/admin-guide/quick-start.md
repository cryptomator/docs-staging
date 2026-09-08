# Quick Start

This guide walks you through setting up a fresh Cryptomator Hub instance for your organization in about **20 minutes**.

As a worked example, meet Alice: she administers Hub at the design agency Acme. Her instance is up and running, and now she adds her first users and a group, connects the company's identity provider, enables Emergency Access, and checks the audit log and license.

## Before You Start[​](#before-you-start "Direct link to Before You Start")

You need:

* A running Hub instance — a local test instance from the [Quick Start](/hub/self-hosting-guide/quick-start/.md) or a server deployment (managed or selfhosted)
* An account with the `admin` [role](/hub/admin-guide/user-group-management/.md#roles), such as the initial admin account created during deployment.

tip

Not keen on hosting an instance yourself? Cryptomator Hub is also available as a [managed service](https://cryptomator.org/hub/managed/?utm_source=docs.cryptomator.org\&utm_medium=referral\&utm_campaign=admin-guide) with a free 30-day trial period — this guide applies there all the same.

## Add Users and Groups[​](#add-users-and-groups "Direct link to Add Users and Groups")

Since version 2.0, users and groups are managed directly in Hub, via the `Users` and `Groups` entries in the sidebar. Alice creates accounts for Bob and Carol, each with username, email, and an initial password. She then creates the group *Designers* and adds both as members — sharing vaults with a group scales better than managing individual permissions.

![Create user form](/img/hub/user-create.png)

Bob and Carol can now log in and complete their account setup, as described in the [User Guide](/hub/user-guide/quick-start/.md#set-up-your-account).

For more details, read [Create User](/hub/admin-guide/user-group-management/.md#create-user), [Create Group](/hub/admin-guide/user-group-management/.md#create-group), and [Manage Group Members](/hub/admin-guide/user-group-management/.md#manage-group-members).

## Connect Your Identity Provider[​](#connect-your-identity-provider "Direct link to Connect Your Identity Provider")

Creating users by hand is fine for a handful of people. Since Acme already manages its staff in a central directory, Alice instead connects Hub's bundled Keycloak to it, so users log in with their existing credentials and accounts stay in sync.

![Accessing Keycloak via Hub](/img/hub/access-keycloak-link.png)

The `Manage Keycloak` link takes Alice to the Keycloak admin console, where identity providers are configured on the `Identity providers` page:

![Identity providers in the Keycloak admin console](/img/hub/keycloak-identity-providers.png)

Depending on what your organization runs, follow the matching reference section:

* [OpenID Connect](/hub/admin-guide/keycloak/.md#openid-connect) providers such as Microsoft Entra ID or Google Workspace.
* [LDAP and Active Directory](/hub/admin-guide/keycloak/.md#ldap-and-active-directory) for user federation.
* [Mapping groups to roles](/hub/admin-guide/keycloak/.md#mapping-groups-to-roles), e.g. to grant an *IT* directory group the `admin` role automatically.

For more details, read [Connecting an External Identity Provider](/hub/admin-guide/keycloak/.md#connecting-an-external-identity-provider) and [External Identity Management](/hub/admin-guide/user-group-management/.md#enterprise-external-iam).

## Enable Emergency Access[​](#enable-emergency-access "Direct link to Enable Emergency Access")

What if Bob leaves Acme and the *Client Projects* vault has no other owner? Emergency Access, new in version 2.0, lets a council of trusted users jointly restore access to a vault. Alice enables it in the admin area and defines a default council, so every new vault gets Emergency Access conditions during creation. For existing vaults, owners set up the council in the vault details.

![Emergency Access](/img/hub/admin-emergency-access.png)

Enterprise Feature

Emergency Access is available as an Enterprise feature. Visit [cryptomator.org](https://cryptomator.org/hub/) for more information.

For more details, read [Emergency Access admin settings](/hub/admin-guide/emergency-access/.md#admin-settings), [Set Up Emergency Access](/hub/admin-guide/emergency-access/.md#set-up-emergency-access), and the per-vault [Emergency Access Council](/hub/user-guide/vault-management/.md#emergency-access-council).

## Review the Audit Log[​](#review-the-audit-log "Direct link to Review the Audit Log")

The next morning, Alice verifies that everything went as intended. In the audit log, she filters for vault events and sees the creation of *Client Projects* and the access grants for Carol and the *Designers* group, each with actor and timestamp.

![Audit Logs Table View](/img/hub/auditlogs-overview.png)

For more details, read [Audit Logs](/hub/admin-guide/audit-logs/.md), [Filtering Audit Logs](/hub/admin-guide/audit-logs/.md#filtering-audit-logs), and the list of [Event Types](/hub/admin-guide/audit-logs/.md#event-types).

## Check Your License[​](#check-your-license "Direct link to Check Your License")

Finally, Alice opens the license section of the admin area. With Bob and Carol having vault access, two seats are in use — a seat is occupied by every user who is assigned to at least one vault. The overview shows the used and licensed seats and where to upgrade before the team grows.

![Administration area](/img/hub/admin-area-license.png)

For more details, read [License](/hub/admin-guide/license/.md), [What Is a Seat?](/hub/admin-guide/license/.md#what-is-a-seat), and [Updating Your License](/hub/admin-guide/license/.md#updating-your-license).

## Next Steps[​](#next-steps "Direct link to Next Steps")

* Set up [backups](/hub/self-hosting-guide/operations/.md#backup) before real data accumulates.
* Harden logins with [session timeouts](/hub/admin-guide/keycloak/.md#session-timeouts) and [access restrictions](/hub/admin-guide/keycloak/.md#restricting-access-to-hub).
* Send your team the [User Guide](/hub/user-guide/.md) so they can get started on their own.
