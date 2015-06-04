var createStore = require('dispatchr/addons/createStore');

var CreateGameStore = createStore({

  storeName: 'CreateGameStore',

  initialize: function() {
  },

  getState: function() {
    return {
    };
  },

  dehydrate: function() {
    return this.getState();
  },

  rehydrate: function(state) {
  },

  handlers: {
  }

});

module.exports = CreateGameStore;