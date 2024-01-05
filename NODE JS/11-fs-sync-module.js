// fs module read and write files on your file system

const { readFileSync,writeFileSync } = require("fs"); //    destructured method

const first = readFileSync("./folder/first.txt","utf8");
const second = readFileSync("./folder/second.txt","utf8");

// console.log(first);
// console.log(second);

// takes 3 argument path,data,flag
//
writeFileSync(
    "./folder/merge-first-second.txt",
    `merge first and second txt file "${first}" "${second}"`,
    { flag: "a" } // add content to the file instade of overriding
);