const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/signup', function (req, res) {
    res.sendFile('signup.html', {root: './client/views'})
})

app.get('/home', function (req, res) {
    res.sendFile('home.html', {root: './client/views'})
})

app.use(express.static('client/public'));

app.listen(1337, () => console.log('Social Media Login Page is now up!'));
