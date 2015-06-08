
var axios = require('axios');

var signOut = (dispatcher) => {
  dispatcher.dispatch('sign-out');
}

module.exports = signOut;
