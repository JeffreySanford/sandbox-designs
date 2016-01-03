/*global window $*/
(function IFEE() {
    'use strict';
    var btnSubmit = document.getElementById("button-submit");
    btnSubmit.addEventListener("click", function () {
        console.log('begin');
        var http = new XMLHttpRequest();
        var params = "text=stuff";
        http.open("POST", "http://localhost:3000", true);

        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //http.setRequestHeader("Content-length", params.length);
        //http.setRequestHeader("Connection", "close");

        http.onreadystatechange = function () {
            console.log('onreadystatechange');
            if (http.readyState === 4 && http.status === 200) {
                console.log("async finished");
            } else {
                console.log('readyState=' + http.readyState + ', status: ' + http.status);
            }
        };

        console.log('sending...');
        http.send(params);
        console.log('end');

        window.onload = function onLoadFunction() {
            console.info("main javascript file loaded.");
        };
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}());