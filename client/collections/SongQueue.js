// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', this.callPlayFirst, this);
  },

  playFirst: function(){
    // debugger;
    this.trigger('playFirst');
  },

  callPlayFirst: function(){
    if ( this.length === 1 ){
      this.playFirst();
    }
  }





});
