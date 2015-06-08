
var axios = require('axios');

var getGame = (gameId, dispatcher) => {
  axios.get('http://localhost:8000/api/game/' + gameId, {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          dispatcher.dispatch('get-game', response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = getGame;
