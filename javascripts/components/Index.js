
var React = require('react');
var DocumentTitle = require('react-document-title');

var getGames = require('../actions/getGames');
var clearGames = require('../actions/clearGames');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var assign = require('object-assign');

var If = require('./helpers/If');
var GameList = require('./GameList');

var StoreListener = require('./mixins/StoreListener');
var GamesStore = require('../stores/GamesStore');

var getDate = require('../actions/getDate');

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
    var d = getDate(new Date().getTime() - 86400000 * 2).toLowerCase();

    return (
      <If test={this.state.games.length != 0}>
        <div>
          <div className="middle-content">
            <GameList games={this.state.games[0]} name="today's games"/>
            <GameList games={this.state.games[1]} name="yesterday's games"/>
            <GameList games={this.state.games[2]} name={d + " games"}/>
          </div>

          <DocumentTitle title='Gamedation'>
            <RouteHandler/>
          </DocumentTitle>
        </div>
      </If>
    );
  }

});

module.exports = Index;
