
var React = require('react');
var DocumentTitle = require('react-document-title');

var getGames = require('../actions/getGames');
var clearGames = require('../actions/clearGames');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var assign = require('object-assign');

var GameItem = require('./GameItem');
var MoreGames = require('./MoreGames');

var StoreListener = require('./mixins/StoreListener');
var GamesStore = require('../stores/GamesStore');

var Index = React.createClass({
  mixins: [StoreListener],

  statics: {
    storeListeners: [GamesStore]
  },

  getInitialState: function() {
    clearGames(window.dispatcher);
    return assign(window.dispatcher.getStore(GamesStore).getState());
  },

  onChange: function() {
    this.setState(assign(window.dispatcher.getStore(GamesStore).getState()));
  },

  componentDidMount: function() {
    getGames(window.dispatcher);
  },

  render: function() {
    var show = this.state.games.slice(0, 14);
    var more = this.state.games.slice(14, this.state.games.length);

    var games = show.map((g, i) => {
      var gamejolt = g.site === "gamejolt";
      var steam = g.site === "steam";

      return (
        <GameItem key={i} id={g.id} platforms={g.platforms} upvoted={g.upvoted} gamejolt={gamejolt} steam={steam} name={g.name} description={g.description} points={g.points}/>
      );
    });

    return (
      <div>
        <div className="middle-content">
          <div className="game-items">
            <div className="game-items-day">TODAY'S GAMES</div>
            {games}
            <MoreGames games={more}/>

            <div className="game-items-day">YESTERDAY'S GAMES</div>
            {games}
            <MoreGames games={more}/>

            <div className="game-items-day">GAMES OF JUNE 4</div>
            {games}
            <MoreGames games={more}/>
          </div>
        </div>

        <DocumentTitle title='Gamedation'>
          <RouteHandler/>
        </DocumentTitle>
      </div>
    );
  }

});

module.exports = Index;
