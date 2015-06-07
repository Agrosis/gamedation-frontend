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
      this.user = payload.data.user;

      this.emitChange();
    },

    'log-in': function(payload) {
      localStorage.setItem("token", payload.data.token);

      this.emitChange();
    },

    'sign-up': function(payload) {
      localStorage.setItem("token", payload.data.token);

      this.emitChange();
    },

    'sign-out': function(payload) {
      localStorage.removeItem("token");

      this.emitChange();
    }
  }

});

module.exports = UserStore;