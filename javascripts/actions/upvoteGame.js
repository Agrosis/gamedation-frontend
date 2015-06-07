
var axios = require('axios');

var upvoteGame = (gameId, onPage, dispatcher) => {
  axios.post('http://localhost:8000/api/game/upvote/' + gameId, {}, {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          dispatcher.dispatch('upvote-game', {
            gameId: gameId,
            data: response.data,
            onPage: onPage
          });

          callback(response.data);
       })
       .then((error) => {
          if(error) console.log(error);
       })
}

module.exports = upvoteGame;
