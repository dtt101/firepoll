// ensure app object exists
var app = app || {};

/**
 * The Vote view handles the voting form and submission
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
        // set id and name of user voting constituency
        this.wmcId = options.wmcId;
        this.wmcName = options.wmcName;
        this.voteRef = new Firebase('https://strawpoll.firebaseio.com/constituencies/' + this.wmcId);
    },

    /**
     * Handles a vote event, gets data and sends for firebase
     *
     * @param {object}  e   Event information
     */
    addVote: function(e) {
        e.preventDefault();
        // TODO - get form field, get party, get vote type (including no vote 'abstain')
        var intendToVote = $('#voteIntent').val();
        var votingPreference = $('#votePref').val();

        // set up selection for saving
        var vote = "abstain"; // default is "abstain"
        if (intendToVote) {
            vote = votingPreference;
        }

        // create firebase reference
        var voteRef = new Firebase('https://strawpoll.firebaseio.com/constituencies/' + this.wmcId);

        // make this available in callback
        var self = this;

        // do a firebase transaction - increment vote, or create new constituency if data not present
        this.voteRef.transaction(function(currentData) {
            if (currentData !== null) {
                // increment selected option
                currentData.votes[vote]++;
                return currentData;
            } else {
                // there is no data so populate the new constituency
                // TODO: need to increment correct count for first vote
                return {votes: {labour: 0, conservative: 0,  liberal: 0, other: 0, abstain: 0}, name: self.wmcName};
            }
        }, function(error, committed, snapshot) {
            // TODO: add user facing error messages
            console.log('Was there an error? ' + error);
            console.log('Did we commit the transaction? ' + committed);
            console.log('The final value is: ' + snapshot);
        });
    }

});