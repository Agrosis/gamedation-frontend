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

  getNextGame: function(gameId) {
    var i = this.games.indexOf(this.games.filter(g => g.id === gameId)[0]);

    if(i == this.games.length - 1) {
      return this.games[i];
    } else if(i != -1) {
      return this.games[i + 1];
    }
  },

  getPreviousGame: function(gameId) {
    var i = this.games.indexOf(this.games.filter(g => g.id === gameId)[0]);

    if(i == 0) {
      return this.games[i];
    } else if(i != -1) {
      return this.games[i - 1];
    }
  },

  handlers: {
    'get-games': function(payload) {
      this.games = payload.data.games;

      this.emitChange();
    },

    'upvote-game': function(payload) {
      console.log(payload);

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
    },

    'clear-games': function(payload) {
      this.games = [];

      this.emitChange();
    }
  }

});

module.exports = GamesStore;