
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var getDate = function(time) {
  var d = new Date(time);

  return monthNames[d.getMonth()] + " " + d.getDate();
}

module.exports = getDate;
