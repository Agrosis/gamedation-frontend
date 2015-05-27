
var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = require('./components/App');
var Index = require('./components/Index');

var Routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Index}/>
  </Route>
);

module.exports = Routes;
