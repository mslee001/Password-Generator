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
    //blank password that will receive characters as function works
    let password = '';

  //array to save all user input
  var passOptions = [];

  //ask user how long they want their password
  var passLength = prompt("How many characters should your password be?");
    console.log(passLength);
    while (passLength < 8 || passLength > 128) {
      var passLength = prompt("Please enter a number between 8-128");
      console.log(passLength);
    }
  //add the variable value to passOptions array
  passOptions.push(passLength);

  //user prompts to get input on what characters their password should include. Saving each input to the array PassOptions.
  var passLow = confirm("Do you wish to include lower case characters?");
  passOptions.push(passLow);

  var passUp = confirm("Do you wish to include upper case characters?");
  passOptions.push(passUp);

  var passSpec = confirm("Do you wish to include special characters?");
  passOptions.push(passSpec);

  var passNum = confirm("Do you wish to include numerical characters?");
  passOptions.push(passNum);

  if (passOptions[1] == false && passOptions[2] == false && passOptions[3] == false && passOptions[4] == false){
  alert("You much choose at least one option. Please try again.");
  } else {
    alert("This is what will be included in your password:" + "\n \n" + "Lowercase: " + passLow + "\n" + "Uppercase: " + passUp + "\n" + "Special characters: " + passSpec + "\n" + "Numbers: " + passNum);
  }

  //array of functions
  var functions = [

    //function to randomize lower case characters
    function randomizeLow(){
    var chars = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var charLow = chars[Math.floor(Math.random() * chars.length)];
    console.log(charLow);
    return charLow
    },

    //function to randomize upper case characters
    function randomizeUp(){
    var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var charUp = chars[Math.floor(Math.random() * chars.length)];
    console.log(charUp);
    return charUp;
    },
    
    //function to randomize special characters
    function randomizeSpe(){
    var chars = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
    var charSpe = chars[Math.floor(Math.random() * chars.length)];
    console.log(charSpe);
    return charSpe;
    },
    
    //function to randomize numbers 0-9
    function randomizeNum(){
    var charNum = Math.floor(Math.random() * 10);
    console.log(charNum);
    return charNum;
    }
  ];

  //function to randomize entire array of functions
  function randomChars(n){
    return Math.floor(Math.random() * n);
  }

  //function to randomize two selected password options
  function randomizeFunction2(y, z){
    var chars = [y, z]
    return chars[Math.floor(Math.random() * chars.length)];
  }

  //function to randomize three selected password options
  function randomizeFunction3(x, y, z){
    var chars = [x, y, z]
    return chars[Math.floor(Math.random() * chars.length)];
  }

  //if statements for the various user input options
  if (passOptions[1] == true && passOptions[2] == true && passOptions[3] == true && passOptions[4] == true){
    for (i = 0; i < passOptions[0]; i++){
      // functions[randomChars(functions.length)]();
      password = password.toString() + functions[randomChars(functions.length)]().toString();
        console.log(password);
    }
  } else if (passOptions[1] == true && passOptions[2] == true && passOptions[3] == true && passOptions[4] == false){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomChars(functions.length-1)]();
        password = password.toString() + functions[randomChars(functions.length-1)]().toString();
        console.log(password);
    }
  } else if (passOptions[1] == true && passOptions[2] == true && passOptions[3] == false && passOptions[4] == false){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomChars(functions.length-2)]();
        password = password.toString() + functions[randomChars(functions.length-2)]().toString();
        console.log(password);
    }
  } else if (passOptions[1] == true && passOptions[2] == false && passOptions[3] == false && passOptions[4] == false){
      for (i = 0; i < passOptions[0]; i++){
        // functions[0]();
        password = password.toString() + functions[0]().toString();
        console.log(password);
    }
  } else if (passOptions[1] == false && passOptions[2] == true && passOptions[3] == true && passOptions[4] == true){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction3(1, 2, 3)]();
        password = password.toString() + functions[randomizeFunction3(1, 2, 3)]().toString();
        console.log(password);
    }
  } else if (passOptions[1] == true && passOptions[2] == false && passOptions[3] == true && passOptions[4] == true){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction3(0, 2, 3)]();
        password = password.toString() + functions[randomizeFunction3(0, 2, 3)]().toString();
        console.log(password);
  }
  } else if (passOptions[1] == true && passOptions[2] == true && passOptions[3] == false && passOptions[4] == true){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction3(0, 1, 3)]();
        password = password.toString() + functions[randomizeFunction3(0, 1, 3)]().toString();
        console.log(password);
  }
  } else if (passOptions[1] == false && passOptions[2] == false && passOptions[3] == true && passOptions[4] == true){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction2(2, 3)]();
        password = password.toString() + functions[randomizeFunction2(2, 3)]().toString();
        console.log(password);
    }
  } else if (passOptions[1] == false && passOptions[2] == false && passOptions[3] == false && passOptions[4] == true){
      for (i = 0; i < passOptions[0]; i++){
      //  functions[3]();
        password = password.toString() + functions[3]().toString();
        console.log(password);
  }
  } else if (passOptions[1] == false && passOptions[2] == true && passOptions[3] == false && passOptions[4] == true){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction2(1, 3)]();
        password = password.toString() + functions[randomizeFunction2(1, 3)]().toString();
        console.log(password);
  }
  } else if (passOptions[1] == true && passOptions[2] == false && passOptions[3] == true && passOptions[4] == false){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction2(0, 2)]();
        password = password.toString() + functions[randomizeFunction2(0, 2)]().toString();
        console.log(password);
  }
  } else if (passOptions[1] == false && passOptions[2] == true && passOptions[3] == false && passOptions[4] == false){
      for (i = 0; i < passOptions[0]; i++){
        // functions[1]();
        password = password.toString() + functions[1]().toString();
        console.log(password);
  }
  } else if (passOptions[1] == false && passOptions[2] == false && passOptions[3] == true && passOptions[4] == false){
      for (i = 0; i < passOptions[0]; i++){
        // functions[2]();
        password = password.toString() + functions[2]().toString();
        console.log(password);
  }
  } else if (passOptions[1] == true && passOptions[2] == false && passOptions[3] == false && passOptions[4] == true){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction2(0, 3)]();
        password = password.toString() + functions[randomizeFunction2(0, 3)].toString();
        console.log(password);
  }
  } else if (passOptions[1] == false && passOptions[2] == true && passOptions[3] == true && passOptions[4] == false){
      for (i = 0; i < passOptions[0]; i++){
        // functions[randomizeFunction2(1, 2)]();
        password = password.toString() + functions[randomizeFunction2(1, 2)]().toString();
        console.log(password);
  }
  } return password;
}


// var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";