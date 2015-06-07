
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var If = require('./helpers/If');

var AddGame = require('./AddGame');
var Login = require('./Login');
var SignUp = require('./SignUp');

var Header = React.createClass({

  getInitialState: function(){
    return {adding: false, login: false, signup: false};
  },

  openAdd: function(){
    this.setState({adding: true});
  },

  closeAdd: function(){
    this.setState({adding: false});
  },

  openLogin: function(){
    this.setState({login: true});
  },

  closeLogin: function(){
    this.setState({login: false});
  },

  openSignUp: function(){
    this.setState({signup: true});
  },

  closeSignUp: function(){
    this.setState({signup: false});
  },

  render: function(){
    return (
      <div className="header">
        <div className="header-content">
          <Link to="index" className="header-nav header-title">
            GAMEDATION
          </Link>
          <Link activeClassName="active-header-nav" to="index" className="header-nav">
            Home
          </Link>
          <Link activeClassName="active-header-nav" to="submissions" className="header-nav">
            Submissions
          </Link>
          <div className="header-nav nav-right">
            Sign out
          </div>
          <div className="header-nav nav-right" onClick={this.openAdd}>
            <span className="ionicons ion-plus"></span>
          </div>
          <div className="header-nav nav-right" onClick={this.openLogin}>
            Log in
          </div>
          <div className="header-nav nav-right" onClick={this.openSignUp}>
            Sign up
          </div>
        </div>
        <If test={this.state.adding}>
          <AddGame onClose={this.closeAdd}/>
        </If>
        <If test={this.state.login}>
          <Login onClose={this.closeLogin}/>
        </If>
        <If test={this.state.signup}>
          <SignUp onClose={this.closeSignUp}/>
        </If>
      </div>
    );
  }

});

module.exports = Header;
