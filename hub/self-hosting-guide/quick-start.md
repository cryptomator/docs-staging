# Quick Start

Want to see Cryptomator Hub in action before rolling it out to your team? This guide gets a test instance running on your own machine in about **10 minutes**. No domain, no TLS certificates, no reverse proxy.

What you end up with is a playground, not a production system. It only listens on `localhost`, uses plain HTTP, and comes with default passwords. When you are ready for the real thing, continue with [Going to Production](#going-to-production) below.

## Before You Start[​](#before-you-start "Direct link to Before You Start")

You need:

* A machine with [Docker](https://docs.docker.com/get-docker/) installed, including Docker Compose (`docker compose version` should print a version number).
* Ports `8080` and `8180` free on that machine.
* About 1 GB of free RAM for the three containers (Hub, Keycloak, and Postgres).

## Start Hub[​](#start-hub "Direct link to Start Hub")

We provide a ready-made Compose file that runs Hub locally. Nothing to configure.

Open a terminal in an empty directory, download the file, and start the stack:

```
curl -fsSLO https://raw.githubusercontent.com/cryptomator/hub/refs/tags/2.0.0/deploy/compose/local/compose.yaml

docker compose up -d
```

Docker now pulls the images and starts the containers. Keycloak takes a minute or two to initialize on first start, so grab a coffee. Once Docker reports the `hub` container as started and healthy, you are good to go.

## Log In[​](#log-in "Direct link to Log In")

Open <http://localhost:8080> in your browser and log in with `admin` / `admin`.

note

Keycloak's admin console is available at <http://localhost:8180>, also with `admin` / `admin`. You don't need it for this tutorial, but it's where user federation and identity providers are configured later on. See [Identity Provider](/hub/admin-guide/keycloak/.md) for details.

## Start Using[​](#start-using "Direct link to Start Using")

Hub greets you with a short onboarding on your first login:

1. **Complete the admin profile.** Hub needs a name and email address for the admin account.
2. **Choose a license.** For a local test, the *free trial* is what you want. You can claim it as often as you like. There are further free options for perpetual use on production installations as well.
3. **Save your Account Key.** Hub generates an [Account Key](/hub/user-guide/your-account/.md#account-key) in your browser. It's what you use to link further devices (browsers and Cryptomator apps) to your account, so keep it somewhere safe.

That's it, you are in. Try [creating a vault](/hub/user-guide/vault-management/.md#create-a-vault), [adding a user](/hub/admin-guide/user-group-management/.md#create-user), or [unlocking the vault](/hub/user-guide/access-vault/.md) from the Cryptomator desktop app. The [User Guide](/hub/user-guide/quick-start/.md) and [Admin Guide](/hub/admin-guide/quick-start/.md) walk you through these tasks using complete worked examples.

## Clean Up[​](#clean-up "Direct link to Clean Up")

To stop Hub but keep your data:

```
docker compose stop
```

To remove everything, including the database:

```
docker compose down -v
```

## Going to Production[​](#going-to-production "Direct link to Going to Production")

When you are ready to run Hub for real, this section sequences the [Deployment Cookbook](/hub/self-hosting-guide/deployment/.md) and [Operations](/hub/self-hosting-guide/operations/.md) references into one path; how long it takes depends mostly on your infrastructure — plan for **an hour** plus DNS.

As a worked example, meet Alice: she liked the playground and now deploys Hub for the design agency Acme, a team of about 20 people.

tip

Not keen on running Hub yourself? We also offer Hub as a [managed service](https://cryptomator.org/hub/managed/?utm_source=docs.cryptomator.org\&utm_medium=referral\&utm_campaign=self-hosting-guide) with uptime guarantee and regular backups.

### Plan Your Deployment[​](#plan-deployment "Direct link to Plan Your Deployment")

Decide on these up front — they are hard to change later:

* Two public URLs, one for Hub and one for Keycloak, with DNS records created before deploying.
* TLS termination via a reverse proxy or ingress controller — Hub, Keycloak, and PostgreSQL must never be exposed directly.
* Whether to run the bundled Keycloak and PostgreSQL or connect existing instances.

The defaults are sized for small installations like Acme's; see [Sizing](/hub/self-hosting-guide/deployment/.md#sizing) for larger teams.

For more details, read [Before You Begin](/hub/self-hosting-guide/deployment/.md#before-you-begin) — including why the public URLs must be final before the first start.

### Choose a Recipe[​](#choose-a-recipe "Direct link to Choose a Recipe")

The [Deployment Cookbook](/hub/self-hosting-guide/deployment/.md#recipes) offers three recipes:

* [Docker Compose](/hub/self-hosting-guide/deployment/compose/.md) — a single Docker host behind a Traefik reverse proxy with Let's Encrypt. The simplest production setup.
* [Kubernetes](/hub/self-hosting-guide/deployment/kubernetes/.md) — the Helm chart via the Helm CLI, for teams that already operate a cluster.
* [Rancher](/hub/self-hosting-guide/deployment/rancher/.md) — the same Helm chart installed through the Rancher UI.

Acme has no Kubernetes cluster and 20 users fit comfortably on one virtual machine, so Alice picks Docker Compose. The rest of this guide follows that path.

### Deploy with Docker Compose[​](#deploy-with-docker-compose "Direct link to Deploy with Docker Compose")

Alice provisions a VM with Docker, points the two DNS records at it, and opens ports 80 and 443. She downloads the production Compose example, replaces the placeholders — hostnames, Let's Encrypt email, and freshly generated passwords and secrets — and starts the stack with `docker compose up -d`. Once all services are healthy, she signs in as `admin`, enters the license, and Hub is live at Acme's own domain.

For more details, read [Prerequisites](/hub/self-hosting-guide/deployment/compose/.md#compose-prerequisites), [Deploy](/hub/self-hosting-guide/deployment/compose/.md#compose-deploy), and [Configuration](/hub/self-hosting-guide/deployment/compose/.md#compose-configuration) — including which ports must never be published.

### Set Up Backups[​](#set-up-backups "Direct link to Set Up Backups")

All of Hub's state lives in PostgreSQL: vaults, encrypted keys, and the audit log in the `hub` database, users and credentials in the `keycloak` database. Alice schedules a nightly `pg_dumpall` via cron and moves the dumps off the VM. Then she does what most people skip: she [restores](/hub/self-hosting-guide/operations/.md#restore) one dump onto a scratch instance to confirm the backup actually works — a backup that has never been restored is a hope, not a backup.

For more details, read [Backup](/hub/self-hosting-guide/operations/.md#backup) and [Restore](/hub/self-hosting-guide/operations/.md#restore).

### Keep It Healthy[​](#keep-it-healthy "Direct link to Keep It Healthy")

Running Hub is low-maintenance; these are the recurring and occasional tasks:

* [Upgrading](/hub/self-hosting-guide/deployment/compose/.md#compose-upgrading) — back up first, bump the pinned image tags, `docker compose up -d`.
* [Verifying container images](/hub/self-hosting-guide/operations/.md#verifying-container-images) before deploying new versions.
* [Trusting a private certificate authority](/hub/self-hosting-guide/operations/.md#trusting-a-private-certificate-authority) if your organization uses one.
* [Changing the database password](/hub/self-hosting-guide/operations/.md#changing-the-database-password) as part of credential rotation.

## Next Steps[​](#next-steps "Direct link to Next Steps")

* Set up your organization — the [Admin Guide](/hub/admin-guide/.md) walks through users, groups, identity providers, and more.
* Bookmark [Operations](/hub/self-hosting-guide/operations/.md) as the reference for everything maintenance.
