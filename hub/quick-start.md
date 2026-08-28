# Quick Start

Want to see Cryptomator Hub in action before rolling it out to your team? This guide gets a test instance running on your own machine in about **20 minutes**. No domain, no TLS certificates, no reverse proxy.

What you end up with is a playground, not a production system. It only listens on `localhost`, uses plain HTTP, and comes with default passwords. When you are ready for the real thing, head over to the [Production Deployment](/hub/deployment/.md).

tip

Not keen on running Hub yourself at all? We also offer Hub as a [managed service](https://cryptomator.org/for-teams/).

## Before You Start[​](#before-you-start "Direct link to Before You Start")

You need:

* A machine with [Docker](https://docs.docker.com/get-docker/) installed, including Docker Compose (`docker compose version` should print a version number).
* Ports `8080` and `8180` free on that machine.
* About 1 GB of free RAM for the three containers (Hub, Keycloak, and Postgres).

## Start Hub[​](#start-hub "Direct link to Start Hub")

We provide a ready-made Compose file that runs Hub on `http://localhost:8080` and Keycloak on `http://localhost:8180`, with an admin account `admin` / `admin`. Nothing to configure.

Open a terminal in an empty directory, download the file, and start the stack:

```
curl -fsSLO https://raw.githubusercontent.com/cryptomator/hub/develop/deploy/compose/local/compose.yaml

docker compose up -d
```

Docker now pulls the images and starts the containers. Keycloak takes a minute or two to initialize on first start, so grab a coffee. You can watch the progress with:

```
docker compose ps
```

Once all services report `healthy`, you are good to go.

## Log In[​](#log-in "Direct link to Log In")

Open <http://localhost:8080> in your browser and log in with `admin` / `admin`.

Two things happen on your first login:

1. Keycloak asks you to choose a new password for the admin account.
2. Hub walks you through the [account setup](/hub/your-account/.md#account-setup) and shows you your *Account Key*. Save it somewhere safe, then finish the setup.

That's it, you are in. Try [creating a vault](/hub/vault-management/.md#create-a-vault), [adding a user](/hub/user-group-management/.md#create-user), or [unlocking the vault](/hub/access-vault/.md) from the Cryptomator desktop app with `http://localhost:8080` as the Hub address.

note

Keycloak's admin console is available at <http://localhost:8180>, also with `admin` / `admin`. You don't need it for this tutorial, but it's where user federation and identity providers are configured later on. See [Keycloak](/hub/keycloak/.md) for details.

## Clean Up[​](#clean-up "Direct link to Clean Up")

To stop Hub but keep your data:

```
docker compose stop
```

To remove everything, including the database:

```
docker compose down -v
```

## Next Steps[​](#next-steps "Direct link to Next Steps")

Liked what you saw? Deploying Hub for your team requires a public address, TLS, and a plan for backups. The [Production Deployment](/hub/deployment/.md) guide covers all of that.
