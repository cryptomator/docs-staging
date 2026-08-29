# Rancher

Rancher installs the same Helm chart as the [Kubernetes](/hub/deployment/kubernetes/.md) path, but through a guided form instead of the Helm CLI. The chart ships a `questions.yaml`, so the form asks only for what you have to decide; everything else keeps its default.

## Prerequisites[​](#rancher-prerequisites "Direct link to Prerequisites")

* Rancher 2.9 or newer (required for OCI chart repositories).
* Traefik or Nginx as ingress controller and a way to obtain TLS certificates.
* A default StorageClass

## Install[​](#rancher-install "Direct link to Install")

1. Add the chart repository once: go to *Apps → Repositories → Create*, choose the OCI type, and enter `oci://ghcr.io/cryptomator/charts`.
2. Go to *Apps → Charts*, select *Cryptomator Hub*, and click *Install*.
3. Click *Install* and wait until all workloads are active. Keycloak needs a minute on first start to import Hub's realm.

Advanced Configuration

Everything the form does not ask for is available in the *Edit YAML* view, see the [reference table](https://github.com/cryptomator/hub/tree/2.0.0/deploy/helm/prod).

Generated passwords appear under *Storage → Secrets* in the release namespace: `hub-secrets-hub` holds the Hub admin password, `hub-secrets-kc` the Keycloak bootstrap admin password, `hub-secrets-pg` the database passwords.

Open the Hub URL, sign in as `admin`, set a new password, and enter your license.

## Upgrading[​](#rancher-upgrading "Direct link to Upgrading")

[Back up the database](/hub/operations/.md#backup) first. Then go to *Apps → Installed Apps*, select the release, click *Upgrade*, and choose the new chart version. Your values are kept; generated passwords stay stable across upgrades.
