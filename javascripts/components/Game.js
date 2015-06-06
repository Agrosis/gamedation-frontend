
var React = require('react');
var DocumentTitle = require('react-document-title');
var classSet = require('react-classset');

var Router = require('react-router');
var Navigation = Router.Navigation;

var Comment = require('./Comment');

var StoreListener = require('./mixins/StoreListener');
var GameStore = require('../stores/GameStore');
var GamesStore = require('../stores/GamesStore');

var getGame = require('../actions/getGame');
var upvoteGame = require('../actions/upvoteGame');

var If = require('./helpers/If');
var assign = require('object-assign');

var Game = React.createClass({
  mixins: [Navigation, Router.State, StoreListener],

  statics: {
    storeListeners: [GameStore]
  },

  onClose: function(e) {
    if(this.isActive('index')) {
      this.transitionTo('index');
    } else if(this.isActive('submissions')) {
      this.transitionTo('submissions');
    }
  },

  getInitialState: function() {
    return assign(window.dispatcher.getStore(GameStore).getState());
  },

  onChange: function() {
    this.setState(assign(window.dispatcher.getStore(GameStore).getState()));
  },

  componentDidMount: function() {
    getGame(this.props.params.gameId, dispatcher);

    React.findDOMNode(this.refs.gameContent).focus();
  },

  modalClick: function(e){
    e.stopPropagation();
  },

  vote: function(){
    upvoteGame(this.state.game.id, true, window.dispatcher);
  },

  keyPress: function(e){
    var gamePath = "";
    if(this.isActive('index')) {
      gamePath = "game";
    } else if(this.isActive('submissions')) {
      gamePath = "submission";
    }

    if(e.keyCode === 37) {
      var p = window.dispatcher.getStore(GamesStore).getPreviousGame(this.state.game.id);
      this.transitionTo(gamePath, {name: p.name.toLowerCase(), gameId: p.id});
      getGame(p.id, dispatcher);
    } else if(e.keyCode === 39) {
      var n = window.dispatcher.getStore(GamesStore).getNextGame(this.state.game.id);
      this.transitionTo(gamePath, {name: n.name.toLowerCase(), gameId: n.id});
      getGame(n.id, dispatcher);
    }
  },

  render: function(){
    var voteClasses = classSet({
      'game-upvote': true,
      'game-upvoted': this.state.game.upvoted
    });

    var images = this.state.game.images.map((link, i) => {
      return (
        <div key={i} className="game-screenshot">
          <img src={link}/>
        </div>
      );
    });

    // <button className="button-steam button-icon"><img src="http://i.imgur.com/1uzEf94.png"/> Play on Steam</button>

    return (
      <DocumentTitle title={"Deathsiege | Gamedation"}>
        <div className="game-overlay" onClick={this.onClose}>
          <div className="game">
            <div tabIndex="0" ref="gameContent" className="game-content" onKeyDown={this.keyPress} onClick={this.modalClick} autoFocus={true}>
              <div className="game-header">
                <div className="game-vote" onClick={this.dontPropagate}>
                  <div className={voteClasses} onClick={this.vote}></div>
                  <div className="game-points">{this.state.game.points}</div>
                </div>
                <div className="game-info">
                  <div className="game-title">{this.state.game.name}</div>
                  <div className="game-description">{this.state.game.description}</div>
               </div>
              </div>
              <div className="game-all-info">
                <div className="game-section">
                  <a target="_blank" href="http://gamejolt.com/games/adventure/grimstorm/59563/" className="button-gamejolt button-icon button-link"><img src="https://s4i8m4c6.ssl.hwcdn.net/app/img/favicon-1.689bf878.png"/> Play on GameJolt</a>
                </div>

                <div className="game-section">
                  <div className="game-section-header">available for</div>
                  <If test={this.state.game.platforms.windows}>
                    <div className="game-platform-windows"></div>
                  </If>
                  <If test={this.state.game.platforms.mac}>
                    <div className="game-platform-mac"></div>
                  </If>
                  <If test={this.state.game.platforms.linux}>
                    <div className="game-platform-linux"></div>
                  </If>
                  <If test={this.state.game.platforms.browser}>
                    <div className="game-platform-browser"></div>
                  </If>
                  <If test={this.state.game.platforms.iOS}>
                    <div className="game-platform-ios"></div>
                  </If>
                  <If test={this.state.game.platforms.android}>
                    <div className="game-platform-android"></div>
                  </If>
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

                <div className="game-section game-screenshots">
                  <div className="game-section-header">media</div>
                  {images}
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
      </DocumentTitle>
    );
  }

});

module.exports = Game;
