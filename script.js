// Global variables to store special characters, letters (upper and lowercase), and numbers
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "~", "'", ",", "?", "."];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// Function to get options from user input
function userPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters do you want your password to have?"));
  // if user clicks cancel, terminate the program (not working)
  if (passwordLength === null) {
    return;
  } 
  if(isNaN(passwordLength)) {
    console.log("Must enter a numerical value!");
    alert("Must enter a numerical value!");
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    console.log("Password must be between 8 and 128 characters long!");
    alert("Password must be between 8 and 128 characters long!");
  }
  var confirmSpecialCharacters = confirm("Do you want special characters in your password?");
  var confirmNumbers = confirm("Do you want numbers in your password?");
  var confirmUppercase = confirm("Do you want uppercase letters in your password?");
  var confirmLowercase = confirm("Do you want lowercase letters in your password?");
  if (!confirmSpecialCharacters && !confirmNumbers && !confirmUppercase && !confirmLowercase) {
    alert("Sorry, must choose at least one charactre type!");
    return;
  } 

  // Stores the user's options in object
  var userPasswordOptions = {
    length: passwordLength,
    specialCharacters: confirmSpecialCharacters,
    numbers: confirmNumbers,
    lowerCase: confirmLowercase,
    upperCase: confirmUppercase
  };
  return userPasswordOptions;
}

function chooseRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;
}

function generatePassword() {
  var passwordOptions = userPasswordOptions();
  // stores the password
  var passwordArray = [];
  // stores possible characters
  var characters = [];
  //stores character types that were chosen
  var chosenCharacters = [];

  if (passwordOptions.specialCharacters) {
    characters = characters.concat(specialCharacters);
    chosenCharacters.push(chooseRandomCharacter(specialCharacters));
    console.log(chosenCharacters);
  }

  if (passwordOptions.upperCaseLetters) {
    characters = characters.concat(upperCaseLetters);
    chosenCharacters.push(chooseRandomCharacter(upperCaseLetters));
    console.log(chosenCharacters);
  }

  if (passwordOptions.lowerCaseLetters) {
    characters = characters.concat(lowerCaseLetters);
    chosenCharacters.push(chooseRandomCharacter(lowerCaseLetters));
    console.log(chosenCharacters);
  }

  if (passwordOptions.numbers) {
    characters = characters.concat(numbers);
    chosenCharacters.push(chooseRandomCharacter(numbers));
    console.log(chosenCharacters);
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    var character = chooseRandomCharacter(characters);
    passwordArray.push(character);
  }

  for (var i = 0; i < chosenCharacters.length; i++) {
    var character = chooseRandomCharacter(characters);
    passwordArray[i] = chosenCharacters[i];
  }

  return passwordArray.join("");

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // userPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
