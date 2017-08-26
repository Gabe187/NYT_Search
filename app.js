// Psudeo Code






// NYT API Key 7fd1e0cad1704cbaa03053038356dc73

/*
* Create the AJAX call needed to retrieve data then console.log all of the relevant fields.

* Incorporate various “optional parameters” (hard code these in initially).

* Take note of various “bugs” that appear with certain searches.

## All-Together

* Display the HTML content!!
*/

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7fd1e0cad1704cbaa03053038356dc73";

// From NYT 
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "7fd1e0cad1704cbaa03053038356dc73"
// });

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function (response) {
	// body...
	console.log(response);
});

