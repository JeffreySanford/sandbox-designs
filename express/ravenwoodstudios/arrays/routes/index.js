(function IFEE() {
    'use strict';
    exports.index = function pageHome(req, res) {
        console.log("landing view triggered");
        res.render('default', {
            title: 'Landing', //insert an object to the template
            classname: 'home',
            usersArray: ['Ray', 'Frank', 'Bob', 'Sam', 'Linda', 'Shelly'] // insert user's array
        });
    };

    exports.about = function pageAboutUs(req, res) {
        console.log("about view triggered");
        res.render('default', {
            title: 'About Us', //insert an object to the template
            classname: 'about'
        });
    };

    exports.products = function pageProducts(req, res) {
        console.log("product view triggered");
        res.render('default', {
            title: 'Products', //insert an object to the template
            classname: 'products',
            productsArray: ['Box', 'Jewel', 'Present', 'Dehydrated Water', 'Canned Unicorn Meat', 'Rainbows']
        });
    };
}());