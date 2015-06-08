
var axios = require('axios');

var loading = (isLoading, dispatcher) => {
  if(isLoading) {
    dispatcher.dispatch('start-loading');
  } else {
    dispatcher.dispatch('stop-loading');
  }
}

module.exports = loading;
