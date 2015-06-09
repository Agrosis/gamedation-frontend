
var React = require('react');

var Curator = React.createClass({
  render: function() {
    return (
      <div className="admin-curator">
        {this.props.username}
      </div>
    );
  }

});

module.exports = Curator;
