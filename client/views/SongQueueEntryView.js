// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<button class="dequeue">dequeue</button><td class="libEntry">(<%= artist %>)</td><td class="libEntry"><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
