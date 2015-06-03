
var React = require('react');
var Router = require('react-router');
var classSet = require('react-classset');

var RouteHandler = Router.RouteHandler;

var If = require('./helpers/If');

var GameItem = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    points: React.PropTypes.number.isRequired,
    upvoted: React.PropTypes.bool.isRequired,

    gamejolt: React.PropTypes.bool,
    steam: React.PropTypes.bool
  },

  getInitialState: function() {
    return {upvoted: this.props.upvoted, points: this.props.points};
  },

  vote: function(){
    if(this.state.upvoted) {
      this.setState({upvoted: false, points: this.state.points - 1});
    } else {
      this.setState({upvoted: true, points: this.state.points + 1});
    }
  },

  dontPropagate: function(e){
    e.stopPropagation();
  },

  render: function(){
    var voteClasses = classSet({
      'game-item-upvote': true,
      'game-item-upvoted': this.state.upvoted
    });

    return (
      <div className="game-item" onClick={this.props.onClick}>
        <div className="game-item-vote" onClick={this.dontPropagate}>
          <div className={voteClasses} onClick={this.vote}></div>
          <div className="game-item-points">{this.state.points}</div>
        </div>
        <div className="game-item-info">
          <div className="game-item-title">{this.props.name}</div>
          <If test={this.props.gamejolt || false}>
            <img className="game-item-site" src="https://s4i8m4c6.ssl.hwcdn.net/app/img/favicon-1.689bf878.png"/>
          </If>
          <If test={this.props.steam || false}>
            <img className="game-item-site" src="http://i.imgur.com/1uzEf94.png"/>
          </If>
          <div className="game-item-description">{this.props.description}</div>
        </div>
        <div className="game-item-right">
          <span className="game-item-platform-mac"></span>
          <span className="game-item-platform-windows"></span>
          <span className="game-item-platform-linux"></span>
          <span className="game-item-platform-android"></span>
          <span className="game-item-platform-ios"></span>
          <span className="game-item-platform-browser"></span>

          <div className="game-item-avatar">
            <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = GameItem;
