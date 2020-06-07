// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbersArray = [1,2,3,4,5,6,7,8,9,0];
var upperCaseAlphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z"];
var lowerCaseAlphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z"];
var specialCharactersArray = ["!","@","#","$","%","^","&","*"];


// Write password to the #password input
function writePassword() {

  var passwordLength = prompt("How many characters long? (Must be between 8 and 128 characters.)");
  if(passwordLength < 8 || passwordLength > 128){
    alert("Length is invalid.");
    return;
  }

  var numbers = confirm ("Would you like to add numbers?");
  if(numbers){
    passwordText = passwordText.concat(numbersArray);

  }
  // upperCaseAlphabet = confirm ("Would you like to add upper-case letters?");
  // lowerCaseAlphabet = confirm ("Would you like to add lower-case letters?");
  // specialCharacters = confirm ("Would you like to add special characters letters?");

for(var i =0; i <passwordLength; i++) {
  password = passwordText[Math.floor(Math.random() * (passwordText-1))];
  
}

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
