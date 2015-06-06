
var axios = require('axios');

var upvoteGame = (gameId, onPage, dispatcher) => {
  dispatcher.dispatch('upvote-game', {
    gameId: gameId,
    onPage: onPage
  });
}

module.exports = upvoteGame;
