var React = require('react');

var classSet = require('react-classset')

var Textbox = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
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
        <input type={this.props.type || "text"} name={this.props.name} id={this.props.idx} placeholder={this.props.placeholder} defaultText={this.props.text} className={classes}/>
        <span className={statusClasses}></span>
      </div>
    );
  }
});

module.exports = Textbox;