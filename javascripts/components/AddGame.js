
var React = require('react');
var DocumentTitle = require('react-document-title');

var Textbox = require('./form/Textbox');

var processLink = require('../actions/processLink');

var AddGame = React.createClass({

  getInitialState: function(){
    return {
      linkState: "none", 
      titleState: "none", 
      descriptionState: "none", 

      title: "", 
      windows: false, 
      android: false, 
      iOS: false, 
      mac: false, 
      browser: false, 
      linux: false,

      imageState: "none",
      currentImage: "",
      images: []
    };
  },

  modalClick: function(e) {
    e.stopPropagation();
  },

  onLinkChange: function(e) {
    var link = e.target.value;
    if(link != "") {
      this.setState({linkState: "loading"});

      processLink(link, (response, error) => {
        if(error) {
          this.setState({linkState: "none"});
        } else {
          if(response.error) {
            this.setState({linkState: "error"});
          } else {
            if(response.data.type == "gamejolt") {
              this.setState({
                linkState: "success",
                title: response.data.gjData.data.name,
                windows: response.data.gjData.data.windows,
                mac: response.data.gjData.data.mac,
                browser: response.data.gjData.data.browser,
                linux: response.data.gjData.data.linux,
                images: response.data.gjData.data.screenshots
              });

              this.onTitleChange({
                target: {
                  value: this.state.title
                }
              });
            } else if(response.data.type == "steam") {
              this.setState({
                linkState: "success",
                title: response.data.steamData.data.name,
                windows: response.data.steamData.data.windows,
                mac: response.data.steamData.data.mac,
                linux: response.data.steamData.data.linux,
                images: response.data.steamData.data.screenshots
              });

              this.onTitleChange({
                target: {
                  value: this.state.title
                }
              });
            } else if(response.data.type == "other") {
              this.setState({
                linkState: "success"
              })
            }

            if(this.state.images.length > 6) {
              this.setState({images: this.state.images.slice(0, 6)});
            }
          }
        }
      });
    } else {
      this.setState({linkState: "none"});
    }
  },

  onTitleChange: function(e){
    var title = e.target.value;
    if(title != "") {
      this.setState({titleState: "success", title: title});
    } else {
      this.setState({titleState: "none", title: title});
    }
  },

  onDescriptionChange: function(e) {
    var description = e.target.value;
    if(description != "") {
      this.setState({descriptionState: "success"});
    } else {
      this.setState({descriptionState: "none"});
    }
  },

  stateToBoolean: function(s) {
    if(s == "on") return true;
    else if(s == "off") return false;
  },

  windows: function(e){
    this.setState({windows: !this.state.windows});
  },

  mac: function(e){
    this.setState({mac: !this.state.mac});
  },

  linux: function(e){
    this.setState({linux: !this.state.linux});
  },

  android: function(e){
    this.setState({android: !this.state.android});
  },

  iOS: function(e){
    this.setState({iOS: !this.state.iOS});
  },

  browser: function(e){
    this.setState({browser: !this.state.browser});
  },

  onImageChange: function(e) {
    this.setState({currentImage: e.target.value});
  },

  addImage: function() {
    if(this.state.currentImage != "") {
      this.setState({imageState: "success", images: this.state.images.concat([this.state.currentImage]), currentImage: ""});
    }
  },

  failedImage: function(i){
    return (e) => {
      this.setState({imageState: "error", images: this.state.images.filter((f, n) => n != i)});
    }
  },

  removeImage: function(i){
    return (e) => {
      this.setState({images: this.state.images.filter((f, n) => n != i)});
    }
  },

  render: function(){
    var images = this.state.images.map((img, i) => {
      return (
        <div key={i} className="upload-screenshot">
          <img src={img} onError={this.failedImage(i)}/>
          <span className="remove-screenshot ionicons ion-close-round" onClick={this.removeImage(i)}></span>
        </div>
      );
    });

    return (
      <DocumentTitle title="Submit game | Gamedation">
        <div className="modal-overlay" onClick={this.props.onClose}>
          <div className="modal-container">
            <div className="modal">
              <div className="modal-content pure-u-10-24" onClick={this.modalClick}>
                <div className="modal-header">Submit a Game</div>

                <label className="pure-u-4-24">Game Link</label>
                <Textbox name="link" onChange={this.onLinkChange} status={this.state.linkState} containerClasses="pure-u-20-24" placeholder="Paste game link here (e.g. GameJolt, Steam)"/>

                <label className="pure-u-4-24">Title</label>
                <Textbox name="title" onChange={this.onTitleChange} status={this.state.titleState} value={this.state.title} containerClasses="pure-u-20-24" placeholder="Enter game title"/>

                <label className="pure-u-4-24">Description</label>
                <Textbox name="description" onChange={this.onDescriptionChange} status={this.state.descriptionState} containerClasses="pure-u-20-24" placeholder="Enter game description"/>

                <label className="pure-u-4-24">Platforms</label>
                <div className="pure-u-20-24 modal-checkboxes">
                  <div className="modal-checkbox pure-u-5-24"><input name="windows" onChange={this.windows} type="checkbox" checked={this.state.windows}/> Windows</div>
                  <div className="modal-checkbox pure-u-5-24"><input name="mac" onChange={this.mac} type="checkbox" checked={this.state.mac}/> Mac</div>
                  <div className="modal-checkbox pure-u-5-24"><input name="linux" onChange={this.linux} type="checkbox" checked={this.state.linux}/> Linux</div>
                  <div className="modal-checkbox pure-u-5-24"><input name="android" onChange={this.android} type="checkbox" checked={this.state.android}/> Android</div>
                  <div className="modal-checkbox pure-u-5-24"><input name="browser" onChange={this.browser} type="checkbox" checked={this.state.browser}/> Browser</div>
                  <div className="modal-checkbox pure-u-5-24"><input name="iOS" onChange={this.iOS} type="checkbox" checked={this.state.iOS}/> iOS</div>
                </div>

                <label className="pure-u-4-24">Images</label>
                <div className="pure-u-20-24">
                  <Textbox value={this.state.currentImage} status={this.state.imageState} name="image" containerClasses="pure-u-20-24" onChange={this.onImageChange} placeholder="Enter an image link here... (6 max)"/>
                  <button onClick={this.addImage} className="button-blue pure-u-4-24 button-sharp">Add</button>

                  {images}
                </div> 

                <div className="modal-submit-button">
                  <button className="button-green button-full">Submit game</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = AddGame;
