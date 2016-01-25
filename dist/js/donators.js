var Patrons = Parse.Object.extend("Patrons");
var query = new Parse.Query(Patrons);
query.limit(100);
query.descending("donation");
query.find({
    success: function(results) {
       for (var i = 0; i < results.length; i++) { 
           var object = results[i];
               (function($) {
                   $('#results-table').append('<tr><td>' + object.get('name') + '</td><td>' + '$' + object.get('donation') + '</td></tr>');
               })(jQuery);
       }
    },
    error: function(error) {
        alert("Error: " + error.code + " " + error.message);
    }
});