// Assignment Code
//All Variables at the top
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var number = "0123456789";
var special = "!@#$%^";
var finalpwd = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  finalpwd = "";
  var size = prompt("Please enter 8 to 128 characters");
  console.log(size);
  // then do validations, if I am doing checking.
  if (size >= 8 && size <= 128) {
    var isLowercase = confirm("include lowercase?");
    console.log(isLowercase);
    var isUppercase = confirm("include uppercase?");
    console.log(isUppercase);
    var isNumber = confirm("include number?");
    console.log(isNumber);
    var isSpecial = confirm("include  special?");
    console.log(isSpecial);
    for (let i = 0; i < size; i++) {
      var randomType = Math.floor(Math.random() *4) 
      if (randomType===0) {
        var positionString = Math.floor(Math.random() * 25);
        console.log(positionString);
        finalpwd = finalpwd + lowercase[positionString];
      } else if (randomType===1) {
        var positionString = Math.floor(Math.random() * 25);
        console.log(positionString);
        finalpwd = finalpwd + uppercase[positionString];
      } else if (randomType===2) {
        var positionString = Math.floor(Math.random() * 9);
        console.log(positionString);
        finalpwd = finalpwd + number[positionString];
      } else if (randomType===3) {
        var positionString = Math.floor(Math.random() * 6);
        console.log(positionString);
        finalpwd = finalpwd + special[positionString];
      }
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
generateBtn.addEventListener("click", writePassword);
