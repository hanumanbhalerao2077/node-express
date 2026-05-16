const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

// Health check (required)
router.get('/health', apiController.health);

// Simple HTML health page (useful for humans)
router.get('/health-ui', (req, res) => {
  res.status(200).send('<h1>OK</h1><p>Service is healthy.</p>');
});

// About JSON
router.get('/about', apiController.about);


// Portfolio JSON (required)
router.get('/profile', apiController.profile);

module.exports = router;


