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
				{name: "Escorgot", image: "escargot.jpg"}
			],
			"Indian" : [
				{name: "Chicken Curry", image: "chickem-curry.jpg"}
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
				{name: "Kare-kare", image: "kare-kare.jpg"}
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
				<div class='images'><img src="assets/images/${choice.image}"/></div>

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
			let domChoice = document.getElementById(`choice-${i}`);

			domChoice.onclick = () => {
				// this next if thing gets rid of the green border on the previously selected meal, 
				// but ONLY IF something had been previously selected, which is why we test to see if the currentChosenMeal is greater than -1
				if(this.currentChosenMeal > -1) {
					let domCurrent = document.getElementById(`choice-${this.currentChosenMeal}`);
					domCurrent.className = "choice-style-unselected";
				}

				let mealName = this.cuisineObjects[i].name;
				if(!page){
					alert("Please select either a recipe or restaurant");
					return;
				}
				document.getElementById("loading").style.visibility = "visible";
				setTimeout(()=>{
					window.location.href = `${page}?cuisine=${this.cuisineChoice}&choice=${mealName}`;
				},500);
				domChoice.className = "choice-style-selected";
				this.currentChosenMeal = i;
			};
		}
	}
}

