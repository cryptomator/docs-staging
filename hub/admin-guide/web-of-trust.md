# Web of Trust

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

For how a user verifies another user's identity, see [Web of Trust](/hub/user-guide/vault-management/.md#web-of-trust) in the User Guide.

note

If a user resets their account, their [User Key Pair](/security/hub/.md#user-key-pair) is regenerated, invalidating all previously established trust relationships regarding this user.<br /><!-- -->Additionally, any existing trust chains that included the user will be broken, requiring re-verification to restore trust.
