const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send(' abu bakar siddique');
})
const users = [
    { id: 1, name: 'abu bakar' },
    { id: 2, name: 'didar' },
    { id: 3, name: 'imam' },
    { id: 4, name: 'shabuj' },
    { id: 3, name: 'shakil' },
]
app.get('/users', (req, res) => {
    console.log('query', req.query)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users);
    }
})


app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.listen(port, () => {
    console.log('example app listening', port);
})