(function IFEE() {
    'use strict';

    exports.index = function pageLanding(req, res) {
        console.log("landing view triggered");

        res.render('default', {
            title: 'Landing', //insert an object to the template
            classname: 'landing',
            usersObject: [
                {id: '1', name: 'Ray', email: 'ray@gmail.com', image: 'images/artists/ray.png'},
                {id: '2', name: 'Frank', email: 'frank@gmail.com', image: 'images/artists/frank.png'},
                {id: '3', name: 'Bob', email: 'bob@gmail.com', image: 'images/artists/bob.png'},
                {id: '4', name: 'Sam', email: 'sam@gmail.com', image: 'images/artists/sam.png'},
                {id: '5', name: 'Linda', email: 'linda@gmail.com', image: 'images/artists/linda.png'},
                {id: '6', name: 'Shelly', email: 'shelly@gmail.com', image: 'images/artists/shelly.png'}
            ] // insert user's object
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