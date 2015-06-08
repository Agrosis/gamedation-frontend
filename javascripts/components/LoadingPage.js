var React = require('react');

var If = require('./helpers/If');
var assign = require('object-assign');

var StoreListener = require('./mixins/StoreListener');
var LoadingStore = require('../stores/LoadingStore');

var LoadingPage = React.createClass({
  mixins: [StoreListener],

  statics: {
    storeListeners: [LoadingStore]
  },

  getInitialState: function() {
    return assign(window.dispatcher.getStore(LoadingStore).getState());
  },

  onChange: function() {
    this.setState(assign(window.dispatcher.getStore(LoadingStore).getState()));
  },

  render: function(){
    return (
      <If test={this.state.loading}>
        <div className="loading-overlay">
          <img src="http://i.imgur.com/GQrfMnU.gif"/>
        </div>
      </If>
    );
  }

});

module.exports = LoadingPage;