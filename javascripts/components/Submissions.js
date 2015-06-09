
var React = require('react');
var DocumentTitle = require('react-document-title');

var getSubmitted = require('../actions/getSubmitted');
var clearGames = require('../actions/clearGames');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var assign = require('object-assign');

var If = require('./helpers/If');
var GameList = require('./GameList');

var StoreListener = require('./mixins/StoreListener');
var GamesStore = require('../stores/GamesStore');
var UserStore = require('../stores/UserStore');

var Submissions = React.createClass({
  mixins: [StoreListener],

  statics: {
    storeListeners: [GamesStore],

    willTransitionTo(transition, params, query, callback) {
      var user = window.dispatcher.getStore(UserStore).getState().user;
      if(user != "guest" && user.status >= 2) {
        callback();
      } else {
        transition.redirect('index');
        callback();
      }
    }
  },

  getInitialState: function() {
    clearGames(window.dispatcher);
    return assign(window.dispatcher.getStore(GamesStore).getState());
  },

  onChange: function() {
    this.setState(assign(window.dispatcher.getStore(GamesStore).getState()));
  },

  componentDidMount: function() {
    getSubmitted(window.dispatcher);
  },

  render: function() {
    return (
      <If test={this.state.games.length != 0}>
        <div>
          <div className="middle-content">
            <GameList games={this.state.games} all={true} name="latest submissions"/>
          </div>

          <DocumentTitle title='Submissions | Gamedation'>
            <RouteHandler/>
          </DocumentTitle>
        </div>
      </If>
    );
  }

});

module.exports = Submissions;
