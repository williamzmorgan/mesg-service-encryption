const crypto = require('crypto')

module.exports = inputs => {
  return {
    encryptedData: crypto.publicEncrypt(
      inputs.publicKey,
      Buffer.from(inputs.data)
    ).toString('base64')
  }
}
