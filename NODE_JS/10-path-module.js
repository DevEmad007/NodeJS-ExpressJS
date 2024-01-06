const path = require("path");

const sep = path.sep;
const filePath = path.join("folder","subfolder","test.txt"); // relative path
const base = path.basename(filePath); // paths base file name
const absolute = path.resolve(__dirname,"folder","subfolder","test.txt"); // absolute path
