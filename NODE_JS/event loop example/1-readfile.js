const { readFile,writeFile } = require('fs');

console.log('started a first task');
// CHECK FILE PATH!!!!
readFile('./folder/first.txt','utf8',(err,result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});
console.log('starting next task');

//  RESULT
// started a first task
// starting next task
// text from first.txt
// completed first task