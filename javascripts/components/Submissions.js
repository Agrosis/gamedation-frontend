
var React = require('react');
var DocumentTitle = require('react-document-title');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;

var GameItem = require('./GameItem');

var Submissions = React.createClass({
  mixins: [Navigation],

  render: function() {
    return (
      <div>
        <div className="middle-content">
          <div className="game-items">
            <div className="game-items-day">Today's submissions</div>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>
          </div>
          <div className="game-items">
            <div className="game-items-day">Today's submissions</div>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>
          </div>
          <div className="game-items">
            <div className="game-items-day">Today's submission</div>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>
            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>

            <GameItem upvoted={false} gamejolt={true} name="Deathsiege" description="A first-person wave-based siege game. Play this game if you dare!" points={1}/>
            <GameItem upvoted={true} steam={true} name="Dead Run 2" description="Play complicated puzzles and beat monsters! A game designed for the veterans." points={1}/>
          </div>
        </div>

        <DocumentTitle title='Latest Submissions | Gamedation'>
          <RouteHandler/>
        </DocumentTitle>
      </div>
    );
  }

});

module.exports = Submissions;
