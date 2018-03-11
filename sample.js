/* sample.js */

require([
    "splunkjs/mvc",
    "splunkjs/mvc/simplexml/ready!"
], function(mvc) {

    // Get the Events table
    var myEventsTable = mvc.Components.get('myevents');

    // Programmatically change a property in the Events table
    myEventsTable.getVisualization(function(eventsView) {
        eventsView.settings.set("count", 2);
    });

    // Respond to a click event
    myEventsTable.on("click", function(e) {
        // Prevent drilldown from redirecting away from the page
        e.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/en-US/splunkd/__raw/services/data/indexes', true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('X-Splunk-Form-Key', document.cookie.match(/splunkweb_csrf_token_8000=(\d+)/)[1]);
        xhr.send("name=test5&output_mode=json")


        // Console feedback
        console.log(xhr);

        // Use jQuery to fill in the text in the HTML's <div> tag
        $('#message').text(xhr);
    });

});
