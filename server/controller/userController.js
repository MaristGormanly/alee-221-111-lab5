var user = require('../model/user');

let users = [];

let annie = user.createUser("Annie", "Lee", "annielee@gmail.com", "annielee", "alee", "annielee!");
let george = user.createUser("George", "Washington", "georgewashington@gmail.com", "georgewashington", "gwashington", "georgewashington!");
let abraham = user.createUser("Abraham", "Lincoln", "abrahamlincoln@gmail.com", "abrahamlincoln", "alincoln", "abrahamlincoln!");
let benjamin = user.createUser("Benjamin", "Franklin", "benjaminfranklin@gmail.com", "benjaminfranklin", "bfranklin", "benjaminfranklin!");
users.push(annie);
users.push(george);
users.push(abraham);
users.push(benjamin);

exports.getAllUsers = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.getUser = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.index]);
}

exports.saveUser = (req, res) => {
	let newUser = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password);
	users.push(newUser);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.deleteUser = (req, res) => {
	users.splice(req.params.userId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.updateUser = (req, res) => {
	var updatedUser = users[req.params.userId];
	console.log(req.body.firstName);
	if(req.body.firstName)
		updatedUser.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedUser.lastName = req.body.lastName;
	if(req.body.email)
		updatedUser.email = req.body.email;
	if(req.body.username)
		updatedUser.username = req.body.username;
	if(req.body.password)
		updatedUser.password = req.body.password;
	users[req.params.userId] = updatedUser;
	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
}

 exports.completeUpdateUser = (req, res) => {
	users[req.params.userId] = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password);
	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
}

/* let userId = require('../model/user'); */

console.log("[userController] initialized");