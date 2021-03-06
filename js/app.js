
// app initialiser
var app = app || {};

/**
 * main app: postcode lookup and show results handler
 */
$(function() {

    // handle find button
    $("#btnFind").on("click", function(e) {
        e.preventDefault();

        // get postcode from form field
        var postcode = $('#txtPostcode').val();
        if (postcode.length == 0) {
            alert('Please enter a postcode');
            return;
        }

        // find parliamentary constituency from postcode using mapit api
        var mapitAPI = "http://mapit.mysociety.org/postcode/" + postcode;
        var wmcId = 0;
        var wmcName = '';
        $.getJSON(mapitAPI)
            .done(function(data) {
                $.each(data.areas, function(key, val) {
                    if (val.type === 'WMC') {
                        wmcId = val.id;
                        wmcName = val.name;
                    }
                });
                // success - create and show voting view
                console.log('about to create view in app.js');
                new app.VoteView({wmcId: wmcId, wmcName: wmcName});
                // Show main UI and hide postcode search button
                $('#postcode-container').addClass('hidden');
                $('#vote-container').removeClass('hidden');
            })
            .fail(function() {
                // TODO handle error response and postcode not found
                console.log("error fetching postcode");
            });

    });

    // handle show results
    $("#showResults").on("click", function(e) {
        // show results view
        new app.ResultsView();
        $('table#results').removeClass('hidden');
    });
});