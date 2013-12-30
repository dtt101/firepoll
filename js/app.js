
// app initialiser
var app = app || {};

/**
 * app setup and simple login handler
 */
$(function() {
    
    // create a view for postcode lookup
    // do postcode lookup, if success then create pollview
    // if not success show error
    
    // create a view for questions
    //http://mikeygee.com/blog/backbone.html
    
    // handle find button click
    $("#btnFind").on("click", function(e) {
        e.preventDefault();
        
        // get postcode from form field
        var postcode = $('#txtPostcode').val();
        
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
                console.log(wmcId);
                console.log(wmcName);
                // TODO: show questions and populate constituency name and id
                // TODO: create backbone view
            })
            .fail(function() {
                // TODO handle error response and postcode not found
                console.log("error fetching postcode");
            });
        
    });
});