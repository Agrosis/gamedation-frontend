var GameStore = require('./stores/GameStore');
var GamesStore = require('./stores/GamesStore');
var UserStore = require('./stores/UserStore');

var dispatcher = require('dispatchr').createDispatcher({
  stores: [
    GameStore,
    GamesStore,
    UserStore
  ]
});

var contextOptions = {};
var dispatcherContext = dispatcher.createContext(contextOptions);

module.exports = dispatcherContext;
