const { createReadStream,createWriteStream } = require("fs");

const steam = createReadStream("./folder/big-file.txt");

stream.on('data',(result) => {
    console.log(result);
});
stream.on('error',(err) => console.log(err));