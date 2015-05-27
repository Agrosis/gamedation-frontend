
var React = require('react');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({

  render: function(){
    return (
      <div className="pure-u-5-5">
        <div className="pure-u-3-5"></div>
        <div className="pure-u-2-5 hello">this is header!</div>

        <RouteHandler/>
      </div>
    );
  }

});

module.exports = App;
