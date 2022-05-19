// Global variables to store special characters, letters (upper and lowercase), and numbers
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "~", "'", ",", "?", "."];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// Function to get options from user input
userPasswordOptions();

function userPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters do you want your password to have?"));

  if (isNaN(passwordLength)) {
    console.log("Must enter a numerical value!");
    alert("Must enter a numerical value!");
  } else if (passwordLength < 8 || passwordLength > 128) {
    console.log("Password must be between 8 and 128 characters long!");
    alert("Password must be between 8 and 128 characters long!");
  }
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
