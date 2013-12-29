// ensure app object exists
var app = app || {};

/**
 * View for individual messages
 * For use with Message model
 */
app.MessageView = Backbone.View.extend({
  tagName: 'div',
  className: 'message-container',
  template: _.template($('#messageTemplate').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});