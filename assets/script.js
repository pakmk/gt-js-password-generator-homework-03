// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbersArray = ["1","2","3","4","5","6","7","8","9","0"];
var upperCaseAlphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z"];
var lowerCaseAlphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z"];
var specialCharactersArray = ["!","@","#","$","%","^","&","*"];

// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt("How many characters long? (Must be between 8 and 128 characters.)");
  if(passwordLength < 8 || passwordLength > 128){
    alert("Length is invalid.");
    return;
  }

  var passwordArray = [];

  var numbers = confirm ("Would you like to add numbers?");
  if(numbers){
    passwordArray = passwordArray.concat(numbersArray)
  }
  
  var upperCaseAlphabet = confirm ("Would you like to add upper-case letters?");
  if(upperCaseAlphabet){
    passwordArray = passwordArray.concat(upperCaseAlphabetArray)
  }
  
  var lowerCaseAlphabet = confirm ("Would you like to add lower-case letters?");
  if(lowerCaseAlphabet){
    passwordArray = passwordArray.concat(lowerCaseAlphabetArray)
  }
  
  var specialCharacters = confirm ("Would you like to add special characters letters?");
  if(specialCharacters){
    passwordArray = passwordArray.concat(specialCharactersArray)
  }

  var userPassword = [];

for(var i =0; i <passwordLength; i++) {
  userPassword.push (passwordArray[Math.floor(Math.random() * passwordArray.length)]);
}

console.log(userPassword);

return userPassword.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
