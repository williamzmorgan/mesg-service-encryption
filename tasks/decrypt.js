const crypto = require('crypto')

module.exports = inputs => {
  const buf = Buffer.from(inputs.encryptedData, 'base64')
  return {
    data: crypto.privateDecrypt({
      key: inputs.privateKey,
      passphrase: inputs.passphrase
    }, buf).toString()
  }
}
