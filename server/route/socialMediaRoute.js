var express = require('express');
var router = express.Router();

let socialMediaController = require('../controller/socialMediaController');

console.log("[socialMediaRoute] initialized");

// route to main page
router.route('/:home')
    .get((req, res) => {
        socialMediaController.getAllPosts(req, res);
    })
    .post((req, res) => {
        socialMediaController.savePost(req, res);
    })

/* router.route('/:home')
    .get((req, res) => {
        socialMediaController.getPost(req, res);
    }) */

module.exports = router;