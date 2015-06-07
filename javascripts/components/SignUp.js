
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
    this.setState({email: e.target.value, emailState: "success"});
  },

  usernameChange: function(e) {
    this.setState({username: e.target.value, usernameState: "success"});
  },

  passwordChange: function(e) {
    this.setState({password: e.target.value, passwordState: "success"});
  },

  onSignUp: function(e) {
    signUp({email: this.state.email, username: this.state.username, password: this.state.password}, window.dispatcher, (data) => {
      this.props.onClose();
    });
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
