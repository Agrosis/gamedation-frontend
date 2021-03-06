
var axios = require('axios');

var logIn = (data, dispatcher, callback) => {
  axios.post(window.serverUrl + '/api/user/login', data)
       .then((response) => {
          dispatcher.dispatch('log-in', response.data);
          callback(response.data);
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = logIn;
