---
title: Verifiable Commands
sidebar_position: 8
---

import ThemedImage from '@theme/ThemedImage';
import VerifiableFlowLight from './img/verifiable-command-flow-light.png';
import VerifiableFlowDark from './img/verifiable-command-flow-dark.png';
import VerifiableCommandTabLight from './img/verifiable-command-commands-tab-light.png';
import VerifiableCommandTabDark from './img/verifiable-command-commands-tab-dark.png';

Verifiable Commands are an advanced, cryptographically signed variant of a regular [command](../tributech_node/api_category/API_usage.md#commands): they build on top of a regular command by letting a device confirm the command really came from a trusted, authorized user before executing it.

:::info
Verifiable Commands can be **viewed** in the `Commands` tab of an agent in the Tributech Node UI, but **sending** them is currently only possible via the [REST API](../tributech_node/api_category/API_integration.md). To send one you also need access to the **private key** used to sign the command body.
:::

## Overview

A [command](../tributech_node/api_category/API_usage.md#commands) is trusted because it arrives through the authenticated Tributech Node API. A **Verifiable Command** adds a second, end-to-end layer of trust: the command is signed by the user and re-signed by the backend, so the receiving device can independently verify its authenticity. This guarantees that:

- the command originates from a trusted, notarized user,
- it was processed and forwarded by the Demeter backend, and
- the agent/device can verify the command's authenticity before executing it.

## How it works

Verifiable Commands use two layers of cryptographic verification:

1. **User → Backend:** the user signs the command body with their **private key** and sends it to the Demeter backend. The backend looks up the matching **public key** (via the `nodeKeyId`) and verifies the signature — if verification fails, the command is rejected.
2. **Backend → Device:** after verifying the user, the backend signs the command with its own key and forwards it to the agent/device. The device verifies this signature against the known backend public key and **executes the command only if it is valid**.

<ThemedImage
  alt="Verifiable Command Flow"
  sources={{ light: VerifiableFlowLight, dark: VerifiableFlowDark }}
/>

## Command structure

A Verifiable Command is sent to the REST API as a signed envelope around the command payload:

```json
{
  "nodeKeyId": "azureECDSA",
  "signature": "R75kThUmmrY2Xk_irT5XT_cdNbUNWSNd92IAXpI9UPAs85emJ5mzk66k1CnZEkjkMycXEFMb5jPqe3GYMy3IgQ",
  "signatureTimestamp": "2026-03-11T08:39:54.1680000+00:00",
  "commandPayload": {
    "commandName": "TriggerAnomaly",
    "commandBody": {
      "AnomalyFactor": 2,
      "AnomalyType": 1
    },
    "Timeout": "00:00:30"
  }
}
```

| Field | Description |
| --- | --- |
| `nodeKeyId` | Identifier of the key used to sign the command; the backend uses it to look up your registered public key |
| `signature` | Signature over the command, created with your private key |
| `signatureTimestamp` | UTC timestamp of when the signature was created |
| `commandPayload` | The command itself — same structure as a [command](../tributech_node/api_category/API_usage.md#commands): `commandName`, an inline `commandBody`, and a `Timeout` |

## Signing keys

To send a Verifiable Command you need a **key pair**: the **private key** signs the command body and must never be shared, while the **public key** is registered in the Demeter backend's key storage so it can verify your signature. The `nodeKeyId` in the command must match your registered public key.

Supported key types:

- `EC_ES256`
- `RSA_PSS_PS256`
- `RSA_PKCS1_RS256`

A key pair can be generated with OpenSSL, e.g. ECDSA (ES256):

```bash
# Private key (keep secret)
openssl ecparam -name prime256v1 -genkey -noout -out private_key.pem
# Public key (registered in the backend)
openssl ec -in private_key.pem -pubout -out public_key.pem
```

:::note
Registering the public key in the backend's key storage (Azure Key Vault, AWS KMS or on-premise) and mapping it to a `nodeKeyId` is an administrator/infrastructure task. Contact your Tributech administrator to have your public key registered.
:::

## Viewing commands

Once sent, a Verifiable Command and its execution status can be followed in the `Commands` tab of the agent in the Tributech Node UI.

<ThemedImage
  alt="Verifiable Commands in the agent Commands tab"
  sources={{ light: VerifiableCommandTabLight, dark: VerifiableCommandTabDark }}
/>
