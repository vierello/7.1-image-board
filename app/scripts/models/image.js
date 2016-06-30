var Backbone = require('backbone');

var Picture = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    'url': '',
    'caption': ''
  }
});

var PictureCollection = Backbone.Collection.extend ({
  model: Picture,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/v-image-viewer',
});


module.exports = {
  'Picture': Picture,
  'PictureCollection': PictureCollection
}
