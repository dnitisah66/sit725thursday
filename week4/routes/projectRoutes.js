const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getHomePage);
router.get('/api/projects', projectController.getProjectsAPI);

module.exports = router;
