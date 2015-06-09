
var React = require('react');
var Router = require('react-router');
var classSet = require('react-classset');

var relativeTime = require('../actions/relativeTime');

var Comment = React.createClass({

  propTypes: {
    reply: React.PropTypes.bool
  },

  render: function(){
    var commentClasses = classSet({
      'game-comment': true,
      'game-comment-reply': this.props.reply
    });

    return (
      <div className={commentClasses}>
        <div className="game-comment-avatar">
          <img src={this.props.comment.poster.avatar}/>
        </div>
        <div className="game-comment-content">
          <div className="game-comment-poster">Posted by {this.props.comment.poster.username}, {relativeTime(this.props.comment.time)}</div>
          {this.props.comment.text}  
        </div>
      </div>
    );
  }

});

module.exports = Comment;
