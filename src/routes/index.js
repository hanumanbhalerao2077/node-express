const express = require('express');

const router = express.Router();

const pageRoutes = require('./pages');
const apiRoutes = require('./api');

router.use('/', pageRoutes);
router.use('/api', apiRoutes);

// Canonical health UI route for humans (kept outside /api)
router.get('/health-ui', (req, res) => res.redirect(302, '/api/health-ui'));

module.exports = router;






