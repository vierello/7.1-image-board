var Backbone = require('backbone');

var Picture = Backbone.Model.extend({

});

var PictureCollection = Backbone.Collection.extend ({
  model: Picture,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/v-image-viewer',
});

var ShowPanel = Backbone.Model.extend({
  showPanel: function(){
    $('.add-button').on('click', function(event){
      event.preventDefault();
      $('.hidden').removeClass('hidden');
    });
  }
});

module.exports = {
  'Picture': Picture,
  'PictureCollection': PictureCollection,
  'ShowPanel': ShowPanel
}
