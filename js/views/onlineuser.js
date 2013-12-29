// ensure app object exists
var app = app || {};

/**
 * View for individual chat users
 * Associated with the OnlineUser model
 */
app.OnlineUserView = Backbone.View.extend({
  tagName: 'div',
  className: 'onlineuser-container',
  template: _.template($('#onlineUserTemplate').html()),

  render: function() {
    // get user name from model
    var localUserName = this.model.get("name");
    this.$el.attr('id', "onlineuser-" + localUserName).html(this.template(this.model.toJSON()));
    return this;
  }
});