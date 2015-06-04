var CreateGameStore = require('./stores/CreateGameStore');

var dispatcher = require('dispatchr').createDispatcher({
  stores: [
    CreateGameStore
  ]
});

var contextOptions = {};
var dispatcherContext = dispatcher.createContext(contextOptions);

module.exports = dispatcherContext;
