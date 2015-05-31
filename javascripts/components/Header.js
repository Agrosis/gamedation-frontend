
var React = require('react');

var If = require('./helpers/If');

var AddGame = require('./AddGame');

var Header = React.createClass({

  getInitialState: function(){
    return {adding: false};
  },

  openAdd: function(){
    this.setState({adding: true});
  },

  closeAdd: function(){
    this.setState({adding: false});
  },

  render: function(){
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-nav">
            Home
          </div>
          <div className="header-nav nav-right">
            Sign out
          </div>
          <div className="header-nav nav-right" onClick={this.openAdd}>
            <span className="fa fa-plus"></span>
          </div>
        </div>
        <If test={this.state.adding}>
          <AddGame onClose={this.closeAdd}/>
        </If>
      </div>
    );
  }

});

module.exports = Header;
