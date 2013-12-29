
// app initialiser
var app = app || {};

/**
 * app setup and simple login handler
 */
$(function() {
  // set up auth
  var chatRef = new Firebase('https://farmchat.firebaseio.com');
  // callback from login
  app.auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      // TODO: handle this more elegantly
      console.log(error);
    } else if (user) {
      // authentication success

      // set up current user model from logged in user object
      var currentUser = new app.LocalUser({
        uid: user.uid,
        id: user.id,
        username: user.username,
        provider: user.provider,
        displayName: user.displayName
      });
      var userName = currentUser.get("username");

      // both views only need to know what the current online user name is
      // we pass in unique twitter id as userName 'i.e @twitter'
      new app.RoomView({currentUserName: userName});
      // set up user list
      new app.UsersView({currentUserName: userName});

      // Show main UI and hide login button
      $('#login-container').addClass('hidden');
      $('#roomview-container').removeClass('hidden');

    } else {
      // user is not logged in
      console.log('user not logged in');
    }
  });

  // setup login button event handler
  $( "#login" ).on( "click", function(e) {
    e.preventDefault();
    app.auth.login('twitter');
  });
});