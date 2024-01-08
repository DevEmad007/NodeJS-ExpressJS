// started operating system process
console.log('first');
setTimeout(() => {
    console.log('second');
},0);
console.log('third');
// completed and exited operating system process



// RESULT
// first
// third
// second

//??  Cz browser offloads the function like setTimeOut()