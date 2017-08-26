// Psudeo Code






// NYT API Key 7fd1e0cad1704cbaa03053038356dc73

/*

* Incorporate various “optional parameters” (hard code these in initially).

* Take note of various “bugs” that appear with certain searches.
*/

// Variable to hold NYT Article Search Page
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// Adds parameters of API key and search terms
queryURL += '?' + $.param({
  'api-key': "7fd1e0cad1704cbaa03053038356dc73",
  // q = 'search query term'
  'q': "pablo picasso",
  // dates must be YYYYMMDD
  'begin_date': "19700101",
  'end_date': "19850101"
});

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function (response) {
	// body...
	console.log(response);
});

