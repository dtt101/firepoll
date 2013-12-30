// ensure app object exists
var app = app || {};

/**
 * The Vote view handles the voting form
 */
app.VoteView = Backbone.View.extend({
    el: '#vote',

    // event handlers
    events:{
        'click #btnVote': 'addVote'
    },

    /**
     * Set up VoteView
     *
     * @param  {object}  options   a dictionary containing wmcId and wmcName properties
     */
    initialize: function(options) {
        // set id of user voting constituency
        this.wmcId = options.wmcId;
        this.wmcName = options.wmcName;
        console.log('init called in vote view');
        console.log(options.wmcId);
        console.log(this.wmcId);

        // TODO - set up dynamic collection based on constituency?
        // TODO - write direct to firebase?
    },

    /**
     * Handles a vote event, gets data and adds to collection
     *
     * @param {object}  e   Event information
     */
    addVote: function(e) {
        e.preventDefault();
        console.log('vote called in vote view');
        // TODO - get form field, get party, get vote type (including no vote 'abstain')
        // Increment selected party rank by 1.
        console.log(this.wmcId);
        var voteRef = new Firebase('https://strawpoll.firebaseio.com/constituencies/' + this.wmcId);

        // TODO: create helper that checks if firebase ref exists
        // if not then create it with basic list of parties at 0 and our vote - use set
        // else just increment vote here - use transaction

        // first check if it exists
        // if so then do transaction
        // if not then set
        // Tests to see if /users/<userId> has any data.
        // console.log('checking existence of ' + this.wmcId);
        voteRef.once('value', function(snapshot) {
            console.log('in once callback');
            console.log(snapshot);
            var exists = (snapshot.val() !== null);
            console.log(exists);
        });
        // voteRef.set({votes: {labour: 4, conservative: 0}, name: this.wmcName});
        // voteRef.transaction(function(currentVotes) {
        //     return currentVotes + 1;
        //     console.log('votes completes');
        // });
        // voteRef.transaction(function(currentVotes) {
        //   if (currentData === null) {
        //     return 1;
        //   } else {
        //     console.log('Data already exists.');
        //     return; // Abort the transaction.
        //   }
        // }, function(error, committed, snapshot) {
        //   if (error)
        //     console.log('Transaction failed abnormally!', error);
        //   else if (!committed)
        //     console.log('We aborted the transaction (because wilma already exists).');
        //   else
        //     console.log('User wilma added!');
        //   console.log('Wilma\'s data: ', snapshot.val());
        // });
    }

});