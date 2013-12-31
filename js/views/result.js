// ensure app object exists
var app = app || {};

/**
 * View for individual results
 */
app.ResultView = Backbone.View.extend({
  tagName: 'tr',
  className: 'result-container',
  template: _.template($('#resultTemplate').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});