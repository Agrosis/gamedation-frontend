
var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = require('./components/App');
var Index = require('./components/Index');
var Game = require('./components/Game')

var Routes = (
  <Route path="/" handler={App}>
    <Route name="index" path="/" handler={Index} ignoreScrollBehavior>
      <Route name="game" path="game/:name/:id" handler={Game}/>
    </Route>
  </Route>
);

module.exports = Routes;
