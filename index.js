const express = require('express');
const bodyParser = require('body-parser');
const jsonData = require('./data');
const { addSuggestedProduct, productsFound } = require('./resourses');

const app = express();
app.use(bodyParser.json());
const shop = jsonData.products;

var productFound = {

};

app.get('/product/:name', (req, res) => {
    let products = productsFound(shop, req.params.name);
    
    if(products.length){
        let suggestedProducts = addSuggestedProduct(shop, products);
        productFound.products = products;
        productFound.suggestedProducts = suggestedProducts;

        res.send(productFound);
    }else{
        res.status(404).send("product not found");
    }
    
});



app.listen('4000', () => {
    console.log('Listening on 4000');
})