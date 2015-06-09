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
    this.comments = [];
  },

  getState: function() {
    return {
      game: this.game,
      upvoters: this.upvoters,
      comments: this.comments
    };
  },

  dehydrate: function() {
    return this.getState();
  },

  rehydrate: function(state) {
    this.game = state.game;
    this.upvoters = state.upvoters;
    this.comments = state.comments;
  },

  handlers: {
    'get-game': function(payload) {
      this.game = payload.data.game;
      this.upvoters = payload.data.upvoters;
      this.comments = payload.data.comments;

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
    },

    'game-comment': function(payload) {
      if(payload.status == 200) {
        this.comments.unshift(payload.data.comment);
      }

      this.emitChange();
    }

  }

});

module.exports = GameStore;
