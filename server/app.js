const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}));

var users = require('./controller/userController');
var posts = require('./controller/socialMediaController');

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/signup', function (req, res) {
    res.sendFile('signup.html', {root: './client/views'})
})

app.get('/home', function (req, res) {
    res.sendFile('home.html', {root: './client/views'})
})

app.get('/createPost', function (req, res) {
    res.sendFile('createPost.html', {root: './client/views'})
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

app.route('/api/posts')
    .get(posts.getAllPosts)
    .post(posts.savePost)

app.route('/api/posts/:postId')
    .get(posts.getPost)
    .delete(posts.deletePost)
    .patch(posts.updatePost)
    .put(posts.completeUpdatePost)

let userRoute = require('./route/userRoute');
let socialMediaRoute = require('./route/socialMediaRoute');
app.use('/api/user', userRoute);
app.use('/api/post', socialMediaRoute);
let userController = require('./controller/userController');
let socialMediaController = require('./controller/socialMediaController');
let userService = require('./service/userService');
let socialMediaService = require('./service/socialMediaService');

app.listen(1337, () => console.log('Social Media Login Page is now up!'));