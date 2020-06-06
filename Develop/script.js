// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  passwordLength = prompt("How many characters long? (Must be between 8 and 128 characters.)");
  if(passwordLength < 8 || passwordLength > 128){
    alert("Length is invalid.");
    return;
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
