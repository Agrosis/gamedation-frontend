
var axios = require('axios');

var UserStore = require('../stores/UserStore');

var upvoteGame = (gameId, onPage, dispatcher) => {
  if(dispatcher.getStore(UserStore).getState().user != "guest") {
    axios.post(window.serverUrl + '/api/game/upvote/' + gameId, {}, {headers: {'Authorization': localStorage.getItem("token")}})
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
}

module.exports = upvoteGame;
