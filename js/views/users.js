// ensure app object exists
var app = app || {};

/**
 * The Users view handles rendering users
 * The model in this case is the Firebase presence data
 * Without an actual BackBone model
 *
 * For more info see: https://www.firebase.com/docs/managing-presence.html
 * This FireBase example was also used as a source:
 * https://github.com/firebase/examples/blob/master/presence.html
 */
app.UsersView = Backbone.View.extend({
  el: '#users',

  /**
   * Initialise view with references to online users and presence
   * provided by FireBase
   *
   * @param  {object}  options   passing in {localUserName: '@example'} will set local user name
   */
  initialize: function(options) {
    // set user name and status
    this.userName = options.currentUserName;
    this.currentStatus = "★ online";

    // refrence to presence data in firebase
    this.userListRef = new Firebase("https://farmchat.firebaseio.com/onlineusers");
    // Generate a reference to the current user
    this.myUserRef = this.userListRef.push();
    // reference to current connection state
    this.connectedRef = new Firebase("https://farmchat.firebaseio.com/.info/connected");

    // handle change in current user connection state
    this.listenTo(this.connectedRef, 'value', this.updateUserStatus);

    // handle changes in prescence collection
    this.listenTo(this.userListRef, 'child_added', this.renderStatus);
    this.listenTo(this.userListRef, 'child_removed', this.removeStatus);
  },

  /**
   * Updates current user status
   *
   * @param  {boolean}  isOnline  true/false - online/offline
   */
  updateUserStatus: function(isOnline) {
   if (isOnline.val()) {
      // remove from user list on disconnect
      this.myUserRef.onDisconnect().remove();

      // initial online status
      this.setUserStatus("★ online");

    } else {
      // catch all to handle any offline case
      this.setUserStatus(this.currentStatus);
    }
  },

  /**
    * Helper function to set currently authorised user state
    *
    * @param  {String}   status   string representing online status
    */
  setUserStatus: function(status) {
    // Set our status in the list of online users.
    this.currentStatus = status;
    this.myUserRef.set({ name: this.userName, status: status });
  },

  /**
   * Update UI to show a user's status
   *
   *@param  {Object}  snapshot    object with name and status
   */
  renderStatus: function(snapshot) {
    // because FireBase presence is our model the snapshot object
    // needs to be transformed into an actual BackBone model
    // to use the render apparatus in the View
    var user = snapshot.val();
    var onlineUser = new app.OnlineUser({
      name: user.name,
      status: user.status
    });
    var onlineUserView = new app.OnlineUserView({
      model: onlineUser
    });

    this.$('#user-list').prepend(onlineUserView.render().el);
  },

  /**
   * Update UI to remove a user's status
   *
   * @param  {Object}  snapshot    user object with name and status
   */
  removeStatus: function(snapshot) {
    this.$("#onlineuser-" + snapshot.val().name).remove();
  }

});
