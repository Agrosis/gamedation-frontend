var createStore = require('dispatchr/addons/createStore');

var UserStore = createStore({

  storeName: 'UserStore',

  initialize: function() {
    this.user = "guest";
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
      if(payload.status === 200) {
        this.user = payload.data.user;
      }

      this.emitChange();
    },

    'log-in': function(payload) {
      if(payload.status === 200) {
        localStorage.setItem("token", payload.data.token);
        this.user = payload.data.user;

        this.emitChange();
      }

    },

    'sign-up': function(payload) {
      if(payload.status === 200) {
        localStorage.setItem("token", payload.data.token);
        this.user = payload.data.user;

        this.emitChange();
      }
    },

    'sign-out': function(payload) {
      localStorage.removeItem("token");
      this.user = "guest";

      this.emitChange();
    }
  }

});

module.exports = UserStore;