// database connection
let db = require("../db/connection");
// let socialMediaService = require('./service/socialMediaService');
let socialMediaController = require('../controller/socialMediaController');
let postId = require('../model/socialMedia');

exports.getAllPosts = async function() {
    let sqlText = "select * from users";
    let res = await pool.query(sqlText);
    let posts = [];
    for (let i = 0; i < res.rows.length; i++) {
        posts.push(posts.createPost(res.rows[i].title, res.rows[i].content));
    console.log("posts");
    return posts;
    }
}

console.log("[socialMediaService] initialized");