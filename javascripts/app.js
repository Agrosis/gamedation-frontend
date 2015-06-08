var GameStore = require('./stores/GameStore');
var GamesStore = require('./stores/GamesStore');
var LoadingStore = require('./stores/LoadingStore');
var UserStore = require('./stores/UserStore');

var dispatcher = require('dispatchr').createDispatcher({
  stores: [
    GameStore,
    GamesStore,
    LoadingStore,
    UserStore
  ]
});

var contextOptions = {};
var dispatcherContext = dispatcher.createContext(contextOptions);

module.exports = dispatcherContext;
