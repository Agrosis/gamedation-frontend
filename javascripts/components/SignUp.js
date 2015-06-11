
var React = require('react');

var Textbox = require('./form/Textbox');

var signUp = require('../actions/signUp');

var SignUp = React.createClass({

  modalClick: function(e) {
    e.stopPropagation();
  },

  getInitialState: function(){
    return {email: "", username: "", password: "", emailState: "none", usernameState: "none", passwordState: ""};
  },

  emailChange: function(e) {
    var email = e.target.value;
    if(email != "" && email.length <= 128 && /^.+\@.+\..+$/.test(email)) {
      this.setState({email: email, emailState: "success"});
    } else {
      this.setState({email: email, emailState: "error"});
    }
  },

  usernameChange: function(e) {
    var username = e.target.value;
    if(username != "" && username.length <= 20 && /^[A-Za-z0-9-_.]+$/.test(username)) {
      this.setState({username: username, usernameState: "success"});
    } else {
      this.setState({username: username, usernameState: "error"});
    }
  },

  passwordChange: function(e) {
    var password = e.target.value;
    if(password.length >= 8 && password.length <= 128) {
      this.setState({password: password, passwordState: "success"});
    } else {
      this.setState({password: password, passwordState: "error"});
    }
  },

  onSignUp: function(e) {
    if(this.state.emailState == "success" && this.state.usernameState == "success" && this.state.passwordState == "success") {
      signUp({email: this.state.email, username: this.state.username, password: this.state.password}, window.dispatcher, (data) => {
        if(!data.error) {
          this.props.onClose();
        }
      });
    }
  },

  render: function(){
    return (
      <div className="modal-overlay" onClick={this.props.onClose}>
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content pure-u-7-24" onClick={this.modalClick}>
              <div className="modal-header modal-header-small">Sign up</div>

              <Textbox status={this.state.emailState} onChange={this.emailChange} containerClasses="pure-u-24-24" placeholder="Enter your email"/>

              <Textbox status={this.state.usernameState} onChange={this.usernameChange} containerClasses="pure-u-24-24" placeholder="Enter your username"/>

              <Textbox status={this.state.passwordState} onChange={this.passwordChange} type="password"containerClasses="pure-u-24-24" placeholder="Enter your password"/>

              <div className="modal-submit-button">
                <button onClick={this.onSignUp} className="button-black button-full">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SignUp;
