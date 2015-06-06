var React = require('react');

var classSet = require('react-classset')

var Textbox = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    type: React.PropTypes.string,

    containerClasses: React.PropTypes.string,
    classes: React.PropTypes.string,

    status: React.PropTypes.string
  },

  render: function(){
    var containerClasses = classSet({
      'textbox-container': true
    }) + " " + (this.props.containerClasses || "");

    var classes = classSet({

    }) + " " + (this.props.classes || "");

    var statusClasses = "textbox-status textbox-status-" + (this.props.status || "none");

    return (
      <div className={containerClasses}>
        <input name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.onChange} type={this.props.type || "text"} placeholder={this.props.placeholder} className={classes}/>
        <span className={statusClasses}></span>
      </div>
    );
  }
});

module.exports = Textbox;