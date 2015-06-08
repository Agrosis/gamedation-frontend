
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
    return (
      <If test={this.state.games.length != 0}>
        <div>
          <div className="middle-content">
            <GameList games={this.state.games} name="today's games"/>
            <GameList games={this.state.games} name="yesterday's games"/>
            <GameList games={this.state.games} name="games of june 5"/>
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
