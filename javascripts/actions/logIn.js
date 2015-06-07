
var axios = require('axios');

var logIn = (data, dispatcher) => {
  axios.post('http://localhost:8000/api/user/login', data)
       .then((response) => {
          dispatcher.dispatch('log-in', response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = logIn;
