var GameStore = require('./stores/GameStore');
var GamesStore = require('./stores/GamesStore');

var dispatcher = require('dispatchr').createDispatcher({
  stores: [
    GameStore,
    GamesStore
  ]
});

var contextOptions = {};
var dispatcherContext = dispatcher.createContext(contextOptions);

module.exports = dispatcherContext;
