
var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = require('./components/App');
var Index = require('./components/Index');
var Game = require('./components/Game');
var Submissions = require('./components/Submissions');
var Admin = require('./components/admin/Admin');

var Routes = (
  <Route path="/" handler={App}>
    <Route name="index" path="/" handler={Index} ignoreScrollBehavior>
      <Route name="game" path="game/:name/:gameId" handler={Game}/>
    </Route>
    <Route name="submissions" path="/submissions" handler={Submissions} ignoreScrollBehavior>
      <Route name="submission" path=":name/:gameId" handler={Game}/>
    </Route>
    <Route name="admin" path="admin" handler={Admin}/>
  </Route>
);

module.exports = Routes;
