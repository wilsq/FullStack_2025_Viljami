const express = require('express')
const router = express.Router()

// Home page route

router.get('/', function (req, res) {
    var koodarit = [
        { name: 'Heikki', organization: "Laurea", birth_year: 1612 },
        { name: 'Jenna', organization: "Linux Oy", birth_year: 1688 },
        { name: 'Riku', organization: "Docker AB", birth_year: 1633 }
    ];
    var tagline = "Mikaan ei ole niin kivaa kuin FullStack ohjelmointi";

    res.render('pages/index', {
        koodarit: koodarit,
        tagline: tagline
    });
});


// About page route
router.get('/about', function (req, res) {
    res.render('pages/about');
});

module.exports = router