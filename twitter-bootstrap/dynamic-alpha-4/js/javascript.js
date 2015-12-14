/*global window */
(function () {
    'use strict';

    function getArticles() {
        var url = "http://www.reddit.com/r/business/new/.json";
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';

        xhr.onerror = function () {
            console.error("Error detected");
        };

        xhr.onload = function (articles) {
            articles = xhr.response.data.children;    
            newCreateTheCards(articles);
        };

        xhr.send();
    }

    function newCreateTheCards(articles) {
        var card = {};
        var cardTitle, title, author, comments, i;
        var queryLength = 5;
       /* createElement ("div").appendClass("row flex-cards" id="card-row placegolder") */

        var cardRow = document.getElementById("cards-go-here");
        //cardRow.className = "row flex-cards";
        //cardRow.id = "new-cards-go-here";
        var cardsSection = document.getElementById("content-wrapper");
        //cardsSection.innerHTML += cardRow;

        for (i = 1; i < queryLength; i += 1) {

            cardTitle = "card";
            cardTitle += i + "new";

            title = cardTitle + "Title";
            author = cardTitle + "Author";
            comments = cardTitle + "Comments";

            console.log(cardTitle, title, author, comments);

            var newRow = document.getElementById("cards-go-here");

            var node = document.createElement("div");
            node.className = "card card-block card-style flex-card";
            node.id = cardTitle;
            
            var textNode = document.createTextNode("Something here");
            
            newRow.appendChild(node);
            node.appendChild(textNode);

            //cardNode.appendChild("p");
            //cardNode.className = "card-text";
            //cardNode.appendChild("hr");
            
            //document.getElementById("cardRow").appendChild(node);
/*
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode("Water");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
*/
        }    
    }

    function init() {
        var articles = [];
        getArticles(articles);
    }

    window.onload = function () {
        init();
        document.getElementById("newerPosts").addEventListener("click", function () {
            window.alert("not implimented");
        });
        document.getElementById("olderPosts").addEventListener("click", function () {
            window.alert("not implimented");
        });
    };
}());

/**
         * Instead of the above function, use create elements to create a template insert into the page:
         *
         * Use the following template:
         *
         * <div class="row flex-cards" id="cards-go-here">
         *     <div class="card card-block card-style flex-card">
         *     <p id="card1Title" class="card-text"><br /></p>
         *     <hr />
         *     <div class="col-xs-6 text-left">
         *     <a id="card1Comments" class="comments" href="#"></a>
         *     </div>
         *     <div class="col-xs-6 text-right">
         *     <p id="card1Author" class="author"><br /></p>
         *     </div>
         *               </div>
         *
         *
         *      createElemt ("div").appendClass("row flex-cards" id="card-row placegolder")
         *
         *      for (i => legnth of our query)
*/
