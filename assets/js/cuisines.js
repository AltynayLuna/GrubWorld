// This object is for populating the 2nd page after the user picks a cuisine.
// Below are the examples of 10 random cuisines.
//The Chinese cuisine has been populated with 12 meals (changed from 10 to 12 in order to keep the same number of meals in 4 rows;
//can be adapted as needed).
// The other cuisines have only one entry as an example
// -1 means we haven't clicked on anything yet
var Cuisines = {
    currentChosenMeal: -1,
    choices: {
        "Chinese": [{
                name: "General Tso's Chicken",
                image: "chinese-general-tso.jpg"
            },
            {
                name: "Crab Rangoon",
                image: "chinese-crab-rangoon.jpg"
            },
            {
                name: "Egg Roll",
                image: "chinese-egg-roll.jpg"
            },
            {
                name: "Sesame Chicken",
                image: "chinese-sesame-chicken.jpg"
            },
            {
                name: "Wonton Soup",
                image: "chinese-wonton-soup.jpg"
            },
            {
                name: "Fried Rice",
                image: "chinese-fried-rice.jpg"
            },
            {
                name: "Dim Sum",
                image: "chinese-dim-sum.jpg"
            },
            {
                name: "Hot and Sour Soup",
                image: "chinese-hot-sour-soup.jpg"
            },
            {
                name: "Chinese Summer Roll",
                image: "chinese-summer-roll.jpg"
            },
            {
                name: "Szechwan Chilli Chicken",
                image: "chinese-szechwan-chilli-chicken.jpg"
            },
            {
                name: "Spring Rolls",
                image: "chinese-spring-rolls.jpg"
            },
            {
                name: "Stir Fry Tofu with Rice",
                image: "chinese-tofu-rice.jpg"
            },
        ],
        "Filipino": [{
                name: "Banana Sweet Roll",
                image: "filipino-banana-roll.jpg"
            },
            {
                name: "Beef Steak",
                image: "filipino-beef-steak.jpg"
            },
            {
                name: "Beef Stew",
                image: "filipino-beef-stew.jpeg"
            },
            {
                name: "Chicken Adobo",
                image: "filipino-chicken-adobo.jpeg"
            },
            {
                name: "Crispy Pork Belly",
                image: "filipino-crispy-pork-belly.jpeg."
            },
            {
                name: "Eggplant Omelet",
                image: "filipino-eggplant-omelet.jpg"
            },
            {
                name: "Mung Bean Stew",
                image: "filipino-mung-bean-stew.jpeg"
            },
            {
                name: "Pancit Bihon",
                image: "filipino-pancit-bihon.jpeg"
            },
            {
                name: "Pork Sisig",
                image: "filipino-pork-sisig.jpeg"
            },
            {
                name: "Sour Salmon Soup",
                image: "filipino-sour-salmon-soup.jpeg"
            },
            {
                name: "Filipino Spring Roll",
                image: "filipino-lumpiang_shanghai.png"
            },
            {
                name: "Filipino Pork Mixed",
                image: "filipino-pork-mixed.jpeg"
            },

        ],
        "French": [{
                name: "Baguette with Goat Cheese",
                image: "french-baguette-cheese.jpg"
            },
            {
                name: "Apple Custard",
                image: "french-apple-custard.jpg"
            },
            {
                name: "Beef Bourguinon",
                image: "french-beef-bourguinon.jpg"
            },
            {
                name: "Escargot",
                image: "french-escargot.jpg"
            },
            {
                name: "Ratatouille",
                image: "french-ratatouille.jpg"
            },
            {
                name: "Duck Pate",
                image: "french-duck-pate.jpg"
            },
            {
                name: "Cassoulet",
                image: "french-cassoulet.jpg"
            },
            {
                name: "Coq au vin",
                image: "french-coq-au-vin.jpg"
            },
            {
                name: "Tarte Tatin",
                image: "french-tarte-tatin.jpg"
            },
            {
                name: "Salad Nicoise",
                image: "french-salad-nicoise.jpg"
            },
            {
                name: "French Fondue",
                image: "french-fondue.jpg"
            },
            {
                name: "Duck Confit",
                image: "french-duck-confit.jpg"
            },
        ],
        "Indian": [{
                name: "Butter Chicken Curry",
                image: "indian-butter-chicken.jpg"
            },
            {
                name: "Indian Dal",
                image: "indian-dal.jpg"
            },
            {
                name: "Eggplant Dip",
                image: "indian-eggplant-dip.jpg"
            },
            {
                name: "Chicken Tikka Masala",
                image: "indian-chicken-tikka-masala.jpg"
            },
            {
                name: "Kerala Chicken Roast",
                image: "indian-kerala-chicken-roast.jpg"
            },
            {
                name: "Palak Paneer",
                image: "indian-palak-paneer.jpg"
            },
            {
                name: "Masala Meatloaf",
                image: "indian-masala-meatloaf.jpg"
            },
            {
                name: "Samosa Pie",
                image: "indian-samosa.jpg"
            },
            {
                name: "Chicken Tandoori",
                image: "indian-tandoori.jpg"
            },
            {
                name: "Gulab jamun",
                image: "indian-gulab-jamun.jpg"
            },
            {
                name: "Biryani",
                image: "indian-biryani.jpg"
            },
            {
                name: "Dosa",
                image: "indian-dosa.jpg"
            },

        ],
        "Iranian": [{
                name: "Adana Kebab",
                image: "iranian-adana-kebab.jpg"
            },
            {
                name: "Baklava",
                image: "iranian-baklava.jpg"
            },
            {
                name: "Falafel Salad",
                image: "iranian-falafel-salad.jpg"
            },
            {
                name: "Hummus Veggie Wraps",
                image: "iranian-hummus-veggie-wraps.jpg"
            },
            {
                name: "Lamb Kebab",
                image: "iranian-lamb-kebab.jpg"
            },
            {
                name: "Chicken Shish Kebab",
                image: "iranian-chicken-shish-kebab.jpg"
            },
            {
                name: "Fruit Leather",
                image: "iranian-fruit-leather.jpg"
            },
            {
                name: "Tapas",
                image: "iranian-tapas.jpg"
            },
            {
                name: "Vegetarian Pesto",
                image: "iranian-vegetarian-pesto.jpg"
            },
            {
                name: "Shirazi salad",
                image: "iranian-shirazi-salad.jpg"
            },
            {
                name: "Tahdig",
                image: "iranian-tahdig.jpg"
            },
            {
                name: "Ghormeh sabzi",
                image: "iranian-ghormeh-sabzi.jpg"
            },


        ],
        "Italian": [{
                name: "Baguette-Ala-Merquez",
                image: "italian-baguette-merguez.jpg"
            },
            {
                name: "Broiled Salmon",
                image: "italian-salmon.jpg"
            },
            {
                name: "Buccatini",
                image: "italian-buccatini.jpg"
            },
            {
                name: "Combo Calzone",
                image: "italian-combo.calzone.jpg"
            },
            {
                name: "Linguine with Clams",
                image: "italian-linguine-with-clams.jpg"
            },
            {
                name: "Papparderelle Porcini",
                image: "italian-porcini.jpg"
            },
            {
                name: "Pasta Gugleilimo",
                image: "italian-pasta.jpeg"
            },
            {
                name: "Risotto",
                image: "italian-risotto.jpg"
            },
            {
                name: "Bruschetta",
                image: "italian-bruschetta.jpg"
            },
            {
                name: "Lasagna",
                image: "italian-lasagne.jpg"
            },
            {
                name: "Italian Linguine",
                image: "italian-linguine.jpg"
            },
            {
                name: "Italian Pizza",
                image: "italian-pizza.jpg"
            },
        ],
        "Japanese": [{
                name: "Yakitori",
                image: "japanese-yakitori.jpg"
            },
            {
                name: "Beef Curry",
                image: "japanese-beef-curry.jpg"
            },
            {
                name: "Beef Ramen",
                image: "japanese-beef-ramen.png"
            },
            {
                name: "Braised Pork Belly",
                image: "japanese-braised-pork-belly.jpg"
            },
            {
                name: "Gyoza",
                image: "japanese-gyoza.jpg"
            },
            {
                name: "Okonomiyaki",
                image: "japanese-okonomiyaki.jpg"
            },
            {
                name: "Soba",
                image: "japanese-soba.jpg"
            },
            {
                name: "Sushi Sashimi",
                image: "japanese-sushi-sashimi.jpg"
            },
            {
                name: "Tonkatsu",
                image: "japanese-tonkatsu.jpg"
            },
            {
                name: "Yakisoba",
                image: "japanese-yakisoba.jpg"
            },
            {
                name: "Udon",
                image: "japanese-udon.jpg"
            },
            {
                name: "Tempura",
                image: "japanese-tempura.jpg"
            },

        ],
        "Mexican": [{
                name: "Black Bean Burritos",
                image: "mexican-black-bean-burritos.jpg"
            },
            {
                name: "Shredded Chicken",
                image: "mexican-shredded-chicken.jpg"
            },
            {
                name: "Chicken Tacos",
                image: "mexican-chicken-tacos.jpg"
            },
            {
                name: "Chickpea Salad",
                image: "mexican-chickpea-salad.jpg"
            },
            {
                name: "Enchilada",
                image: "mexican-enchilada.jpg"
            },
            {
                name: "Guacamole",
                image: "mexican-guacamole.jpg"
            },
            {
                name: "Lime Chicken",
                image: "mexican-lime-chicken.jpg"
            },
            {
                name: "Macaroni Salad",
                image: "mexican-macaroni-salad.jpg"
            },
            {
                name: "Quinoa Salad",
                image: "mexican-quinoa-salad.jpg"
            },
            {
                name: "Mexican Rice",
                image: "mexican-rice.jpg"
            },
            {
                name: "Mexican Salsa",
                image: "mexican-salsa.jpg"
            },
            {
                name: "Mexican Tortilla Soup",
                image: "mexican-tortilla-soup.jpg"
            },
        ],
        "Thai": [{
                name: "Basil Pesto",
                image: "thai-basil-pesto.jpg"
            },
            {
                name: "Beef Stir Fry",
                image: "thai-beef-stir-fry.jpg"
            },
            {
                name: "Green Papaya Salad",
                image: "thai-green-papaya-salad.jpg"
            },
            {
                name: "Thai Phat Si Io",
                image: "thai-phat-si-io.jpg"
            },
            {
                name: "Lentil Soup",
                image: "thai-lentil-soup.JPG"
            },
            {
                name: "Pad Thai",
                image: "thai-pad-thai.jpg"
            },
            {
                name: "Peanut Sauce",
                image: "thai-peanut-sauce.jpg"
            },
            {
                name: "Fishcakes",
                image: "thai-fishcakes.jpg"
            },
            {
                name: "Sweet Chili Ribs",
                image: "thai-sweet-chili-ribs.jpg"
            },
            {
                name: "Larb",
                image: "thai-larb.jpg"
            },
            {
                name: "Tom Kha Gai Soup",
                image: "thai-tom-kha-gai-soup.jpg"
            },
            {
                name: "Thai Fried Rice",
                image: "thai-fried-rice.jpg"
            },

        ],
        "Vietnamese": [{
                name: "Banh Cuon",
                image: "vietnamese-banh-cuon.jpg"
            },
            {
                name: "Banh Mi",
                image: "vietnamese-banh-mi.jpg"
            },
            {
                name: "Bun Bo Hue",
                image: "vietnamese-bun-bo-hue.jpg"
            },
            {
                name: "Cao Lau",
                image: "vietnamese-cao-lau.jpg"
            },
            {
                name: "Congee",
                image: "vietnamese-congee.jpg"
            },
            {
                name: "Egg Coffee",
                image: "vietnamese-egg-coffee.jpg"
            },
            {
                name: "Fishcake",
                image: "vietnamese-fishcake.jpg"
            },
            {
                name: "Goi Cuon",
                image: "vietnamese-goi-cuon.jpg"
            },
            {
                name: "Mini Pancake",
                image: "vietnamese-mini-pancake.jpg"
            },
            {
                name: "Pho",
                image: "vietnamese-pho.jpg"
            },
            {
                name: "Water Spinach",
                image: "vietnamese-water-spinach.jpg"
            },
            {
                name: "Xoi",
                image: "vietnamese-xoi.jpg"
            },

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

        var html = `<h1 class="recipe-header">${this.cuisineChoice}: Top 12 Meals</h1><div class="choice-style">`;
        var domMealChoices = document.getElementById("meal-choices");

        //now we can loop through our list of meals
        for (var i = 0; i < this.cuisineObjects.length; i++) {

            var choice = this.cuisineObjects[i];
            html += `
          <div id="choice-${i}" class='col-sm-4'>
            <div class="zoom">
              <div class='images'>
                <img data-target="#meal-info-modal" data-toggle="modal" class="img-responsive"
                height="100%" width="100%"
                id="${choice.name}" src="assets/images/${this.cuisineChoice}/${choice.image}"/></div>
                <h3 class='images'>${choice.name}</h3>
            </div>
          </div>`;
        }
        html += "</div>";
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

                $("#myModal").modal();
                // this next if thing gets rid of the green border on the previously selected meal,
                // but ONLY IF something had been previously selected, which is why we test to see if the currentChosenMeal is greater than -1
                if (this.currentChosenMeal > -1) {
                    let domCurrent = document.getElementById(`choice-${this.currentChosenMeal}`);
                    domCurrent.className = "choice-style-unselected";
                }

                $.ajax({
                    url: queryURLBase,
                    method: "GET",
                    dataType: "jsonp",
                }).done(function(data) {
                    // console.log(data);
                    var ingredients = data.matches[0].ingredients;
                    $('.modal-title').text(data.matches[0].recipeName);
                    $('.modal-body').html('Ingredients: ' + ingredients);
                    $('.modal-body').append('<p>Rating for this delicious food is: ' + data.matches[0].rating + '</p>');

                    $('#yummly').click(function() {
                        // var mealName = (data.matches[0].recipeName).replace(/ /g, "-");
                        // var recipeUrl = data.attribution.url + mealName;

                        var recipeUrl = data.attribution.url + '/';
                        var recipeUrl = data.attribution.url;
                        window.location = recipeUrl;
                        $("#myModal").html("");
                        $(this).removeData()
                    });
                });
                // Edamam API
                var authKeyEdam = "ad7ea72dbda5a326f238e36b364a31b0";
                var appIdEdam = "1733c051";
                var urlParams = new URLSearchParams(window.location.search);



                $.ajax({
                    type: "GET",
                    async: false,
                    url: `https://api.edamam.com/search?q=${choice.name}&app_id=1733c051&app_key=ad7ea72dbda5a326f238e36b364a31b0`,
                    success: function(d) {
                        console.log(d);
                        $('#edamam').on('click', function() {
                            $('.modal-body').append('<p>Nutrition facts: ' + d.matches[0].rating + '</p>');

                        });
                    }
                });


            };
        }
    }
}