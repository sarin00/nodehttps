// https://nodejs.org/api/documentation.html

const express = require('express');
const path = require('path');

const app = express();

// Setting static folder
//app.use(express.static(path.join(__dirname, 'website')));

// Bosy parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = [
    { name: 'Bob', age: 40 },
    { name: 'Margoe', age: 27 },
    { name: 'Edgar', age: 36 },
    { name: 'Oscar', age: 52 }
];

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Workshop</h1><p>We are learning the GET method</p>');
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

// Get all members
app.get('/api/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json(users);
});

// Get a user by name
app.get('/api/users/:name', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const newuser = users.find(users => users.name === req.params.name);
    if (newuser){
        res.json(newuser);
    }
    else {
        res.statusCode = 400;
        res.json({ msg: 'User not found' });
    }
});

// Create a user
app.post('/api/users', (req, res) => {
    if (req.body.auth === '12345workshop'){
        const newUser = {
            name: req.body.name,
            age: req.body.age
        }
    
        if (!newUser.name || !newUser.age){
            res.status(400).json({ msg: 'The name or the email is incorrect'});
        } else {
            users.push(newUser);
            res.status(200).json(users);
        }
    } else {
        res.status(400).json({ msg: 'Incorrect authentication'});
    }
    
});

// Change a user
app.put('/api/users/:name', (req, res) => {
    if (req.body.auth === '12345workshop'){
        const found = users.some(users => users.name === req.params.name);
        
        if (found){
            users.forEach(user => {
                if (user.name === req.params.name){
                    user.name = req.body.name;
                    user.age = req.body.age;
                    res.status(201).json(users);
                }
            });
        } else {
            res.status(400).json({ msg: 'Did not find a user with this name'});
        }
    } else {
        res.status(400).json({ msg: 'Incorrect authentication'});
    }
    
});


app.listen(5000, () => console.log('server started on port 5000'));

