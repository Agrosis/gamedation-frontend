
var React = require('react');

var Textbox = require('./form/Textbox');

var Login = React.createClass({

  modalClick: function(e) {
    e.stopPropagation();
  },

  render: function(){
    return (
      <div className="modal-overlay" onClick={this.props.onClose}>
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content pure-u-7-24" onClick={this.modalClick}>
              <div className="modal-header modal-header-small">Log in</div>

              <Textbox status="success" containerClasses="pure-u-24-24" placeholder="Enter your email"/>

              <Textbox type="password" status="error" containerClasses="pure-u-24-24" placeholder="Enter your password"/>

              <div className="modal-submit-button">
                <button className="button-black button-full">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Login;
