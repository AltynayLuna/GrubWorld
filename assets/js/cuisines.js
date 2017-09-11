// This object is for populating the 2nd page after the user picks a cuisine.
// Below are the examples of 10 random cuisines.
//The Chinese cuisine has been populated with 12 meals (changed from 10 to 12 in order to keep the same number of meals in 4 rows;
//can be adapted as needed).
// The other cuisines have only one entry as an example

// -1 means we haven't clicked on anything yet
var Cuisines = {
  currentChosenMeal: -1,
  choices:
      {
          "Chinese": [
              {name: "General Tso's Chicken", image: "general-tso.jpg"},
              {name: "Crab Rangoon", image: "crab-rangoon.jpg"},
              {name: "Egg Roll", image: "egg-roll.jpg"},
              {name: "Sesame Chicken", image: "sesame-chicken.jpg"},
              {name: "Wonton Soup", image: "wonton-soup.jpg"},
              {name: "Fried Rice", image: "fried-rice.jpg"},
              {name: "Sweet and Sour Pork", image: "sweet-sour-pork.jpg"},
              {name: "Dim Sums", image: "dim-sums.jpg"},
              {name: "Hot and Sour Soup", image: "hot-sour-soup.jpg"},
              {name: "Szechwan Chilli Chicken", image: "szechwan-chilli-chicken.jpg"},
              {name: "Spring Rolls", image: "spring-rolls.jpg"},
              {name: "Stir Fry Tofu with Rice", image: "tofu-rice.jpg"},
          ],
          "French" : [
              {name: "Escargot", image: "escargot.jpg"}
          ],
          "Indian" : [
              {name: "Chicken Curry", image: "chicken-curry.jpg"}
          ],
          "Iranian" : [
              {name: "Fesenjan", image: "fesenjan.jpg"}
          ],
          "Italian" : [
              {name: "Pizza", image: "pizza.jpg"}
          ],
          "Japanese" : [
              {name: "Sushi", image: "sushi.jpg"}
          ],
          "Mexican" : [
              {name: "Tacos", image: "tacos.jpg"}
          ],
          "Philippine" : [
              {name: "Kari-Kare", image: "kare-kare.jpg"}
          ],
          "Thai" : [
              {name: "Red Curry", image: "red-curry.jpg"}
          ],
          "Vietnamese" : [
              {name: "Pho", image: "pho.jpg"}
          ]
      },
    // Method for displaying the meals and their properties (name and image)
    displayMeals: function() {

      //first, we need to figure out which cuisine we are looking at. The cuisine value is in the querystring of the url
      // which happens to look like this ?cuisine=French or ?cuisine=Chinese
      let urlParams = new URLSearchParams(window.location.search);
      this.cuisineChoice = urlParams.get('cuisine');

      //each of our cuisines choices have arrays of objects (meals)
      this.cuisineObjects = this.choices[this.cuisineChoice];

      var html = `<h1>${this.cuisineChoice}</h1><div class="choice-style">`;
      var domMealChoices = document.getElementById("meal-choices");

      //now we can loop through our list of meals
      for (var i = 0; i < this.cuisineObjects.length; i++) {

          var choice = this.cuisineObjects[i];
          html+=`
          <div id="choice-${i}" class='choice-style-unselected'>
              <h3 class='images'>${choice.name}</h3>
              <div class='images'><img data-target="#meal-info-modal" data-toggle="modal" id="${choice.name}" src="assets/images/${this.cuisineChoice}/${choice.image}"/></div>

          </div>`;
      }
      html+="</div>";
      domMealChoices.innerHTML = html;
    },

    // Method for applying the onclick function; when the user clicks on a meal, green border around the div appears
    /*
        onclick events in a loop get really weird. In order to preserver things like 'this' and the real value of your index (i),
        we need to use an anonymous function followed by the fat arrow, and call your variables by using 'let'
    */
     applyClick: function() {
        for (let i = 0; i < this.cuisineObjects.length; i++) {
          let choice = this.cuisineObjects[i];
          let domChoice = document.getElementById(`choice-${i}`);
          domChoice.onclick = function(event) {
            event.preventDefault();
            jQuery.noConflict();

            var authKey = "147c9e1b297b273ae57feabdfe0cff32";
            var appId = "22f86a29";
            var urlParams = new URLSearchParams(window.location.search);
            var cuisine = urlParams.get("cuisine");


            var queryURLBase = `http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${authKey}&q=${choice.name}`;

           $.ajax({
              url: queryURLBase,
              method: "GET",
              dataType: "jsonp",
            }).done(function(data) {
              var ingredients = data.matches[0].ingredients;
              $('.modal-title').text(data.matches[0].recipeName);
              $('.modal-body').html('Ingredients: '+ingredients);
              $('.modal-body').append('<p>Rating for this delicious food is: ' + data.matches[0].rating+'</p>');

              $('#yummly').click(function(){
                var recipeUrl = data.attribution.url+'/';
                var recipeUrl = data.attribution.url;
                window.location = recipeUrl;
                // $("#myModal").html("");
                //$(this).removeData()
              });
            });
            // <<<<<<<<<<<<<<<<<

            // >>>>>>Edamam API
            var authKeyEdam = "ad7ea72dbda5a326f238e36b364a31b0";
            var appIdEdam = "1733c051";
            var urlParams = new URLSearchParams(window.location.search);
            var mealName = choice.name;

            $.ajax({
              type: "GET",
              async: false,
              url: "https://api.edamam.com/search?q=escargot&app_id=1733c051&app_key=ad7ea72dbda5a326f238e36b364a31b0",
              success: function(response) {
                console.log(response);
                var ingredientsLines = response.hits[0].recipe.ingredientLines;
                var healthLabels = response.hits[0].recipe.healthLabels;  // array of 0:"Sugar-Conscious" / 1:"Peanut-Free" / 2:"Tree-Nut-Free"

                var nutritionFacts = response.hits[0].recipe.totalNutrients;// object of objects
                var recipe = response.hits[0].recipe.url; // just a url
                var recipeSource = response.hits[0].recipe.source; // just a string
                var cuisineChoice = urlParams.get('cuisine');

                $('.modal-footer').on('click', '#edamam', function(){
                  // update html to add foodname
                  // $("#recipe-title").prepend('<img class="food-img" src="'+)

                  // update html to add foodSource
                  $('#recipe-title').attr('data-id', mealName);
                  $('#recipe-title').text(mealName);
                  $('#recipe-source').attr('data-id', recipeSource);
                  $('#recipe-source').text(recipeSource);

                  // update html to add 10 Ingredients
                  $('#recipe-ingredients').html('<p>');
                  $('#recipe-ingredients p').text(ingredientsLines[0]);

                  for (var i=1; i<ingredientsLines.length; i++){
                    $('#recipe-ingredients').append('<p>'+ingredientsLines[i]+'</p>');
                  }

                  // update html to prepend Nutrition
                  $('#recipe-preparation').html('<table class="table">');
                  $('table').append('<thead>');
                  $('<thead>').append('<tr>');
                  $('<tr>').append('<th>');
                  $('<th>').text('Nutrition Facts');
                  $('table').append('<tbody>');

                  $.each(nutritionFacts, function( key, value ) {
                    $('<tbody>').append('<tr>');
                    $('<tr>').append('<td>');
                    $('<td>').addClass("td"+(value.label));
                    $("td"+key).text(value.label);
                    $('<td>').append('<td>');
                    $('<td>').addClass('td'+(value.quantity));
                    $('td'+(value.quantity)).text(value.quantity);
                  });
                });
              }
            });
            // <<<<<<<<<<<<<<<

            $("#myModal").modal();

            // this next if thing gets rid of the green border on the previously selected meal,
            // but ONLY IF something had been previously selected, which is why we test to see if the currentChosenMeal is greater than -1
            if(this.currentChosenMeal > -1) {
              let domCurrent = document.getElementById(`choice-${this.currentChosenMeal}`);
              domCurrent.className = "choice-style-unselected";
            }
          };
        }
    }
}
