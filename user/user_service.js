const express = require('express');
const app = express();
const port = 9003;

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

const users = [
    { id: 1, name: 'Adekunle Johnson', email: 'dexjohnson4real@providusbank.com', age: 28 },
    { id: 2, name: 'Ngozi Okoli', email: 'ngbabe111@microsoft.com', age: 26 },
    { id: 3, name: 'Faith Pamah', email: 'justfaith1k@gmail.com.com', age: 21 },
    { id: 4, name: 'Fatima Yaro', email: 'fat_Yaro22@yahoo.com', age: 25 },
    { id: 5, name: 'Fred Collins', email: 'collinsfred@mail.com', age: 30 },
    { id: 6, name: 'Taribo West', email: 'sir_taribo_Westa@nff.com', age: 99 },
];

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/users', (req, res) => {
    res.render('users', { users });
});

app.listen(port, () => {
    console.log(`User service running on port ${port}`);
});
