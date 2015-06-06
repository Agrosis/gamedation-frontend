
var axios = require('axios');

var getSubmitted = (dispatcher) => {
  axios.get('http://localhost:8000/api/games/submissions')
       .then((response) => {
          dispatcher.dispatch('get-games', response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = getSubmitted;
