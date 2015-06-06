var createStore = require('dispatchr/addons/createStore');

var GamesStore = createStore({

  storeName: 'GamesStore',

  initialize: function() {
    this.games = [];
  },

  getState: function() {
    return {
      games: this.games
    };
  },

  dehydrate: function() {
    return this.getState();
  },

  rehydrate: function(state) {
    this.games = state.games;
  },

  handlers: {
    'get-games': function(payload) {
      this.games = payload.data.games;

      this.emitChange();
    },

    'upvote-game': function(payload) {
      var i = this.games.indexOf(this.games.filter(g => g.id === payload.gameId)[0]);

      if(i != -1) {
        if(this.games[i].upvoted) {
          this.games[i].upvoted = false;
          this.games[i].points -= 1;
        } else {
          this.games[i].upvoted = true;
          this.games[i].points += 1;
        }
        
        this.emitChange();
      }
    }
  }

});

module.exports = GamesStore;