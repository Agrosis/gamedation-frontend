
var React = require('react');
var Textbox = require('./form/Textbox');

var logIn = require('../actions/logIn');
var getGames = require('../actions/getGames');

var Login = React.createClass({

  modalClick: function(e) {
    e.stopPropagation();
  },

  getInitialState: function() {
    return {email: "", password: ""};
  },

  emailChange: function(e) {
    this.setState({email: e.target.value});
  },

  passwordChange: function(e) {
    this.setState({password: e.target.value});
  },

  login: function(e) {
    if(this.state.email != "" && this.state.password != "") {
      logIn({email: this.state.email, password: this.state.password}, window.dispatcher, (data) => {
        this.props.onClose();

        getGames(window.dispatcher);
      });
    } 
  },

  render: function(){
    return (
      <div className="modal-overlay" onClick={this.props.onClose}>
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content pure-u-7-24" onClick={this.modalClick}>
              <div className="modal-header modal-header-small">Log in</div>

              <Textbox onChange={this.emailChange} status="none" containerClasses="pure-u-24-24" placeholder="Enter your email"/>

              <Textbox onChange={this.passwordChange} status="none" type="password" containerClasses="pure-u-24-24" placeholder="Enter your password"/>

              <div className="modal-submit-button">
                <button onClick={this.login} className="button-black button-full">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Login;
