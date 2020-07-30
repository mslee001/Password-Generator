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

function generatePassword(){
  //blank password that will receive characters as function goes thru its process
  let password = '';

  //ask user how long they want their password
  var passLength = prompt("How many characters should your password be?");
    console.log(passLength);
    //validate that user input is between 8-128 characters
    while (passLength < 8 || passLength > 128) {
      var passLength = prompt("Please enter a number between 8-128");
      console.log(passLength);
    }

  //user prompts to get input on what characters their password should include
  var passLow = confirm("Do you wish to include lower case characters?");
  var passUp = confirm("Do you wish to include upper case characters?");
  var passSpec = confirm("Do you wish to include special characters?");
  var passNum = confirm("Do you wish to include numerical characters?");

  //validation that user must choose at least one option to proceed
  if (passLow == false && passUp == false && passSpec == false && passNum == false){
  alert("You much choose at least one option. Please try again.");
  } else {
    //validation of the chosen options
    alert("This is what will be included in your password:" + "\n \n" + "Password Length: " + passLength + "\n" + "Lowercase: " + passLow + "\n" + "Uppercase: " + passUp + "\n" + "Special characters: " + passSpec + "\n" + "Numbers: " + passNum);
  }
  //functions stored in an array to access later
  var functions = [

    //function to randomize lower case characters
    function randomizeLow(){
    var chars = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return chars[Math.floor(Math.random() * chars.length)];
    },

    //function to randomize upper case characters
    function randomizeUp(){
    var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return chars[Math.floor(Math.random() * chars.length)];
    },
    
    //function to randomize special characters
    function randomizeSpe(){
    var chars = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
    return chars[Math.floor(Math.random() * chars.length)];
    },
    
    //function to randomize numbers 0-9
    function randomizeNum(){
    return Math.floor(Math.random() * 10);
    }
  ];
  //the function to randomize array of functions based on user selections. 
  function randomChars(){
    var randFunctions = [];
    //If statements to push the corresponding function index into array.
    if (passLow) {
      randFunctions.push("0");
    } if (passUp) {
      randFunctions.push("1");
    } if (passSpec) {
      randFunctions.push("2");
    } if (passNum) {
      randFunctions.push("3");
    }
    return randFunctions[Math.floor(Math.random() * randFunctions.length)];
  }

//loop to go through the process each time for the length of the password
for (i = 0; i < passLength; i++) {
  password = password.toString() + functions[randomChars()]().toString();
}
//returns the generated password
  return password;
}