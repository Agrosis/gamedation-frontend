
var axios = require('axios');

var addCurator = (username, callback) => {
  axios.put('http://localhost:8000/api/admin/curator/' + username, {}, {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          callback(response.data);
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = addCurator;
