const express = require('express');
const app = express();
const path = require('path');
const port = 9002;

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');
app.use(express.static('static'));

const orders = [
    { id: 1, productId: 1, product: 'Sport Car', quantity: 44, buyer: 'Fatima Yaro' },
    { id: 2, productId: 2, product: 'Samsung Smartphone', quantity: 120, buyer: 'Taribo West' },
    { id: 3, productId: 3, product: 'House', quantity: 6, buyer: 'Faith Pamah' },
    { id: 4, productId: 4, product: 'Beverage Drink', quantity: 10, buyer: 'Adekunle Johnson' },
    { id: 5, productId: 5, product: 'Women Boots', quantity: 39, buyer: 'Fred Collins' },
    { id: 6, productId: 6, product: 'Desktop Computer', quantity: 1, buyer: 'Ngozi Okoli', },
];

app.get('/api/orders', (req, res) => {
    res.json(orders);
});

app.get('/orders', (req, res) => {
    res.render('orders', { orders });
});

app.listen(port, () => {
    console.log(`Order service running on port ${port}`);
});
