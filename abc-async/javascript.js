(function IFEE() {
    'use strict';

    /**
    * ABC API Information
    * key: 7bjh4rncpu3a4xudf3w743xe
    * http://api.abc.com/resources/?q=libya&limit=3&sort=pubDate&api_key=...
    */

    function getArticles() {
    var url ="http://api.abc.com/resources/?q=trump&limit=3&sort=pubDate&api_key=is-not-working";
    var xhr = new XMLHttpRequest();n
    xhr.open('GET', url);
    xhr.responseType = 'json';

    xhr.onload = function(articles) {

        articles = xhr.response.data.children;

        function displayThreeArticles(articles) {
            var author, title, comments, i;

            for (i = 1; i < 5; i++) {

            var cardTitle = "card"; 
            cardTitle += i;

            title = cardTitle + "Title";
            document.getElementById(title).innerHTML = articles[i - 1].data.title;

            author = cardTitle + "Author";
            document.getElementById(author).innerHTML = "Submitted by " + articles[i - 1].data.author;

            comments = cardTitle + "Comments";
            document.getElementById(comments).innerHTML = + articles[i - 1].data.num_comments + " comments" ;

            }
        }
        
        displayFourArticles(articles);
    };
    
    xhr.onerror = function() {
    console.error("Error detected");
    };

    xhr.send();
    }

    function init() {
        var articles;
        getArticles(articles);
    }

    window.onload = function() {
        init();
        document.getElementById("newerPosts").addEventListener("click", function(){
        alert("not implimented");
        });
        document.getElementById("olderPosts").addEventListener("click", function(){
        alert("not implimented");
        });
    };
}());