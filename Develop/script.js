
//function to get a random INTEGER between min and max
//***INCLUSIVE SELECTION!!!
function randomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min);
}
//function to get an item from a random position in any given list
function randomItem(list) {
  return list[randomInt(0, list.length-1)];
}
//overall password generator function
function generatePassword() {
//checks if user actually input numbers
  var userInput = prompt("Please enter how long you want your password to be, between 8 and 128 characters.");
  var passLength = parseInt(userInput);

  if (isNaN(passLength)) {
    alert("Please enter a number between 8 and 128.")
    return;
  }
//checks if inputted length is between 8 and 128
  if ((passLength < 8) || (passLength > 128)) {
    alert("Password length must be between 8 and 128 characters.")
    return;
  }
//window box for each type of character, returns boolean
  var numChars = confirm("Would you like to include numbers?");
  var lowChars = confirm("Would you like to include lowercase letters?");
  var upChars = confirm("Would you like to include UPPERCASE letters?");
  var symChars = confirm("Would you like to include symbols?");
//ends process if no character types are included
  if (!numChars && !lowChars && !upChars && !symChars){
    alert("Please select at least one type of character to include.");
    return;
  }
//list of all possible characters...
  var numList = ["0","1","2","3","4","5","6","7","8","9"];
  var lowcharList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//loop to convert each lowercase letter to uppercase so that we don't have to type each one out  
  var upcharList = [];
  for (var x=0; x< lowcharList.length; x++) {
    upcharList[x] = lowcharList[x].toUpperCase();
  }
  var symcharList = ["!","@","#","$","%","^","&","*","(",")"];
//combine arrays of characters that user has chosen to use, into 1 big array
  var mastercharList = [];

  if (numChars === true) {
    mastercharList.push(numList);
  }
  if (lowChars === true) {
    mastercharList.push(lowcharList);
  }
  if (upChars === true) {
    mastercharList.push(upcharList);
  }
  if (symChars === true) {
    mastercharList.push(symcharList);
  }

//select random item from the master list (mastercharlist), then place into each spot in the array
  var generatedPass = "";

  for (var x=0; x<passLength; x++) {
    var randomList = randomItem(mastercharList);
    var randomChar = randomItem(randomList);    
    generatedPass += randomChar
  }

  return generatedPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
