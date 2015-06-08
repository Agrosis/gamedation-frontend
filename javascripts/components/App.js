
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./Header');
var Footer = require('./Footer');
var LoadingPage = require('./LoadingPage');

var UserStore = require('../stores/UserStore');
var StoreListener = require('./mixins/StoreListener');

var getUser = require('../actions/getUser');
var assign = require('object-assign');

var App = React.createClass({
  mixins: [StoreListener],

  statics: {
    storeListeners: [UserStore]
  },

  getInitialState: function() {
    return assign(window.dispatcher.getStore(UserStore).getState());
  },

  onChange: function() {
    this.setState(assign(window.dispatcher.getStore(UserStore).getState()));
  },

  componentDidMount: function() {
    getUser(window.dispatcher);
  },

  render: function(){
    return (
      <div className="content">
        <LoadingPage/>
        <Header user={this.state.user}/>
        <div className="route-content">
          <RouteHandler/>
        </div>
      </div>
    );
  }

});

module.exports = App;
