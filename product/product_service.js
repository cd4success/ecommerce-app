const express = require('express');
const app = express();
const path = require('path');
const port = 9001;

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');
app.use(express.static('static'));

const products = [
    { id: 1, name: 'Sport Car', price: 189250, image: '/images/red-car.jpg' },
    { id: 2, name: 'Samsung Smartphone', price: 430, image: '/images/samsung-phone.jpg' },
    { id: 3, name: 'House', price: 989244, image: '/images/house.jpg' },
    { id: 4, name: 'Beverage Drink', price: 300, image: '/images/smoothie.jpg' },
    { id: 5, name: 'Women Boots', price: 320, image: '/images/brown-boots.jpg' },
    { id: 6, name: 'Desktop Computer', price: 499, image: '/images/desktop-comp.jpg' },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/products', (req, res) => {
    res.render('products', { products });
});

app.listen(port, () => {
    console.log(`Product service running on port ${port}`);
});
