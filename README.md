# Encrypt & Decrypt



# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  
  - [Tasks](#Tasks)
    - [decrypt](#decrypt)
    - [encrypt](#encrypt)
    - [generate](#generate)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

To deploy this service, run the following command:
```bash
mesg-core service deploy https://github.com/antho1404/mesg-service-encryption
```

# Definitions


# Tasks

## decrypt

Task key: `decrypt`



### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **encryptedData** | `encryptedData` | `String` |  |
| **passphrase** | `passphrase` | `String` |  |
| **privateKey** | `privateKey` | `String` |  |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `String` |  |


## encrypt

Task key: `encrypt`



### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `String` |  |
| **publicKey** | `publicKey` | `String` |  |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **encryptedData** | `encryptedData` | `String` |  |


## generate

Task key: `generate`



### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **passphrase** | `passphrase` | `String` |  |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **privateKey** | `privateKey` | `String` |  |
| **publicKey** | `publicKey` | `String` |  |


