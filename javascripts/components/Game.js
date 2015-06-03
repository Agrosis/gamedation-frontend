
var React = require('react');
var classSet = require('react-classset');
var Navigation = require('react-router').Navigation;

var Comment = require('./Comment');

var Game = React.createClass({
  mixins: [Navigation],

  onClose: function(e) {
    this.transitionTo('index');
  },

  modalClick: function(e){
    e.stopPropagation();
  },

  getInitialState: function() {
    return {upvoted: this.props.upvoted, points: 32};
  },

  vote: function(){
    if(this.state.upvoted) {
      this.setState({upvoted: false, points: this.state.points - 1});
    } else {
      this.setState({upvoted: true, points: this.state.points + 1});
    }
  },

  render: function(){
    var voteClasses = classSet({
      'game-upvote': true,
      'game-upvoted': this.state.upvoted
    });

    //                   <button className="button-steam button-icon"><img src="http://i.imgur.com/1uzEf94.png"/> Play on Steam</button>

    return (
      <div className="game-overlay" onClick={this.onClose}>
        <div className="game">
          <div className="game-content" onClick={this.modalClick}>
            <div className="game-header">
              <div className="game-vote" onClick={this.dontPropagate}>
                <div className={voteClasses} onClick={this.vote}></div>
                <div className="game-points">{this.state.points}</div>
              </div>
              <div className="game-info">
                <div className="game-title">Deathsiege</div>
                <div className="game-description">A first-person wave-based siege game. Play this game if you dare!</div>
             </div>
            </div>
            <div className="game-all-info">
              <div className="game-section">
                <a href="/" className="button-gamejolt button-icon"><img src="https://s4i8m4c6.ssl.hwcdn.net/app/img/favicon-1.689bf878.png"/> Play on GameJolt</a>

              </div>

              <div className="game-section">
                <div className="game-section-header">available for</div>
                <div className="game-platform-windows"></div>
                <div className="game-platform-mac"></div>
                <div className="game-platform-ios"></div>
                <div className="game-platform-android"></div>
                <div className="game-platform-linux"></div>
                <div className="game-platform-browser"></div>
              </div>

              <div className="game-section">
                <div className="game-section-header">upvoters</div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
                <div className="game-upvoter">
                  <img src="https://secure.gravatar.com/avatar/802540db8043503a3c3ead05d51c0139?s=64"/>
                </div>
              </div>

              <div className="game-section">
                <div className="game-section-header">media</div>
              </div>

              <div className="game-section">
                <div className="game-section-header">comments</div>
                <Comment/>
                <Comment reply={true}/>
                <Comment/>
                <Comment/>

                <Comment/>

                <Comment/>

                <Comment/>

                <Comment/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Game;
