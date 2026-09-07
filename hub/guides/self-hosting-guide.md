# Self-Hosting Guide

This guide takes you from trying Cryptomator Hub to running it in production for your organization. It sequences the existing [Deployment Cookbook](/hub/deployment/.md) and [Operations](/hub/operations/.md) references into one path; how long it takes depends mostly on your infrastructure — plan for **an hour** plus DNS.

As a worked example, meet Alice: she liked the [Quick Start](/hub/quick-start/.md) playground and now deploys Hub for the design agency Acme, a team of about 20 people.

tip

Not keen on running Hub yourself? We also offer Hub as a [managed service](https://cryptomator.org/hub/managed/?utm_source=docs.cryptomator.org\&utm_medium=referral\&utm_campaign=self-hosting-guide) with uptime guarantee and regular backups.

## Before You Start[​](#before-you-start "Direct link to Before You Start")

Decide on these up front — they are hard to change later:

* Two public URLs, one for Hub and one for Keycloak, with DNS records created before deploying.
* TLS termination via a reverse proxy or ingress controller — Hub, Keycloak, and PostgreSQL must never be exposed directly.
* Whether to run the bundled Keycloak and PostgreSQL or connect existing instances.

The defaults are sized for small installations like Acme's; see [Sizing](/hub/deployment/.md#sizing) for larger teams.

For more details, read [Before You Begin](/hub/deployment/.md#before-you-begin) — including why the public URLs must be final before the first start.

## Choose a Recipe[​](#choose-a-recipe "Direct link to Choose a Recipe")

The [Deployment Cookbook](/hub/deployment/.md#recipes) offers three recipes:

* [Docker Compose](/hub/deployment/compose/.md) — a single Docker host behind a Traefik reverse proxy with Let's Encrypt. The simplest production setup.
* [Kubernetes](/hub/deployment/kubernetes/.md) — the Helm chart via the Helm CLI, for teams that already operate a cluster.
* [Rancher](/hub/deployment/rancher/.md) — the same Helm chart installed through the Rancher UI.

Acme has no Kubernetes cluster and 20 users fit comfortably on one virtual machine, so Alice picks Docker Compose. The rest of this guide follows that path.

## Deploy with Docker Compose[​](#deploy-with-docker-compose "Direct link to Deploy with Docker Compose")

Alice provisions a VM with Docker, points the two DNS records at it, and opens ports 80 and 443. She downloads the production Compose example, replaces the placeholders — hostnames, Let's Encrypt email, and freshly generated passwords and secrets — and starts the stack with `docker compose up -d`. Once all services are healthy, she signs in as `admin`, enters the license, and Hub is live at Acme's own domain.

For more details, read [Prerequisites](/hub/deployment/compose/.md#compose-prerequisites), [Deploy](/hub/deployment/compose/.md#compose-deploy), and [Configuration](/hub/deployment/compose/.md#compose-configuration) — including which ports must never be published.

## Set Up Backups[​](#set-up-backups "Direct link to Set Up Backups")

All of Hub's state lives in PostgreSQL: vaults, encrypted keys, and the audit log in the `hub` database, users and credentials in the `keycloak` database. Alice schedules a nightly `pg_dumpall` via cron and moves the dumps off the VM. Then she does what most people skip: she [restores](/hub/operations/.md#restore) one dump onto a scratch instance to confirm the backup actually works — a backup that has never been restored is a hope, not a backup.

For more details, read [Backup](/hub/operations/.md#backup) and [Restore](/hub/operations/.md#restore).

## Keep It Healthy[​](#keep-it-healthy "Direct link to Keep It Healthy")

Running Hub is low-maintenance; these are the recurring and occasional tasks:

* [Upgrading](/hub/deployment/compose/.md#compose-upgrading) — back up first, bump the pinned image tags, `docker compose up -d`.
* [Verifying container images](/hub/operations/.md#verifying-container-images) before deploying new versions.
* [Trusting a private certificate authority](/hub/operations/.md#trusting-a-private-certificate-authority) if your organization uses one.
* [Changing the database password](/hub/operations/.md#changing-the-database-password) as part of credential rotation.

## Next Steps[​](#next-steps "Direct link to Next Steps")

* The instance is running, but empty — continue with the [Admin Guide](/hub/guides/admin-guide/.md) to add users, groups, and your identity provider.
* Bookmark [Operations](/hub/operations/.md) as the reference for everything maintenance.
