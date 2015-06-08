
var React = require('react');

var GameItem = require('./GameItem');
var MoreGames = require('./MoreGames');

var GameList = React.createClass({
  render: function() {
    var cut = 14;
    if(this.props.all) {
      cut = this.props.games.length;
    }

    var show = this.props.games.slice(0, cut);
    var more = this.props.games.slice(cut, this.props.games.length);

    var games = show.map((g, i) => {
      var gamejolt = g.site === "gamejolt";
      var steam = g.site === "steam";

      return (
        <GameItem key={i} id={g.id} platforms={g.platforms} upvoted={g.upvoted} gamejolt={gamejolt} steam={steam} name={g.name} description={g.description} points={g.points} posterAvatar={g.posterAvatar}/>
      );
    });

    return (
      <div className="game-items">
        <div className="game-items-day">{this.props.name}</div>
        {games}
        <MoreGames games={more}/>
      </div>
    );
  }

});

module.exports = GameList;
