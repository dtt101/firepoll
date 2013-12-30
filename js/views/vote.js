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
        // TODO: move to this
        var voteRef = new Firebase('https://strawpoll.firebaseio.com/constituencies/' + this.wmcId);

        // make variables available in callback
        var self = this;
        voteRef.transaction(function(currentData) {
            console.log('do we' + self.wmcId);
            if (currentData !== null) {
                console.log(currentData);
                console.log(currentData.votes.conservative);
                currentData.votes.conservative++;
                console.log(currentData.votes.conservative);
                return currentData;
            } else {
                // TODO: there is no data here - needs to be created so return an object with our vote
                //voteRef.set({votes: {labour: 4, conservative: 0}, name: this.wmcName});
                // this continues the transaction update process
                return true;
            }
        }, function(error, committed, snapshot) {
            console.log('Was there an error? ' + error);
            console.log('Did we commit the transaction? ' + committed);
            console.log('The final value is: ' + snapshot);
        });
    }

});