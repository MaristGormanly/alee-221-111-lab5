const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}));

var users = require('./controller/userController');

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

app.route('/api/users')
    .get(users.getAllUsers)
    .post(users.saveUser)

app.route('/api/users/:userId')
    .get(users.getUser)
    .delete(users.deleteUser)
    .patch(users.updateUser)
    .put(users.completeUpdateUser)

let userRoute = require('./route/userRoute');
app.use('/api/user', userRoute);
let userController = require('./controller/userController');
let userService = require('./service/userService');

app.listen(1337, () => console.log('Social Media Login Page is now up!'));