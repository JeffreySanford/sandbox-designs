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

    function createARow(i) {
        var newRow, rowName = 0;
        var cardsSection = document.getElementById("content-wrapper");

        newRow = document.createElement("div");
        rowName = "cards-row" + i;
        console.log(rowName);
        newRow.id = rowName;
        newRow.className = "row flex-cards";

        cardsSection.appendChild(newRow);
    }

    function fillARow(articles) {

        var node = {};
        var rowName, newRow, cardTitle, title,
                line, textNode, author, br, comments, i, j;
        var queryLength = 25;

        rowName = "cards-row" + i;
        console.log(rowName);


        for (i = 1; i < queryLength; i += 1) {

            createARow(i);

            for (j = 1; j < 5; j += 1) {
                cardTitle = "card";
                cardTitle += i + "new";

                title = cardTitle + "Title";
                author = cardTitle + "Author";
                comments = cardTitle + "Comments";


                newRow = document.getElementById(rowName);

                node = document.createElement("div");
                node.className = "card card-block card-style flex-card col-sm-3 col-xs-12";
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
        }  // end data loop
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