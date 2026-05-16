const express = require('express');
const router = express.Router();

const pageController = require('../controllers/pageController');

router.get('/', pageController.landing);
router.get('/about', pageController.about);
router.get('/projects', pageController.projects);
router.get('/contact', pageController.contact);
router.post('/contact', pageController.contactPost);

module.exports = router;


