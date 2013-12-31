// ensure app object exists
var app = app || {};

/**
 * Room Collection - extends Firebase Collection to provide
 * realtime data sync via Backbone.sync
 * A room contains messages
 */
app.Results = Backbone.Firebase.Collection.extend({
    model: app.Result,
    // results are stored in firebase
    firebase: new Firebase("https://strawpoll.firebaseio.com/constituencies")
});