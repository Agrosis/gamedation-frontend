
var axios = require('axios');

var getGames = (dispatcher) => {
  axios.get('http://localhost:8000/api/games')
       .then((response) => {
          dispatcher.dispatch('get-games', response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = getGames;
