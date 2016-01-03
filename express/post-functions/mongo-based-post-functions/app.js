(function IFEE() {
    'use strict';

    // Express requires
    var express = require('express');
    var fs = require('fs');
    var bodyParser = require('body-parser');

    // Express deinitions
    var app = express();
    var routes = require('./routes');

    //for mongo db
    var mongo = require('mongodb');
    var assert = require('assert');

    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');  // not required if default views

    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/img'));
    app.use(express.static(__dirname + '/css'));
    app.use(express.static(__dirname + '/js'));

    app.get('/', function (req, res) {
        console.log('GET /');
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    });

    app.post('/', function (req, res) {
        console.log('POST /');
        console.dir(req.body);
        

        var q = req.body;

        var objSurvey = {
            name: q.realName,
            email: q.email,
            read: q.inlineRadioReadability,
            usage: q.inlineRadioUsability,
            funct: q.inlineRadioFunctionality,
            comments: q.commentText,
            time: new Date()
        };

        console.log(objSurvey);

        /* Append the objSurvey to the Array Survey on th server */

        /* Render the information to the success view */
        res.render('successful-submital', {
            title: "Recorded Survey Record",
            surveyData: objSurvey
        });
    });

/*
    app.get('/getPosts', function (req, res) {
         function getAll() {
            var MongoClient = require('mongodb').MongoClient;
            var recordObject = {};
            var currentRecordsArray = [];
            MongoClient.connect('mongodb://localhost:27017/surveys', function (err, db) {

                if (err) {
                    console.error("Could not connect to the database!" + err);
                } else {

                    var cursor = db.collection('responses').find();

                    cursor.each(function (err, doc) {

            //            assert.equal(err, null);

                        if (doc !== null) {
                            // pull the individual record from the response
                            recordObject.name = doc.name;
                            recordObject.email = doc.email;
                            recordObject.comments = doc.comments;

                            // add another record to the complete current Records
                            currentRecordsArray.push(recordObject);
                            console.log(recordObject);
                            console.log(currentRecordsArray);

                        } else {
                            console.log("end of record set!");

                            res.render('surveyReport', {
                                title: "Recorded Survey Records",
                                surveyData : currentRecordsArray
                            });  // end render
                        } // end if doc null clause
                    });  // end cursor loop
                } // end database connect trap
            }); //  collection complete -- render the view with the records
            return currentRecordsArray;
        }
    });  // end app.get route for getPosts
*/
    var port = 3000;
    app.listen(port);
    console.log('Listening at http://localhost:' + port);

}());