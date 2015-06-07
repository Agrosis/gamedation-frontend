
var axios = require('axios');

var signUp = (data, dispatcher) => {
  axios.put('http://localhost:8000/api/user/signup', data)
       .then((response) => {
          dispatcher.dispatch('sign-up', response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = signUp;
