console.log('guess.js loaded');
let friendNumber;
let guessForm = document.getElementById('guess-form');
let resultDiv = document.getElementById('result');

document.getElementById('friend-form').addEventListener('submit', function(event) {
	event.preventDefault();
	friendNumber = parseInt(event.target.elements['friend-number'].value);
	alert('Your friend has picked their number. Now you can start guessing!');
});

guessForm.addEventListener('submit', function(event) {
	event.preventDefault();
	let guess = parseInt(guessForm.elements.guess.value);
	if (!friendNumber) {
		resultDiv.innerHTML = 'Please wait for your friend to pick their number.';
	} else if (guess === friendNumber) {
		resultDiv.innerHTML = 'Congratulations, you guessed the number!';
	} else if (guess < friendNumber) {
		resultDiv.innerHTML = 'Your guess is too low.';
	} else {
		resultDiv.innerHTML = 'Your guess is too high.';
	}
});
