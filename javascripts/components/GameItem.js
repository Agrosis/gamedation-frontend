
var React = require('react');
var classSet = require('react-classset');

var Router = require('react-router');
var Navigation = Router.Navigation;
var RouteHandler = Router.RouteHandler;

var If = require('./helpers/If');

var upvoteGame = require('../actions/upvoteGame');

var GameItem = React.createClass({
  mixins: [Navigation, Router.State],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    points: React.PropTypes.number.isRequired,
    upvoted: React.PropTypes.bool.isRequired,

    gamejolt: React.PropTypes.bool,
    steam: React.PropTypes.bool
  },

  vote: function(){
    upvoteGame(this.props.id, false, window.dispatcher);
  },

  dontPropagate: function(e){
    e.stopPropagation();
  },

  openGame: function(){
    if(this.isActive('index')) {
      this.transitionTo('game', {name: this.props.name.toLowerCase(), gameId: this.props.id});
    } else if(this.isActive('submissions')) {
      this.transitionTo('submission', {name: this.props.name.toLowerCase(), gameId: this.props.id});
    }
  },

  render: function(){
    var voteClasses = classSet({
      'game-item-upvote': true,
      'game-item-upvoted': this.props.upvoted
    });

    return (
      <div className="game-item" onClick={this.openGame}>
        <div className="game-item-vote" onClick={this.dontPropagate}>
          <div className={voteClasses} onClick={this.vote}></div>
          <div className="game-item-points">{this.props.points}</div>
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
          <If test={this.props.platforms.windows}>
            <span className="game-item-platform-windows"></span>
          </If>
          <If test={this.props.platforms.mac}>
            <span className="game-item-platform-mac"></span>
          </If>
          <If test={this.props.platforms.linux}>
            <span className="game-item-platform-linux"></span>
          </If>
          <If test={this.props.platforms.browser}>
            <span className="game-item-platform-browser"></span>
          </If>
          <If test={this.props.platforms.iOS}>
            <span className="game-item-platform-ios"></span>
          </If>
          <If test={this.props.platforms.android}>
            <span className="game-item-platform-android"></span>
          </If>

          <div className="game-item-avatar">
            <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = GameItem;
