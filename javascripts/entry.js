require('../less/main.less');

'use strict';
var React = require('react');
var Router = require('react-router');

var Routes = require('./Routes');

var app = require('./app');
var dehydratedState = {};

window.React = React;

function RenderApp(dispatcher, Handler){
  React.render(<Handler/>, document.getElementById('content'));
}

app.rehydrate(dehydratedState);

var dispatcher = app;
window.dispatcher = dispatcher;

var firstRender = true;
Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
  RenderApp(dispatcher, Handler);
});
