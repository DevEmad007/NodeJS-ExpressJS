const { writeFile } = require("fs");

for (let i = 0; i < 150; i++) {
    writeFile(
        "./folder/big-file.txt",
        `Code loop Take : ${i}`,
        { flag: 'a' },
        (err,result) => {
            if (err) {
                return;
            }
            console.log(result);
        });
}