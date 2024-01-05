//  Global Variables in Node JS

// There is no Window cz there is  no browser

//  Globals Variables are

//  __dirname   -  path to current directory
//  __filename  -  file name
//  require     -  function to use module (Common JS)
//  module      -  info about the current module (File)
//  process     -  info about the env where the program is being executed

// console.log(__filename);

const number = 10;

if (number < 14) {
    console.log('number is smaller then 14');
} else if (number < 14) {
    console.log('number is bigger then 14');
} else if (number === 14) {
    console.log("number is equal to 14");
}

console.log("First Node App !!!");
