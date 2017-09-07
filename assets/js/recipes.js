var authKey = "147c9e1b297b273ae57feabdfe0cff32";
var appId = "22f86a29";

//Extraction
/* URLSearchParams allows you to get the paramater values out of the url's query string
	for example, we have ?cusine=Chinese&choice=Genearl Tsao's Chicken
*/
var urlParams = new URLSearchParams(window.location.search);
var cuisine = urlParams.get("cuisine");
var choice = urlParams.get("choice");

var queryURLBase = `http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${authKey}&q=${cuisine}+${choice}`;

 $.ajax({
    url: queryURLBase,
    method: "GET",
    dataType: "jsonp",
  }).done(function(data) {
   	displayRecipes(data);
  });

  function displayRecipes(data){
  	document.getElementById("recipes").innerHTML = "Done";
  		console.log(data);

  	for (var i = 0; i < data.matches.length; i++) {
  		var currentMatch = data.matches[i];
      var recipe = $("<div class='item'>");
      var p = $("<p>");
      recipe.append(p);
      $("#displayed-recipes").prepend(recipe);
  	}
  }