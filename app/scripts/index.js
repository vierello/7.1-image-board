var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/image.js');
var AppComponent = require('./components/form.jsx').AppComponent;

var pictureCollection = new models.PictureCollection();

pictureCollection.fetch().done(function(){
  ReactDOM.render(
    React.createElement(AppComponent, {pictures: pictureCollection}),
    $('.container-fluid')[0]
  );
});
