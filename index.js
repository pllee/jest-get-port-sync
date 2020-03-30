const getPortSync = require('get-port-sync');

exports.getFreePort = () => getPortSync();
