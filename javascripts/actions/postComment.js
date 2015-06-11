

var axios = require('axios');

var postComment = (data, gameId, parentId, dispatcher, callback) => {
  axios.put(window.serverUrl + '/api/game/comment/' + gameId + '/' + parentId, data, {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          dispatcher.dispatch('game-comment', response.data);
          callback(response.data);
       })
       .then((error) => {
          if(error) console.log(error);
       })
}

module.exports = postComment;

