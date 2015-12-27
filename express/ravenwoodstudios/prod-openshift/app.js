(function IFEE() {
    'use strict';
    var express = require('express');
    var app = express();
    var routes = require('./routes');

    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/data'));
    app.use(express.static(__dirname + '/images'));
    app.use(express.static(__dirname + '/stylesheets'));
    app.use(express.static(__dirname + '/javascript'));

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');  // not required if default views

    app.get('/', routes.index);
    app.get('/about', routes.about);
    app.get('/products', routes.products);

    app.get('*', function fail(req, res) {
        res.send('bad route found.');
    });
        
    var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
    var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

    var server = app.listen(server_port, server_ip_address, function () {
        console.log("Listening on " + server_ip_address + ", server_port " + server_port);
    });
}());