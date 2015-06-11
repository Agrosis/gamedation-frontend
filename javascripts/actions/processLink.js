
var axios = require('axios');

var processLink = (link, callback) => {
  axios.get(window.serverUrl + '/api/link?url=' + encodeURIComponent(link), {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          callback(response.data);
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = processLink;
