const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const login_controller = require('./controllers/login.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', login_controller.test);
module.exports = router;