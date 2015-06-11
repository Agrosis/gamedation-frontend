
var axios = require('axios');

var getGames = (dispatcher) => {
  dispatcher.dispatch('start-loading');
  dispatcher.dispatch('clear-games');
  axios.get(window.serverUrl + '/api/games', {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          dispatcher.dispatch('stop-loading');
          dispatcher.dispatch('get-games', response.data);
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = getGames;
