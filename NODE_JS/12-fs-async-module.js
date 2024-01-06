const { writeFile,readFile } = require("fs");

readFile("./folder/first.txt","utf8",(err,rslt) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = rslt;
    readFile("./folder/second.txt","utf8",(err,rslt) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = rslt;
        writeFile(
            './folder/result-async.txt',
            `Async writeing file : ${first} + ${second}`,
            // {flag:"a"}  //use to add to file instade of overriding
            (err,rslt) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(rslt);
            }
        );
    });
});