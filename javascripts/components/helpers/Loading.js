var React = require('react');

var Loading = React.createClass({
  propTypes: {
    loaded: React.PropTypes.bool.isRequired
  },

  render: function(){
    var loading = (
      <div className="loading">
        <img src="http://i.imgur.com/GQrfMnU.gif"/>
      </div>
    );

    return this.props.loaded ? this.props.children : loading;
  }

});

module.exports = Loading;