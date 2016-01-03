(function IFEE() {
    'use strict';

    exports.index = function pageLanding(req, res) {
        res.render('template/default', {
            title: 'Landing',
            nextPage: 'Admin Reports Page',
            nextPageUrl: '/reports',
            data: req.body
        });
    };

    exports.success = function pageSuccess(req, res) {
        var fs = require('fs');

        var q = req.body;
        var objSurvey = {};

        if (q.realName === '') {
            q.realName = "None Supplied";
        }
        objSurvey.name = q.realName;

        if (q.email === '') {
            q.email = 'None Supplied';
        }
        objSurvey.email = q.email;

        if (q.read) {
            objSurvey.read = parseInt(q.read);
        } else {
            objSurvey.read = 0;
        }

        if (q.usage) {
            objSurvey.usage = parseInt(q.usage);
        } else {
            objSurvey.usage = 0;
        }

        if (q.funct) {
            objSurvey.funct = parseInt(q.funct);
        } else {
            objSurvey.funct = 0;
        }

        if (q.commentText === '') {
            q.commentText = "no comments we indicated.";
        }
        objSurvey.comment = q.commentText;
        objSurvey.time = new Date();

        /* Create or Append the objSurvey to the Array Survey on the server */
/*
        fs.exists("public/data/storage.json", function (exists) {
            if (exists === true) {
                /* exists is true -- appending */
                
                // Read the file
/*
                var arrayData = JSON.parse(fs.readFileSync('public/data/storage.json', 'utf8'));

                //push obj to array
                arrayData.push(objSurvey);
                fs.unlink("public/data/storage.json");
                fs.writeFile("public/data/storage.json", JSON.stringify(arrayData), "utf8");
            } else {
                var arrayData = [];
                arrayData.push(objSurvey);
                fs.writeFile("public/data/storage.json", JSON.stringify(arrayData), "utf8");
            }
        });
*/
        /* Render the information to the success view */
        res.render('template/success', {
            title: "Recorded Survey Record",
            nextPage: 'Home Page',
            nextPageUrl: '/landing',
            surveyData: objSurvey
        }); // end sucessful-submital render
    };  // end app.get route for getPosts

    exports.reports = function pageSuccess(req, res) {
        var fs = require('fs');
        var storageJson = JSON.parse(fs.readFileSync('public/data/storage.json', 'utf8'));
        if (storageJson !== 'undefined') {
            res.render('template/reports', {
                title: "Survey Reports Page",
                nextPage: 'Landing',
                nextPageUrl: '/landing',
                surveyData: storageJson
            });
        } else {
            console.log('data/storage.json cannot be loaded');
        }
    };
}());