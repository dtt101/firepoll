// ensure app object exists
var app = app || {};

/**
 * The Room view handles rendering messages and the send form
 * It is associated with the Room Collection
 */
app.RoomView = Backbone.View.extend({
  el: '#room',

  // event handlers for the room
  events:{
    'click #send': 'addMessage'
  },

  /**
   * Set up RoomView
   *
   * @param  {object}  options   passing in {localUserName: '@example'} will set local user name
   */
  initialize: function(options) {
    // set current user name for messages
    this.userName = options.currentUserName;

    // create new collection for room
    this.collection = new app.Room();

    // listen to add event and render new message
    this.listenTo(this.collection, 'add', this.renderMessage);
    // when a message is added clear the message input
    this.listenTo(this.collection, 'add', this.clearMessageInput);

    // render all messages
    this.render();
  },

  /**
   * Renders all messages in the collection
   */
  render: function() {
    this.collection.each(function(message) {
      this.renderMessage(message);
    }, this);
  },

  /**
   * renders message by creating MessageView and appending to
   * associated HTML element
   *
   * @param {object}  message   instance of app.Message
   */
  renderMessage: function(message) {
    var messageView = new app.MessageView({
      model: message
    });
    this.$('#messages').prepend(messageView.render().el);
  },

  /**
   * Handles a message being added from the add form
   *
   * @param {object}  e   Event information
   */
  addMessage: function(e) {
    e.preventDefault();
    // get message from form, and use current auth username
    var msgText = $('#addMessage fieldset input#text').val();
    var message = new app.Message({
      user: this.userName
    });
    // only add the message if it is not blank
    if (msgText != '') {
      message.set('text', msgText);
    }
    this.collection.add(message);
  },

  /**
   * Clears the message input of content
   */
  clearMessageInput: function() {
    $('#addMessage fieldset input#text').val('');
  }

});