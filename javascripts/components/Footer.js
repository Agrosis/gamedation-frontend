
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var If = require('./helpers/If');

var AddGame = require('./AddGame');
var Login = require('./Login');
var SignUp = require('./SignUp');

var signOut = require('../actions/signOut');

var Header = React.createClass({

  getInitialState: function(){
    return {adding: false, login: false, signup: false};
  },

  render: function(){
    return (
      <div className="footer">
        <div className="footer-title">
          gamedation
        </div>
        <div className="footer-info">
          <div className="footer-page">
            Home
          </div>
          <div className="footer-page">
            Contact
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
