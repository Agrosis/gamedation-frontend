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

  getGameDay: function(gameId) {
    return this.games.indexOf(this.games.filter(d => d.filter(g => g.id === gameId)[0])[0]);
  },

  getNextGame: function(gameId) {
    var day = this.games[this.getGameDay(gameId)]
    var i = day.indexOf(day.filter(g => g.id === gameId)[0]);

    if(i == day.length - 1) {
      return day[i];
    } else if(i != -1) {
      return day[i + 1];
    }
  },

  getPreviousGame: function(gameId) {
    var day = this.games[this.getGameDay(gameId)];
    var i = day.indexOf(day.filter(g => g.id === gameId)[0]);

    if(i == 0) {
      return day[i];
    } else if(i != -1) {
      return day[i - 1];
    }
  },

  handlers: {
    'get-games': function(payload) {
      this.games = payload.data.games.map(d => d.sort((a, b) => {
        return b.points - a.points;
      }));

      this.emitChange();
    },

    'get-submissions': function(payload) {
      this.games = payload.data.games;

      this.emitChange();
    },

    'sign-out': function(payload) {
      var n = this.games.map(g => g.map(d => {
        d.upvoted = false;
        return d;
      }));

      this.games = n;

      this.emitChange();
    },

    'upvote-game': function(payload) {
      var d = this.getGameDay(payload.gameId);
      var day = this.games[d];
      var i = day.indexOf(day.filter(g => g.id === payload.gameId)[0]);

      if(i != -1) {
        if(day[i].upvoted) {
          this.games[d][i].upvoted = false;
          this.games[d][i].points -= 1;
        } else {
          this.games[d][i].upvoted = true;
          this.games[d][i].points += 1;
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