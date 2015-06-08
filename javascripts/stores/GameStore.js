var createStore = require('dispatchr/addons/createStore');

var GameStore = createStore({

  storeName: 'GameStore',

  initialize: function() {
    this.game = {
      platforms: {
        windows: false,
        mac: false,
        linux: false,
        browser: false,
        iOS: false,
        android: false
      },
      images: []
    };
    this.upvoters = [];
  },

  getState: function() {
    return {
      game: this.game,
      upvoters: this.upvoters
    };
  },

  dehydrate: function() {
    return this.getState();
  },

  rehydrate: function(state) {
    this.game = state.game;
    this.upvoters = state.upvoters;
  },

  handlers: {
    'get-game': function(payload) {
      this.game = payload.data.game;
      this.upvoters = payload.data.upvoters;

      this.emitChange();
    },

    'upvote-game': function(payload) {
      if(payload.onPage) {
        if(this.game.upvoted) {
          this.game.upvoted = false;
          this.game.points -= 1;
        } else {
          this.game.upvoted = true;
          this.game.points += 1;
        }
          
        this.emitChange();
      }
    }
  }

});

module.exports = GameStore;