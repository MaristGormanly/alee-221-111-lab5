function getAllPosts() {
    fetch('/api/posts').then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            return;
        }
        response.json().then(function(data) {  
        var postHtml ="<ol>";
            for(i in data) {
              postHtml += "<li id='" + data[i].id + "'>" + data[i].title + "  " + data[i].content + "</li>";
            }  
      postHtml += "</ol>";
      document.getElementById('posts').innerHTML = postHtml;
      alert("Welcome, " + data[i].email);
        });
    });
  } 

getAllPosts();

function clickFunction() {
    window.location.href = "http://localhost:1337/createPost";
}