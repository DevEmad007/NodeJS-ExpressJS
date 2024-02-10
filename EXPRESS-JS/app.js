const express = require('express');
const app = express();

//static assets
app.use(express.static('./method-public'));
//parse from post method data
app.use(express.urlencoded({ extended: false }));
// 

app.post('/login',(req,res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(200)
            .json({ success: false,msg: 'please provide name value' });
    }
    res.status(201).json({ success: true,person: name });
});

app.listen(5000,() => {
    console.log("server is listening to port 5000....");
});

