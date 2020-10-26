// Assignment code here

function generatePassword() {
    //accepts user input for length
    var lengthPrompt = function () {
        var length = window.prompt("Please choose any length between 8 & 128");
        // if nothing is typed, retry
        if (length === "" || length === null || length <= 7 || length >= 129) {
            alert("Invalid option. Try Again")
            return lengthPrompt();
        } else {
            // return user number input
            console.log(length);
            return length;
        }
    };

    var upperCaseF = function () {
        var upCase = window.prompt("Would You like uppercase letters? Yes or No");
        var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (upCase === "YES" || upCase === "yes" || upCase === "Yes") {
            for (var i = 0, n = charSetUpper.length; i < length; ++i) {
                retValUp += charSetUpper.charAt(Math.floor(Math.random() * n))
            }
            return retValUp;
        } else if (upCase === "NO" || upCase === "no" || upCase === "No") {
            retValUp === null;
            return retValUp;
        }
    };

    var lowerCaseF = function () {
        var lowCase = window.prompt("Would you like lowercase letters? Yes or No?");
        var charSetLower = "abcdefghijklmnopqrstuvwxyw";
        var retVal = "";
        // if yes
        if (lowCase === "YES" || lowCase === "yes" || lowCase === "Yes") {
            for (var i = 0, n = charSetLower.length; i < length; ++i) {
                retVal += charSetLower.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            // if no, Return nothing
        } else if (lowCase === "NO" || lowCase === "no" || lowCase === "No") {
            retVal === null;
            return retVal;
        }
    };

    var numberPrompt = function () {
        var numberPrompt = window.prompt("Would you like numbers? Yes or No?");
        // if yes
        if (numberPrompt === "YES" || numberPrompt === "yes" || numberPrompt === "yes") {
            for (var i = 0, n = numberSet.length; i < length; ++i) {
                retNum += numberSet.charAt(Math.floor(Math.random() * n));
            }
            return retNumber;
            // if no, Return nothing
        } else if (numberPrompt === "NO" || numberPrompt === "no" || numberPrompt === "No") {
            retNumber === null;
            return retNumber;
        }
    };

    // Special Characters Funcion
    var specialChar = function () {
        var specialPrompt = window.prompt("Would you like special characters? Yes or No?");
        var specialSet = "!#$%&'()*+,-./:;/<=>?@[]^_`{|}~";
        var retSpecial = "";
        // if yes
        if (specialPrompt === "YES" || specialPrompt === "yes" || specialPrompt === "Yes") {
            for (var i = 0, n = specialSet.length; i < length; ++i) {
                retSpecial += specialSet.charAt(Math.floor(Math.random() * n));
            }
            return retSpecial;
            // if no, Return nothing
        } else if (specialPrompt === "NO" || specialPrompt === "no" || specialPrompt === "No") {
            retSpecial === null;
            return retSpecial;
        }
    };


    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

        generatePassword()
    }

};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    // ask for password length
    askLength();
    // ask for character types. 
    askChars();
    // generate the password
    let password = generatePassword(output);
    // find the text input box for the generated password
    const passwordText = document.querySelector("#password");
    // change value of text box to generated password. 
    passwordText.value = password;
};
