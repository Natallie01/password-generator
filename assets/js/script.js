	// Various Arrays 
	var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
	var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Variable Declaration 
var character = "";
var characterSpecialCharacter;
var characterNumericCharacter;
var characterUpperCase;
var characterLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    var character = (prompt("How many characters would you like your password to contain?"));
  
  
    // Loop if answer is outside the parameters 
    while(character  <= 7 || character >= 129) {
        alert("Password length must be between 8-128 characters Try again");
        var character = (prompt("How many characters would you like your password to contain?"));
    } 
}