var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/image.js');
var AppComponent = require('./components/form.jsx').AppComponent;

ReactDOM.render(
  React.createElement(AppComponent),
  $('.container')[0]
);
