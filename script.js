
let lenghtInput = document.querySelector("#password-length");
let containUpper = document.querySelector("#contains-uppercase");
let containLower = document.querySelector("#contains-lowercase");
let containNumber = document.querySelector("contains-number");
let containSymbol = document.querySelector("contains-symbols");

let minimumCharacters = function () {
  return 10 + Math.floor(Math.random() * 10)
}

var generatePassword = function () {
  const passwordLength = le;
 let characters ="";
//  let characters = []
 let  symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,."
    for (i = passwordLength ;  i>0; i--) {
      let character = symbols[(Math.floor(Math.random() * symbols.length))];
      characters +=character;
      // characters.push(character)

    }
    return characters;
    // return characters.join("");
  }



var generatePassword = function () {
    for (i = 20; i >= characters.length; i--) {
  
      minimumLowercase = function () {
        if (characters.includes(string.fromCharCode((math.floor(math.random() * 26) + 97))) >= 1) {
          console.log(characters);
        };
      },
        minimumUppercase = function () {
          if (characters.includes(string.fromCharCode((math.floor(math.random() * 26) + 65))) >= 1) {
            console.log(characters);
          }
        },
        minimumSymbols = function () {
          var symbols = "!@#$%^&*(){}[]=<>/,."
          if (characters.includes(Symbols[(math.floor(math.random() * symbols.length))]) >= 1) {
            console.log(characters);
  
          }
        },
        minumumNumbers = function () {
          if (characters.includes(string.fromCharCode((math.floor(math.random() * 10) + 48))) >= 1) {
            console.log(characters);
          }
        },
  
        minimumCharacters = function () {
          if (characters.length >= 10 && characters.length <= 20) {
            return characters;
          }
        },
  
  
    
    var generateBtn = document.querySelector("#generate");
  
      // Write password to the #password input
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
  
        passwordText.value = password;
        console.log(password);
  
      }
  
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword =>  {
  
        document.querySelector("#generate").innerHTML = "CLICK!";
        document.querySelector("#generate").id = writePassword();
      })
    }
  }

  let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

  // document.querySelector("#generate").innerHTML = "CLICK!";
  generateBtn.innerHTML = "CLICK!";


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


