// ensure app object exists
var app = app || {};

/**
 * Room Collection - extends Firebase Collection to provide
 * realtime data sync via Backbone.sync
 * A room contains messages
 */
app.Room = Backbone.Firebase.Collection.extend({
  model: app.Message,
  // all messages are saved in firebase
  firebase: new Firebase("https://farmchat.firebaseio.com/room").limit(50)
});