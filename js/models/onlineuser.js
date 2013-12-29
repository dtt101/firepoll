// ensure app object exists
var app = app || {};

/**
 * Model to represent other users currently online
 */
app.OnlineUser = Backbone.Model.extend({
  defaults: {
    name: 'Anon',
    status: 'offline'
  }
});