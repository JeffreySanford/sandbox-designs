(function IFEE() {
    'use strict';

    exports.success = function pageSuccess(req, res) {
        console.log("success view triggered");

        res.render('success', {
            title: "Successful Post",
            data: req.body
        });
    };

}());