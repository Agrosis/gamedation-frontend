
var React = require('react');
var Router = require('react-router');
var classSet = require('react-classset');

var If = require('./helpers/If');
var GameItem = require('./GameItem');

var MoreGames = React.createClass({

  getInitialState: function(){
    return {show: false};
  },

  onShow: function(){
    this.setState({show: true});
  },

  render: function(){
    var games = this.props.games.map((g, i) => {
      var gamejolt = g.site === "gamejolt";
      var steam = g.site === "steam";

      return (
        <GameItem key={i} id={g.id} platforms={g.platforms} upvoted={g.upvoted} gamejolt={gamejolt} steam={steam} name={g.name} description={g.description} points={g.points} posterAvatar={g.posterAvatar}/>
      );
    });

    return (
      <div>
        <If test={!this.state.show && this.props.games.length > 0}>
          <div className="more-games" onClick={this.onShow}>
            {this.props.games.length} more games
          </div>
        </If>
        <If test={this.state.show}>
          <div>
            {games}
          </div>
        </If>
      </div>
    );
  }

});

module.exports = MoreGames;
