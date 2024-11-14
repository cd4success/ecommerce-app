const express = require('express');
const app = express();
const port = 9002;

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

const orders = [
    { id: 1, productId: 1, quantity: 44 },
    { id: 2, productId: 2, quantity: 120 },
    { id: 3, productId: 3, quantity: 6 },
    { id: 4, productId: 4, quantity: 10 },
    { id: 5, productId: 5, quantity: 39 },
    { id: 6, productId: 5, quantity: 1 },
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
