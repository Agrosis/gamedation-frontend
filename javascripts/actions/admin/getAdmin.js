
var axios = require('axios');

var getAdmin = (callback) => {
  axios.get('http://localhost:8000/api/admin/data', {headers: {'Authorization': localStorage.getItem("token")}})
       .then((response) => {
          callback(response.data)
       })
       .then((error) => {
          if(error) console.error(error);
       })
}

module.exports = getAdmin;
