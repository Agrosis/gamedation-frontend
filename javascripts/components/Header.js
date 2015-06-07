
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

  signOut: function(){
    signOut(window.dispatcher);
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

          <If test={this.props.user !== "guest" && this.props.user.status >= 2}>
            <Link activeClassName="active-header-nav" to="submissions" className="header-nav">
              Submissions
            </Link>
          </If>

          <If test={this.props.user !== "guest"}>
            <div className="header-nav nav-right" onClick={this.signOut}>
              Sign out
            </div>
          </If>

          <If test={this.props.user !== "guest"}>
            <div className="header-nav nav-right" onClick={this.openAdd}>
              <span className="ionicons ion-plus"></span>
            </div>
          </If>

          <If test={this.props.user !== "guest"}>
            <div className="header-nav nav-right">
              {this.props.user.username}
            </div>
          </If>

          <If test={this.props.user === "guest"}>
            <div className="header-nav nav-right" onClick={this.openLogin}>
              Log in
            </div>
          </If>

          <If test={this.props.user === "guest"}>
            <div className="header-nav nav-right" onClick={this.openSignUp}>
              Sign up
            </div>
          </If>

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
