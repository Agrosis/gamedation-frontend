
var axios = require('axios');

var getAdmin = (callback) => {
  axios.get(window.serverUrl + '/api/admin/data', {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          callback(response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = getAdmin;
