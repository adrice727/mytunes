// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<button class="dequeue pure-button button-error button-xsmall">dequeue</button><td class="libEntry poiret">(<%= artist %>)</td><td class="libEntry"><%= title %></td>'),

  events: {
    'click .dequeue' : function(){
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});
