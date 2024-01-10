const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/',(req,res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

// to get the products
app.get('/api/products',(req,res) => {
    const newProducts = products.map((product) => {
        const { id,name,price } = product;
        return { id,name,price };
    });
    res.json(newProducts);
});

// gets the param and returns the matched one with id 
app.get('/api/product/:productID',(req,res) => {
    const param = req.params;
    const singleProduct = products.find(product => product.id === Number(param.productID));
    if (!singleProduct) {
        res.send(" 404 Opps!! Product Not Found ");
        return;
    }
    res.json(singleProduct);
});

// doing whatever needed to using param
app.get('/api/products/:productID/reviews/:reviewID',(req,res) => {
    console.log(req.params);
    res.send('hello world');
});


app.get("/api/v1/query",(req,res) => {
    // console.log(req.query);
    // URL: http://localhost:5000/api/v1/query?search=http
    // RESULT: {search: 'http'}

    const { search,limit } = req.query;
    let sortedProducts = [ ...products ];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true,data: [] });
    }
    res.status(200).json(sortedProducts);
});

app.get("/*",(req,res) => {
    res.send(" 404 Opps!! Page Not Found ");
});

app.listen(5000,() => {
    console.log('Server is listening on port 5000....');
});