// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    params.library.on('enqueue', function(song){
      console.log("here");
      this.add(song);
      this.trigger("songQueueRender");
    }, this);

    params.library.on('dequeue', function(song){
      this.remove(song);
      this.trigger("songQueueRender");

    }, this);
  }



});
