
var axios = require('axios');

var submitGame = (data, callback) => {
  axios.put('http://localhost:8000/api/game/submit', data)
       .then((response) => {
          callback(response.data);
       })
       .then((error) => {
          if(error) console.log(error);
       })
}

module.exports = submitGame;
