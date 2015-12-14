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

    function createARow () {

    }

    function fillARow (articles) {
        var node = {};
        var newRow, cardsSection, cardTitle, title,
                line, textNode, author, br, comments, i;
        var queryLength = 5;

        cardsSection = document.getElementById("content-wrapper");

        for (i = 1; i < 5; i += 1) {

            cardTitle = "card";
            cardTitle += i + "new";

            title = cardTitle + "Title";
            author = cardTitle + "Author";
            comments = cardTitle + "Comments";

            console.log(cardTitle, title, author, comments);

            newRow = document.getElementById("cards-go-here");

            node = document.createElement("div");
            node.className = "card card-block card-style flex-card";
            node.id = cardTitle;

            textNode = document.createTextNode(articles[i - 1].data.title);
            node.appendChild(textNode);

            line = document.createElement("hr");
            node.appendChild(line);

            author = document.createTextNode("Submitted by " + articles[i - 1].data.author);
            br = document.createElement("br");
            node.appendChild(author);
            node.appendChild(br);

            comments = document.createTextNode(articles[i - 1].data.num_comments + " comments");
            node.appendChild(comments);

            newRow.appendChild(node);

        }  // end set of 4 loop (i)

    }

    function newCreateTheCards(articles) {

        fillARow(articles);
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
