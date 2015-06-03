
var React = require('react');

var Textbox = require('./form/Textbox');

var AddGame = React.createClass({

  modalClick: function(e) {
    e.stopPropagation();
  },

  render: function(){
    return (
      <div className="modal-overlay" onClick={this.props.onClose}>
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content pure-u-10-24" onClick={this.modalClick}>
              <div className="modal-header">Submit a Game</div>

              <label className="pure-u-4-24">Game Link</label>
              <Textbox status="success" containerClasses="pure-u-20-24" placeholder="Paste game link here (e.g. GameJolt, Steam)"/>

              <label className="pure-u-4-24">Title</label>
              <Textbox status="error" containerClasses="pure-u-20-24" placeholder="Enter game title"/>

              <label className="pure-u-4-24">Description</label>
              <Textbox status="loading" containerClasses="pure-u-20-24" placeholder="Enter game description"/>

              <label className="pure-u-4-24">Platforms</label>

              <div className="pure-u-20-24 modal-checkboxes">
                <div className="modal-checkbox pure-u-5-24"><input type="checkbox"/> Windows</div>
                <div className="modal-checkbox pure-u-5-24"><input type="checkbox"/> Mac</div>
                <div className="modal-checkbox pure-u-5-24"><input type="checkbox"/> Linux</div>
                <div className="modal-checkbox pure-u-5-24"><input type="checkbox"/> Android</div>
                <div className="modal-checkbox pure-u-5-24"><input type="checkbox"/> Browser</div>
                <div className="modal-checkbox pure-u-5-24"><input type="checkbox"/> iOS</div>
              </div>

              <div className="modal-submit-button">
                <button className="button-green button-full">Submit game</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AddGame;
