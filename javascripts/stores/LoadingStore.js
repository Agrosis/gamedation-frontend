var createStore = require('dispatchr/addons/createStore');

var LoadingStore = createStore({

  storeName: 'LoadingStore',

  initialize: function() {
    this.loading = false;
  },

  getState: function() {
    return {
      loading: this.loading
    };
  },

  dehydrate: function() {
    return this.getState();
  },

  rehydrate: function(state) {
    this.loading = state.loading;
  },

  handlers: {
    'start-loading': function(payload) {
      this.loading = true;

      this.emitChange();
    },

    'stop-loading': function(payload) {
      this.loading = false;

      this.emitChange();
    }
  }

});

module.exports = LoadingStore;