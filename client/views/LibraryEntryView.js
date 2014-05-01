// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<button class="enqueue pure-button button-success button-xsmall">enqueue</button><td class="libEntry poiret">(<%= artist %>)</td><td class="libEntry"><%= title %></td>'),

  events: {
    'click .libEntry' : function() {
      this.model.play();
    },
    'click .enqueue' : function(){
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
