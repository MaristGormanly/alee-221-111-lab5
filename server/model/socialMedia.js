function Post(title, content) {
    this.title = title;
    this.content = content;
}

exports.createPost = function(title, content) {
    return new Post(title, content);
}
console.log("[post] initialized");