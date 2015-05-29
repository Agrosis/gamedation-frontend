
var React = require('react');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;

var GameItem = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    points: React.PropTypes.number.isRequired,

    gamejolt: React.PropTypes.bool
  },

  render: function(){
    return (
      <div className="game-item">
        <div className="game-item-vote">
          <div className="game-item-upvote"></div>
          <div className="game-item-points">{this.props.points}</div>
        </div>
        <div className="game-item-info">
          <div className="game-item-title">{this.props.name}</div>
          <div className="game-item-description">{this.props.description}</div>
        </div>
      </div>
    );
  }

});

module.exports = GameItem;
