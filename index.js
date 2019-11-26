const Service = require('@mesg/service')
const MESG = new Service()

MESG.listenTask({
  encrypt: require('./tasks/encrypt'),
  decrypt: require('./tasks/decrypt'),
  generate: require('./tasks/generate')
})
