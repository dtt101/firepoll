// ensure app object exists
var app = app || {};

/**
 * The message model
 */
app.Message = Backbone.Model.extend({
  defaults: {
    user: 'Anonymous',
    text: '-'
  }
});