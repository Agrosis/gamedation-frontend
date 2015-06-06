
var gameName = function(name) {
  return name.replace(/[^a-zA-Z0-9 -]/g, "").replace(/\s+/g, '-').toLowerCase();
}

module.exports = gameName;
