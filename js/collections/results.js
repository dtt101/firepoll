// ensure app object exists
var app = app || {};

/**
 * Results Collection - extends Firebase Collection to provide
 * realtime data sync via Backbone.sync
 */
app.Results = Backbone.Firebase.Collection.extend({
    model: app.Result,
    // results are stored in firebase
    firebase: new Firebase("https://strawpoll.firebaseio.com/constituencies")
});