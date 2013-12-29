// ensure app object exists
var app = app || {};

/**
 * Model for a local authorised user
 */
app.LocalUser = Backbone.Model.extend({
  defaults: {
    uid: 'None', // unique id
    id: 'No twitter ID', // users twitter ID
    username: 'No twitter username', // users twitter username
    provider: 'None', // login provider 'twitter'
    displayName: 'None'
  }
});