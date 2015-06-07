
var axios = require('axios');

var signOut = (dispatcher) => {
  axios.post('http://localhost:8000/api/user/signout', {})
       .then((response) => {
          dispatcher.dispatch('sign-out', response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = signOut;
