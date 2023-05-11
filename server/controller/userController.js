var user = require('../model/user');

let users = [];

// list of users to choose from
let annie = user.createUser("Annie", "Lee", "annielee@gmail.com", "alee", "annielee!");
let george = user.createUser("George", "Washington", "georgewashington@gmail.com", "gwashington", "georgewashington!");
let abraham = user.createUser("Abraham", "Lincoln", "abrahamlincoln@gmail.com", "alincoln", "abrahamlincoln!");
let benjamin = user.createUser("Benjamin", "Franklin", "benjaminfranklin@gmail.com", "bfranklin", "benjaminfranklin!");
users.push(annie);
users.push(george);
users.push(abraham);
users.push(benjamin);

// get mthod
exports.getAllUsers = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

// get method
exports.getUser = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.index]);
}

// post method
exports.saveUser = (req, res) => {
	let newUser = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password);
	posts.push(newUser);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

// delete method
exports.deleteUser = (req, res) => {
	users.splice(req.params.userId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

// patch method
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

// put method
 exports.completeUpdateUser = (req, res) => {
	users[req.params.userId] = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password);
	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
}

/* let userId = require('../model/user'); */

console.log("[userController] initialized");