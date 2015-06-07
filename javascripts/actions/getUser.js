
var axios = require('axios');

var getUser = (dispatcher) => {
  axios.get('http://localhost:8000/api/user/get', {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          dispatcher.dispatch('get-user', response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = getUser;
