# User & Group Management

Early Access

This feature is currently in **early access** and will be fully available in version 1.5.0.

Users and groups are managed directly in the Cryptomator Hub admin interface. As an administrator, you can create, edit, and delete users and groups, assign roles, and manage group memberships.

Access the user and group management from the navigation bar in the admin area.

## User Management[​](#user-management "Direct link to User Management")

### User List[​](#user-list "Direct link to User List")

The user list displays all users in your Hub instance. You can search for users by name or email and see key metrics for each user:

* Number of accessible **vaults**
* Number of **group** memberships
* Number of registered **devices**

![User list overview](/img/hub/user-list.png)

### Create User[​](#create-user "Direct link to Create User")

To create a new user, click the "Create User" button in the user list. Fill in the following fields:

* **Profile Picture URL**: Optional URL to a profile picture
* **First Name**: The user's first name
* **Last Name**: The user's last name
* **Username**: A unique identifier for the user (cannot be changed later)
* **Email**: The user's email address
* **Roles**: Assign roles to the user (see [Roles](#roles))
* **Password**: Set an initial password for the user

![Create user form](/img/hub/user-create.png)

After creation, the user can log in with their credentials and complete the [account setup](/hub/your-account/.md#account-setup).

### Edit User[​](#edit-user "Direct link to Edit User")

To edit a user, navigate to the user's detail page and click "Edit". You can modify:

* Profile Picture URL
* First Name
* Last Name
* Email
* Roles
* Password (set a new password)

note

Username cannot be changed after user creation.

### Delete User[​](#delete-user "Direct link to Delete User")

To delete a user, you can either click the delete button in the user list or navigate to the user's detail page and click on the options button next to the "Edit" button, then select "Delete". A confirmation dialog will appear. Deleting a user will:

* Remove the user from all groups
* Revoke access to all vaults
* Delete all registered devices

warning

This action cannot be undone.

### User Details[​](#user-details "Direct link to User Details")

The user detail page shows comprehensive information about a user:

* **Groups**: All groups the user is a member of
* **Accessible Vaults**: Vaults the user has access to (directly or through group membership)
* **Devices**: All registered devices of the user
* **Legacy Devices**: Devices registered with older Hub versions (see [Legacy Devices](/hub/your-account/.md#legacy-devices))

![User detail view](/img/hub/user-detail.png)

## Group Management[​](#group-management "Direct link to Group Management")

Groups allow you to organize users and grant vault access to multiple users at once.

### Group List[​](#group-list "Direct link to Group List")

The group list displays all groups with:

* Number of **members**
* Number of accessible **vaults**

![Group list overview](/img/hub/group-list.png)

### Create Group[​](#create-group "Direct link to Create Group")

To create a new group, click the "Create Group" button. Fill in:

* **Profile Picture URL**: Optional URL to a group picture
* **Name**: A descriptive name for the group

![Create group form](/img/hub/group-create.png)

### Edit Group[​](#edit-group "Direct link to Edit Group")

To edit a group, navigate to the group's detail page and click "Edit". You can modify the group name and profile picture URL.

### Delete Group[​](#delete-group "Direct link to Delete Group")

To delete a group, you can either click the delete button in the group list or navigate to the group's detail page and click on the options button next to the "Edit" button, then select "Delete". A confirmation dialog will appear. Deleting a group will:

* Remove all members from the group
* Revoke group-based vault access (users may still have direct access)

warning

This action cannot be undone.

### Group Details[​](#group-details "Direct link to Group Details")

The group detail page shows:

* **Members**: All users who are members of this group
* **Accessible Vaults**: Vaults the group has access to

![Group detail view](/img/hub/group-detail.png)

### Manage Group Members[​](#manage-group-members "Direct link to Manage Group Members")

From the group detail page, you can:

* **Add Members**: Click "Add Member" to search for and add users to the group
* **Remove Members**: Click the remove button next to a member to remove them from the group

![Add member dialog](/img/hub/group-add-member.png)

note

Subgroups are not supported at this time.

## Roles[​](#roles "Direct link to Roles")

There are three roles in Cryptomator Hub:

| Role             | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **user**         | Default role. Can open vaults and manage their own account.      |
| **admin**        | Can manage users and groups, view audit logs, and create vaults. |
| **create-vault** | Allows users to create new vaults. Inherited by the admin role.  |

Roles are assigned when creating or editing a user. The `user` role is assigned by default to all users.

### Create Vault Role[​](#create-vault-role "Direct link to Create Vault Role")

By default, only users with the `admin` role can create vaults. To allow other users to create vaults, assign the `create-vault` role to them when creating or editing the user.

## User Avatars[​](#user-avatars "Direct link to User Avatars")

Users can have profile pictures displayed throughout Hub (e.g., in vault member lists). As an administrator, you can set the profile picture URL when creating or editing a user.

The avatar can be provided as a URL to an image (e.g., `https://example.com/avatar.png`).

If no profile picture is set, a generated avatar based on the user's name will be displayed.

## External Identity Management[​](#enterprise-external-iam "Direct link to External Identity Management")

Enterprise Feature

Connecting external identity and access management (IAM) solutions is available as an Enterprise feature.

Visit [cryptomator.org](https://cryptomator.org/hub/) for more information about Enterprise features.

![Accessing Keycloak via Hub](/img/hub/access-keycloak-link.png)

Connecting Cryptomator Hub to an external identity manager allows you to:

* Synchronize users and groups from LDAP or Active Directory
* Delegate authentication via OpenID Connect or SAML
* Keep your user management centralized in your existing IAM

You can access the Keycloak management interface from the admin section of Hub. There you can perform all user- and group-related tasks, such as [creating new users](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-user_server_administration_guide), [deleting users](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-deleting-user_server_administration_guide) or [managing groups](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-managing-groups_server_administration_guide).

Setting up LDAP synchronization is described in the [Keycloak documentation](https://www.keycloak.org/docs/latest/server_admin/#_ldap). For OpenID Connect and SAML, the Keycloak documentation provides [general information](https://www.keycloak.org/docs/latest/server_admin/#_identity_broker).

warning

Regardless of your IAM setup, your Hub instance always contains two system users: `admin` and `syncer`. **Do not edit or delete them!** These accounts are required for administration and synchronization tasks.
