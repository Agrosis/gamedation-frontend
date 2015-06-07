var createStore = require('dispatchr/addons/createStore');

var UserStore = createStore({

  storeName: 'UserStore',

  initialize: function() {
    this.user = {};
  },

  getState: function() {
    return {
      user: this.user
    };
  },

  dehydrate: function() {
    return this.getState();
  },

  rehydrate: function(state) {
    this.user = state.user;
  },

  handlers: {
    'get-user': function(payload) {

      this.emitChange();
    },

    'log-in': function(payload) {

      this.emitChange();
    },

    'sign-up': function(payload) {

      this.emitChange();
    },

    'sign-out': function(payload) {

      this.emitChange();
    }
  }

});

module.exports = UserStore;