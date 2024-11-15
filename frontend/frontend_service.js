const express = require('express');
const app = express();
const path = require('path');
const port = 9000;

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Frontend service running on port ${port}`);
});
