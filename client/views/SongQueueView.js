// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    console.log(this.collection);

  //   this.collection.on("change", function());
  //   });
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    // *** Pretty sure this is okay ***
    console.log("things", this.collection);
    this.$el.html('<th class=monofett>Playlist</th>');
    if(this.collection.length > 0){
      this.$el.append(
        this.collection.map(function(song){
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
  }

});
