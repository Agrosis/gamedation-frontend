
var axios = require('axios');

var processLink = (link, callback) => {
  axios.get('http://localhost:8000/api/link?url=' + encodeURIComponent(link), {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          callback(response.data, null);
       })
       .then((error) => {
          callback(null, error);
       })
}

module.exports = processLink;
