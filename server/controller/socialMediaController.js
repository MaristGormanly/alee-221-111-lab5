var post = require('../model/socialMedia');
let socialMediaService = require("../service/socialMediaService")

let posts = [];

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "'adminUser'",
	password: "letmein",
	database: "socialMedia",
	port: 1337
});

/* let annie = post.createPost("Name #1", "What a nice day!");
let george = post.createPost("Name #2", "It is better to offer no excuse than a bad one.");
let abraham = post.createPost("Name #3", "I am not bound to win, but I am bound to be true.");
let benjamin = post.createPost("Name #4", "There never was a good war or a bad peace.");
posts.push(annie);
posts.push(george);
posts.push(abraham);
posts.push(benjamin); */

con.connect((err) => {
	if (err) throw err;
	console.log("Database (mysql) connected!");

	var sql = "use socialMedia;";
	con.query(sql, () => {
		if (err) throw err;
	})
})

// get posts
exports.getAllPosts = (req, res) => {
	var posts = [];

	let sql = "select * from posts;"
	con.query(sql, (err, rows, fields) => {
		if (err) throw err;
		for (let i = 0; i < rows.length; i++) {
			let postRow = post.createPost(rows[i].title, rows[i].content);
			posts.push(postRow);
		}

		// console.log(posts);

		res.setHeader('Content-Type', 'application/json');
		res.send(posts);
	})
}

exports.getPost = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(posts[req.params.home]);
}

// save post

exports.savePost = (req, res) => {
	let sql = "insert into posts (title, content) "
		+ "values ("
			+ req.body.title + "','"
			+ req.body.content
		+ "');";

	con.query(sql, (err, result) => {
		if (err) throw err;

		// console.log(result)

		res.setHeader('Content-Type', 'application/json');
		res.send(result);
	})
}

exports.deletePost = (req, res) => {
	posts.splice(req.params.postId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(posts);
}

exports.updatePost = (req, res) => {
	var updatedPost = posts[req.params.postId];
	console.log(req.body.title);
    if(req.body.title)
		updatedPost.title = req.body.title;
    if(req.body.content)
		updatedPost.content = req.body.content;
	posts[req.params.postId] = updatedPost;
	res.setHeader('Content-Type', 'application/json');
	res.send(posts[req.params.postId]);
}

 exports.completeUpdatePost = (req, res) => {
	posts[req.params.postId] = post.createPost(req.body.title, req.body.content);
	res.setHeader('Content-Type', 'application/json');
	res.send(posts[req.params.postId]);
}

/* let postId = require('../model/post'); */

console.log("[socialMediaController] initialized");