# Encrypt &amp; Decrypt (ID: encrypt)



## Contents

- [Installation](#Installation)
  - [MESG Engine](#MESG-Core)
  - [Deploy the Service](#Service)
- [Definitions](#Definitions)
  - [Tasks](#Tasks)
    - [encrypt](#encrypt)
    - [decrypt](#decrypt)
    - [generate](#generate)

## Installation

### MESG Engine

This service requires [MESG Engine](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Engine by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/encrypt) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

## Definitions


### Tasks

<h4 id="encrypt">encrypt</h4>

Task key: `encrypt`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **publicKey** | `publicKey` | `String` |  |
| **data** | `data` | `String` |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **encryptedData** | `encryptedData` | `String` |  |
<h4 id="decrypt">decrypt</h4>

Task key: `decrypt`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **privateKey** | `privateKey` | `String` |  |
| **passphrase** | `passphrase` | `String` |  |
| **encryptedData** | `encryptedData` | `String` |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `String` |  |
<h4 id="generate">generate</h4>

Task key: `generate`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **passphrase** | `passphrase` | `String` |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **publicKey** | `publicKey` | `String` |  |
| **privateKey** | `privateKey` | `String` |  |

