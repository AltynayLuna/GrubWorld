// This object is for populating the 2nd page after the user picks a cuisine.
// Below are the examples of 10 random cuisines.
//The Chinese cuisine has been populated with 12 meals (changed from 10 to 12 in order to keep the same number of meals in 4 rows;
//can be adapted as needed).
// The other cuisines have only one entry as an example

// -1 means we haven't clicked on anything yet
var Cuisines = {
    currentChosenMeal: -1,
    choices:
    //     {
    // var Cuisines = {
    //  currentChosenMeal: -1,
    //  choices:
         {
            "Chinese": [
                {name: "General Tso's Chicken", image: "chinese-general-tso.jpg"},
                {name: "Crab Rangoon", image: "chinese-crab-rangoon.jpg"},
                {name: "Egg Roll", image: "chinese-egg-roll.jpg"},
                {name: "Sesame Chicken", image: "chinese-sesame-chicken.jpg"},
                {name: "Wonton Soup", image: "chinese-wonton-soup.jpg"},
                {name: "Fried Rice", image: "chinese-fried-rice.jpg"},
                {name: "Sweet and Sour Pork", image: "chinese-sweet-sour-pork.jpg"},
                {name: "Dim Sum", image: "chinese-dim-sum.jpg"},
                {name: "Hot and Sour Soup", image: "chinese-hot-sour-soup.jpg"},
                {name: "Chinese Summer Roll", image: "chinese-summer-roll"},
                {name: "Szechwan Chilli Chicken", image: "chinese-szechwan-chilli-chicken.jpg"},
                {name: "Spring Rolls", image: "chinese-spring-rolls.jpg"},
                {name: "Stir Fry Tofu with Rice", image: "chinese-tofu-rice.jpg"},
            ],
            "Filipino" : [
                {name: "Banana Sweet Roll", image: "filipino-banana-roll.jpg"},
                {name: "Beef Steak", image: "filipino-beef-steak.jpg"},
                {name: "Beef Stew", image: "filipino-beef-stew.jpg"},
                {name: "Chicken Adobo", image: "filipino-chicken-adobo.jpg"},
                {name: "Crispy Pork Belly", image: "filipino-crispy-pork-belly.jpg."},
                {name: "Eggplant Omelet", image: "filipino-eggplant-omelet.jpg"},
                {name: "Mung Bean Stew", image: "filipino-mung-bean-stew.jpg"},
                {name: "Pancit Bihon", image: "filipino-pancit-bihon.jpg"},
                {name: "Pork Sisig", image: "filipino-pork-sisig.jpeg"},
                {name: "Sour Salmon Soup", image: "filipino-sour-salmon-soup.jpg"},
                {name: "Filipino Spring Roll", image: "lumpiang_shanghai.png"},
            ],
            "French" : [
                {name: "Baguette with Goat Cheese", image: "french-baguette-cheese.jpg"},
                {name: "Apple Custard", image: "french-apple-custard.jpg"},
                {name: "Beef Bourguinon", image: "french-beef-bourguinon.jpg"},
                {name: "Escargot", image: "french-escargot.jpg"},
                {name: "Ratatouille", image: "french-ratatouille.jpg"},
                {name: "Salmon Burger", image: "french-salmon-burger.jpg"},
                {name: "Oatmeal Raspberry Cake", image: "french-oatmeal-cake.png"},
                {name: "Ouef Ala Coque", image: "french-oeuf.jpg"},
                {name: "Omelette Fromage Et Jambon", image: "french-omelette-fromage.jpg"},
                {name: "Salad Nicoise", image: "french-salad-nicoise.jpg"},
                {name: "Salad Paysanne", image: "french-salad-paysanne.jpg"},
                {name: "Smoked Salmon Appetizer", image: "french-smoked-salmon.jpg"},
            ],
            "Indian" : [
                {name: "Butter Chicken", image: "indian-butter-chicken.jpg"},
                {name: "Indian Dal", image: "indian-dal.jpg"},
                {name: "Eggplant Dip", image: "indian-eggplant-dip.jpg"},
                {name: "Eggplant", image: "indian-eggplant.jpg"},
                {name: "Kerala Chicken Roast", image: "indian-kerala-chicken-roast.jpg"},
                {name: "Lamb Biryani", image: "indian-lamb-biryani.jpg"},
                {name: "Masala Meatloaf", image: "indian-masala-meatloaf.jpg"},
                {name: "Samosa Pie", image: "indian-samosa-pie.png"},
                {name: "Chicken Tandoori", image: "indian-tandoori.jpg"},
                {name: "Vegetable Fritters", image: "indian-veggie-fritters.jpg"},
            ],
            "Iranian" : [
                {name: "Adana Kebab", image: "iranian-adana-kebab.jpg"},
                {name: "Baklava", image: "iranian-baklava.jpg"},
                {name: "Falafel Salad", image: "iranian-falafel-salad.jpg"},
                {name: "Hummus Veggie Wraps", image: "iranian-hummus-veggie-wraps.jpg"},
                {name: "Lamb Kebab", image: "iranian-lamb-kebab.jpg"},
                {name: "Lamb Kebab", image: "iranian-kebab.jpg"},
                {name: "Chicken Kebabs", image: "iranian-chicken-kebabs.jpg"},
                {name: "Chicken Shish Kebab", image: "iranian-chicken-shish-kebab.jpg"},
                {name: "Fruit Leather", image: "iranian-fruit-leather.jpg"},
                {name: "Tapas", image: "iranian-tapas.jpg"},
                {name: "Vegetarian Pesto", image: "iranian-vegetarian-pesto.jpg"},
            ],
            "Italian" : [
                {name: "Baguette-Ala-Merquez", image: "italian-baguette-merguez.jpg"},
                {name: "Broiled Salmon", image: "italian-broiled-salmon.jpg"},
                {name: "Buccatini", image: "italian-buccatini.jpg"},
                {name: "Combo Calzone", image: "italian-combo.calzone.jpg"},
                {name: "Fettuccine Alaska", image: "italian-fettuccine-alaska.jpg"},
                {name: "Linguine with Clams", image: "italian-linguine.jpg"},
                {name: "Papparderelle Porcini", image: "italian-porcini.jpg"},
                {name: "Pasta Gugleilimo", image: "italian-pasta.jpg"},
                {name: "Squid Ink Risotto", image: "italian-risotto.jpg"},
            ],
            "Japanese" : [
                {name: "Karaage", image: "japanese-karaage.jpg"},
                {name: "Beef Curry", image: "japanese-beef-curry.jpg"},
                {name: "Beef Ramen", image: "japanese-beef-ramen.png"},
                {name: "Braised Pork Belly", image: "japanese-braised-pork-belly.jpg"},
                {name: "Gyoza", image: "japanese-gyoza.jpg"},
                {name: "Katsudon", image: "japanese-katsudon.jpg"},
                {name: "Sesame Sugar Snaps", image: "japanese-sesame-sugar-snaps.jpg"},
                {name: "Sushi Sashimi", image: "japanese-sushi-sashimi.jpg"},
                {name: "Tonkatsu", image: "japanese-tonkatsu.jpg"},
                {name: "Yakisoba", image: "japanese-yakisoba.jpg"},
            ],
            "Mexican" : [
                {name: "Black Bean Burritos", image: "mexican-black-bean-burritos.jpg"},
                {name: "Shredded Chicken", image: "mexican-chicken-shredded.jpg"},
                {name: "Chicken Tacos", image: "mexican-chicken-tacos.jpg"},
                {name: "Chickpea Salad", image: "mexican-chickpea-salad.jpg"},
                {name: "Enchilada", image: "mexican-enchilada.jpg"},
                {name: "Guacamole", image: "mexican-guacamole.jpg"},
                {name: "Lime Chicken", image: "mexican-lime-chicken.jpg"},
                {name: "Macaroni Salad", image: "mexican-macaroni-salad.jpg"},
                {name: "Quinoa Salad", image: "mexican-quinoa-salad.jpg"},
                {name: "Mexican Rice", image: "mexican-rice.jpg"},
                {name: "Mexican Salsa", image: "mexican-salsa.jpg"},
                {name: "Mexican Tortilla Soup", image: "mexican-tortilla-soup.jpg"},
            ],
            "Thai" : [
                {name: "Basil Pesto", image: "thai-basil-pesto.jpg"},
                {name: "Beef Stir Fry", image: "thai-beef-stir-fry.jpg"},
                {name: "Garlic Chicken", image: "thai-garlic-chicken.jpg"},
                {name: "Lemongrass Dipping Sauce", image: "thai-lemongrass-dipping-sauce.jpg"},
                {name: "Lentil Soup", image: "thai-lentil-soup.JPG"},
                {name: "Pad Thai", image: "thai-pad-thai.jpg"},
                {name: "Peanut Sauce", image: "thai-peanut-sauce.jpg"},
                {name: "Salmon Fishcakes", image: "thai-salmon-fishcakes.jpg"},
                {name: "Sweet Chili Ribs", image: "thai-sweet-chili-ribs.jpg"},
                {name: "Veggie Salad", image: "thai-veggie-salad.jpg"},
                {name: "Tom Kha Gai Soup", image: "thai-tom-kha-gai-soup.jpg"},
            ],
            "Vietnamese" : [
                {name: "Com Ty Cam Thap", image: "vietnamese-com.png"},
                {name: "Goi Cuon Tom", image: "vietnamese-freshgoi.png"},
                {name: "Pho Thai Bo Vien", image: "vietnamese-pho-vien.png"},
                {name: "Special Pho", image: "vietnamese-special-pho.png"},
                {name: "Vietnamese Meatballs", image: "vietnamese-meatballs.jpg"},
                {name: "Vietnamese Pork Sandwich", image: "vietnamese-pork-sandwich.jpg"},
                {name: "Spring Rolls", image: "vietnamese-spring-rolls.jpg"},
                {name: "Wonton Soup", image: "vietnamese-wonton-soup.jpg"},
                {name: "Vietnamese Stir Fry", image: "vietnamese-stir-fry.jpg"},
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
                

                var queryURLBase = `http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${authKey}&q=${cuisine}+${choice.name}`;

                 $.ajax({
                    url: queryURLBase,
                    method: "GET",
                    dataType: "jsonp",
                  }).done(function(data) {
                        console.log(data);
                        var ingredients = data.matches[0].ingredients;
                        $('.modal-title').text(data.matches[0].recipeName);
                        $('.modal-body').html('Ingredients: '+ingredients);
                        $('.modal-body').append('<p>Rating for this delicious food is: ' + data.matches[0].rating+'</p>');
                        $('.modal-footer').append('<button type="button" class="btn btn-default" data-dismiss="modal"></button>')
                        // <a href="'+data.attribution.url+data.matches[0].recipeName+'</a>
                  });

                $("#myModal").modal('show');

                // this next if thing gets rid of the green border on the previously selected meal,
                // but ONLY IF something had been previously selected, which is why we test to see if the currentChosenMeal is greater than -1
                if(this.currentChosenMeal > -1) {
                    let domCurrent = document.getElementById(`choice-${this.currentChosenMeal}`);
                    domCurrent.className = "choice-style-unselected";
                }

                    window.onclick = function(event) {
                        if (event.target == myModal) {
                            modal.style.display = "none";
                        }
                    }
            };
        }
    }
}