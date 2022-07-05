// Assignment Code
//All Variables at the top
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var number = "0123456789";
var special = "!@#$%^";
var finalpwd = "";
var lastUsed = "";
var typeToUse = []; // Hold all of the user selections
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var lastUsed = "";
var typeToUse = [];
  finalpwd = "";
  var size = prompt("Please enter 8 to 128 characters");
  console.log(size);
  // then do validations, if I am doing checking.
  if (size >= 8 && size <= 128) {

    var isLowercase = confirm("include lowercase?");

    if (isLowercase) {
      typeToUse.push("lowercase"); // add selection to typeToUse array
      console.log(isLowercase);
    }

    var isUppercase = confirm("include uppercase?");
    if (isUppercase){
      typeToUse.push("uppercase"); // add selection to typeToUse array
      console.log(isUppercase);
    }

    var isNumber = confirm("include number?");
    if (isNumber){
      typeToUse.push("number"); // add selection to typeToUse array
      console.log(isNumber);
    }

    var isSpecial = confirm("include  special?");
    if (isSpecial){
      typeToUse.push("special"); // add selection to typeToUse array
      console.log(isSpecial);
    }

    for (let i = 0; i < size; i++) {
      var randomType = Math.floor(Math.random() * typeToUse.length);

      while(typeToUse[randomType] === lastUsed && typeToUse.length > 1) {
        randomType = Math.floor(Math.random() * typeToUse.length); // Random type selected
      }

      if (typeToUse[randomType] === "lowercase") {
        var positionString = Math.floor(Math.random() * 25);
        console.log(positionString);
        finalpwd = finalpwd + lowercase[positionString];
      } else if (typeToUse[randomType] === "uppercase") {
        var positionString = Math.floor(Math.random() * 25);
        console.log(positionString);
        finalpwd = finalpwd + uppercase[positionString];
      } else if (typeToUse[randomType]=== "number") {
        var positionString = Math.floor(Math.random() * 9);
        console.log(positionString);
        finalpwd = finalpwd + number[positionString];
      } else if (typeToUse[randomType]=== "special") {
        var positionString = Math.floor(Math.random() * 6);
        console.log(positionString);
        finalpwd = finalpwd + special[positionString];
      }
      lastUsed = typeToUse[randomType];
    }

    //  else{
    // //do nothing
    //  }
  } else {
    alert("invalid entry");
  }
  return finalpwd;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
