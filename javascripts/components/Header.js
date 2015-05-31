
var React = require('react');

var Header = React.createClass({

  render: function(){
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-nav">
            Home
          </div>
          <div className="header-nav">
            Games
          </div>
          <div className="header-nav nav-right">
            Sign out
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
