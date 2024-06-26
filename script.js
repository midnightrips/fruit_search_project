const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO

	let lowerCaseStr = str.toLowerCase(); //makes the search case insensitive
	results = fruit.filter(item => item.toLowerCase().includes(lowerCaseStr)); //if any of the items in the array include the string add to results array
	
	showSuggestions(results, str); //call showsuggestions to create a dropdown

	return results;
}

function searchHandler(e) {
	// TODO
	
    let userInput = e.target.value;

	search(userInput); //call search function by passing in the string inputted
}

function showSuggestions(results, inputVal) {

	// TODO

	results.forEach(result => {
		let li = document.createElement('li');
		li.innerText = result;
		suggestions.appendChild(li);


		//was going to add css class for highlighting but the hover is already created in css file
		// li.addEventListener('mouseover', function() {
		// 	li.classList.add('highlight');
		// });
		
		// li.addEventListener('mouseout', function() {
		// 	li.classList.remove('highlight');
		// });
	});
}

function useSuggestion(e) {
	// TODO
	let suggestion = e.target.innerText;
	input.value = suggestion; //change the input innerText to the innertext of the item clicked
	if(input.value === suggestion) {
		suggestions.style.display = 'none';
	}
	//need to call search again so that the drop-down reappears if something is typed again
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);