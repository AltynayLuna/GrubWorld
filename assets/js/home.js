// File for populating the cuisine dropdown and redirecting to the next page
// We will call this function from the index.html file
function goToSelectionPage(domSelect) {
	// variable to hold the value of the user's picked cuisine
	var val = domSelect.options[domSelect.selectedIndex].value;
	//displays the URL of the current page.
	window.location.href = `cuisines.html?cuisine=${val}`;
}

function populateCuisineDropdown(){
	// The "cuisines-select" element is in in index.html files
	let domSelect = document.getElementById('cuisines-select');
	let count = 1;
	Object.keys(Cuisines.choices).map(item => {
		 domSelect.options[count] = new Option(item, item);
		 count++;
	});
}
populateCuisineDropdown();

