
var React = require('react');

var GameItem = require('./GameItem');

var Index = React.createClass({

  render: function() {
    return (
      <div className="middle-content">
        <div className="game-items">
          <GameItem name="Deathsiege" description="A first-person wave-based siege game." points={32}/>
          <GameItem name="Dead Run 2" description="Play complicated puzzles and beat monsters!" points={27}/>
          <GameItem name="Deathsiege" description="A first-person wave-based siege game." points={32}/>
          <GameItem name="Dead Run 2" description="Play complicated puzzles and beat monsters!" points={27}/>
          <GameItem name="Deathsiege" description="A first-person wave-based siege game." points={32}/>
          <GameItem name="Dead Run 2" description="Play complicated puzzles and beat monsters!" points={27}/>
          <GameItem name="Deathsiege" description="A first-person wave-based siege game." points={32}/>
          <GameItem name="Dead Run 2" description="Play complicated puzzles and beat monsters!" points={27}/>
        </div>
      </div>
    );
  }

});

module.exports = Index;
