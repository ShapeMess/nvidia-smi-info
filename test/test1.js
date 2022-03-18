const nSmi = require('../build');
nSmi.getDeviceInfo().then(console.log).catch(console.error);