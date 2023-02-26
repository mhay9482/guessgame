console.log('guess.js loaded');

let friendNumber;
let guessForm = document.getElementById('guess-form');
let resultDiv = document.getElementById('result');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjmgQXtPhGo4R3QQsVtKHL2I_A3tALgh4",
  authDomain: "guess-33aeb.firebaseapp.com",
  projectId: "guess-33aeb",
  storageBucket: "guess-33aeb.appspot.com",
  messagingSenderId: "479303758684",
  appId: "1:479303758684:web:5d1993087d25d790ac0799",
  measurementId: "G-TR5BD1GS2J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

document.getElementById('friend-form').addEventListener('submit', function(event) {
  event.preventDefault();
  friendNumber = parseInt(event.target.elements['friend-number'].value);
  alert('Your friend has picked their number. Now you can start guessing!');
  // Save the friend's number to the database
  database.ref('friendNumber').set(friendNumber);
});

guessForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let guess = parseInt(guessForm.elements.guess.value);
  // Retrieve the friend's number from the database
  database.ref('friendNumber').once('value').then(function(snapshot) {
    friendNumber = snapshot.val();
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
});
