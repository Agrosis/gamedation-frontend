
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;

var GameItem = require('./GameItem');

var Index = React.createClass({
  mixins: [Navigation],

  openGame: function(){
    this.transitionTo('game', {name: 'deathsiege', id: 10});
  },

  render: function() {
    return (
      <div>
        <div className="middle-content">
          <div className="game-items">
            <div className="game-items-day">Today's games</div>
            <GameItem onClick={this.openGame} upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>
          </div>
          <div className="game-items">
            <div className="game-items-day">Today's games</div>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>
          </div>
          <div className="game-items">
            <div className="game-items-day">Today's games</div>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={32}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={27}/>
          </div>
        </div>

        <RouteHandler/>
      </div>
    );
  }

});

module.exports = Index;
