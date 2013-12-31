// ensure app object exists
var app = app || {};

/**
 * The Results view renders messages from FireBase
 */
app.ResultsView = Backbone.View.extend({
  el: '#results-container',

  /**
   * Set up
   */
  initialize: function(options) {

    // create new collection for room
    this.collection = new app.Results();

    // listen to add event and render new constituency result
    this.listenTo(this.collection, 'add', this.renderResult);

    // render all messages
    this.render();
  },

  /**
   * Renders all results in the collection
   */
  render: function() {
    this.collection.each(function(result) {
      this.renderResult(result);
    }, this);
  },

  /**
   * renders result by creating ResultView and appending to
   * associated HTML element
   *
   * @param {object}  result   instance of app.Result
   */
  renderResult: function(result) {
    console.log("render result called");
    console.log(result);
    var resultView = new app.ResultView({
      model: result
    });
    this.$('#results-tbody').append(resultView.render().el);
  }

});