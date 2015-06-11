
var React = require('react');
var DocumentTitle = require('react-document-title');
var classSet = require('react-classset');

var Router = require('react-router');
var Navigation = Router.Navigation;

var Comment = require('./Comment');

var StoreListener = require('./mixins/StoreListener');

var UserStore = require('../stores/UserStore');
var GameStore = require('../stores/GameStore');
var GamesStore = require('../stores/GamesStore');

var getGame = require('../actions/getGame');
var upvoteGame = require('../actions/upvoteGame');
var gameName = require('../actions/gameName');
var postComment = require('../actions/postComment');

var If = require('./helpers/If');
var Loading = require('./helpers/Loading');
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
    return assign(window.dispatcher.getStore(GameStore).getState(), {commentText: "", commenting: false, selectedImage: 0, imageLoaded: false});
  },

  onChange: function() {
    this.setState(assign(window.dispatcher.getStore(GameStore).getState()));
  },

  componentDidMount: function() {
    getGame(this.props.params.gameId, window.dispatcher);

    React.findDOMNode(this.refs.gameContent).focus();
  },

  modalClick: function(e){
    e.stopPropagation();
  },

  vote: function(){
    upvoteGame(this.state.game.id, true, window.dispatcher);
  },

  commentChange: function(e){
    this.setState({commentText: e.target.value});
  },

  submitComment: function(e){
    this.setState({commenting: true});
    if(this.state.commentText != "" && this.state.commentText.length <= 300) {
      postComment({text: this.state.commentText}, this.state.game.id, "", window.dispatcher, (data) => {
        if(data.status == 200) {
          this.setState({commentText: "", commenting: false});
        }
      });
    } else {
      this.setState({commenting: false});
    }
  },

  selectImage: function(i) {
    return (e) => {
      if(this.state.selectedImage != i) {
        this.setState({selectedImage: i, imageLoaded: false});
      }
    }
  },

  imageLoaded: function(e) {
    this.setState({imageLoaded: true});
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
      this.transitionTo(gamePath, {name: gameName(p.name), gameId: p.id});
      getGame(p.id, dispatcher);
    } else if(e.keyCode === 39) {
      var n = window.dispatcher.getStore(GamesStore).getNextGame(this.state.game.id);
      this.transitionTo(gamePath, {name: gameName(n.name), gameId: n.id});
      getGame(n.id, dispatcher);
    }
  },

  render: function(){
    var voteClasses = classSet({
      'game-upvote': true,
      'game-upvoted': this.state.game.upvoted
    });

    var images = this.state.game.images.map((link, i) => {
      var imageClasses = classSet({
        "game-screenshot": true,
        "game-active-screenshot": this.state.selectedImage === i
      });

      return (
        <div key={i} onClick={this.selectImage(i)} className={imageClasses}>
          <img src={link}/>
        </div>
      );
    });

    var upvoters = this.state.upvoters.map((avatar, i) => {
      return (
        <div key={i} className="game-upvoter">
          <img src={avatar}/>
        </div>
      );
    });

    var comments = this.state.comments.map((comment, i) => {
      return (
        <Comment key={i} comment={comment}/>
      );
    });

    var user = window.dispatcher.getStore(UserStore).getState().user;

    var loaded = false;
    if(this.state.game.name) 
      loaded = true;

    var title = this.state.game.name || "Game";

    return (
      <DocumentTitle title={title + " | Gamedation"}>
        <div className="game-overlay" onClick={this.onClose}>
          <div className="game">
            <div tabIndex="0" ref="gameContent" className="game-content" onKeyDown={this.keyPress} onClick={this.modalClick}>
              <div className="game-header">
                <div className="game-vote" onClick={this.dontPropagate}>
                  <div className={voteClasses} onClick={this.vote}></div>
                  <div className="game-points">{this.state.game.points}</div>
                </div>
                <div className="game-info">
                  <div className="game-title">{this.state.game.name}</div>
                  <div className="game-description">{this.state.game.description}</div>
                </div>
                <div className="game-poster">
                  Posted by <img src={this.state.game.posterAvatar}/> {this.state.game.posterUsername}
                </div>
              </div>
              <div className="game-all-info">
                <Loading loaded={loaded}>
                  <div>
                    <div className="game-section">
                      <div className="pure-u-12-24">
                        <If test={this.state.game.site === "gamejolt"}>
                          <a target="_blank" href={this.state.game.link} className="button-gamejolt button-icon button-link"><img src="https://s4i8m4c6.ssl.hwcdn.net/app/img/favicon-1.689bf878.png"/> Play on GameJolt</a>
                        </If>
                        <If test={this.state.game.site === "steam"}>
                          <a target="_blank" href={this.state.game.link} className="button-steam button-icon button-link"><img src="http://i.imgur.com/1uzEf94.png"/> Play on Steam</a>
                        </If>
                        <If test={this.state.game.site === "other"}>
                          <a target="_blank" href={this.state.game.link} className="button-black button-link">Play game</a>
                        </If>
                      </div>
                      <div className="pure-u-12-24">
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
                    </div>

                    <div className="game-section game-screenshots">
                      <div className="game-section-header">media</div>
                      <div className="game-view-screenshot pure-u-24-24">
                        <Loading loaded={this.state.imageLoaded}>
                          <div></div>
                        </Loading>
                        <img onLoad={this.imageLoaded} src={this.state.game.images[this.state.selectedImage]}/>
                      </div>
                      <div className="game-list-screenshots">
                        {images}
                      </div>
                    </div>

                    <div className="game-section">
                      <div className="game-section-header">upvoters</div>
                      {upvoters}
                    </div>

                    <div className="game-section">
                      <div className="game-section-header">comments</div>

                      <If test={user != "guest"}>
                        <div className="game-comment">
                          <div className="game-comment-avatar">
                            <img src={user.avatar}/>
                          </div>
                          <div className="game-comment-content">
                            <textarea onChange={this.commentChange} placeholder="Enter your thoughts here..." value={this.state.commentText}></textarea>
                            <button onClick={this.submitComment} className="button-full button-green">Post comment</button>
                          </div>
                        </div>
                      </If>

                      <If test={user == "guest"}>
                        <div className="need-to-sign-in">
                          You need to be signed in to comment.
                        </div>
                      </If>

                      <Loading loaded={!this.state.commenting}>
                        <div></div>
                      </Loading>

                      {comments}
                    </div>
                  </div>
                </Loading>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = Game;
