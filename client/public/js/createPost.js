function createPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let myJSON = '{"title": "' + title + '", "content": "' + content + '"}'
    console.log(myJSON);
    fetch('/api/posts', {
        method:'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: myJSON
        }).then(function(response) {
        if (response.status !== 200)
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            return;
        })
        console.log("title: " + title + "content: " + content);
};

/* function getAllPosts() {
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
      //alert("Welcome, " + data[i].title);
        });
    });
  } 

getAllPosts(); */
