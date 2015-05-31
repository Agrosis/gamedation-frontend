
var React = require('react');

var AddGame = React.createClass({

  modalClick: function(e) {
    e.stopPropagation();
  },

  render: function(){
    return (
      <div className="modal-overlay" onClick={this.props.onClose}>
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content pure-u-12-24" onClick={this.modalClick}>
              <div className="modal-header">Submit a Game</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AddGame;
