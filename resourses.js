
getTwoRandom = (arr) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 2);
}


removeProductFound = (arr, productsSearched) => {
    let shop = arr.filter((product) => {
        return productsSearched.some(productSearched => {
            return productSearched.name !== product.name && productSearched.category === product.category
        });
    });
    return shop;

}

module.exports.addSuggestedProduct = (arr, productSearched) => {
    let SuggestedProduct = removeProductFound(arr, productSearched);
    SuggestedProduct = getTwoRandom(SuggestedProduct);
    
    return SuggestedProduct;
};

module.exports.productsFound = (shop, productName) => {
    return shop.filter((product) => {
        return product.name.includes(productName);
    })
};