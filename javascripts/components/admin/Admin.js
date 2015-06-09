
var React = require('react');
var DocumentTitle = require('react-document-title');

var If = require('../helpers/If');

var Textbox = require('../form/Textbox');
var Curator = require('./Curator');

var getAdmin = require('../../actions/admin/getAdmin');
var addCurator = require('../../actions/admin/addCurator');
var loading = require('../../actions/loading');

var UserStore = require('../../stores/UserStore');

var Admin = React.createClass({
  statics: {
    willTransitionTo(transition, params, query, callback) {
      var user = window.dispatcher.getStore(UserStore).getState().user;
      if(user != "guest" && user.status == 3) {
        callback();
      } else {
        transition.redirect('index');
        callback();
      }
    }
  },

  getInitialState: function() {
    return {usernameText: "", curators: []};
  },

  componentDidMount: function(){
    loading(true, window.dispatcher);
    getAdmin((data) => {
      loading(false, window.dispatcher);
      this.setState({curators: data.data.curators});
    });
  },

  onUsernameChange: function(e){
    this.setState({usernameText: e.target.value});
  },

  submit: function() {
    addCurator(this.state.usernameText, (data) => {
      if(data.status === 200) {
        if(data.data.result === true) {
          this.setState({curators: this.state.curators.concat([this.state.usernameText]), usernameText: ""});
        }
      }
    });
  },

  render: function() {
    var curators = this.state.curators.map((c, i) => {
      return (<Curator key={i} username={c}/>);
    });

    return (
      <DocumentTitle title='Gamedation'>
        <div className="middle-content">
          <div className="pure-u-12-24">
            <div className="header-2">Manage Curators</div>

            <Textbox name="image" containerClasses="pure-u-20-24" value={this.state.usernameText} onChange={this.onUsernameChange} placeholder="Enter username..."/>
            <button onClick={this.submit} className="button-blue pure-u-4-24 button-sharp">Add</button>

            {curators}
          </div>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = Admin;
