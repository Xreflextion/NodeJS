const express = require('express');
const router = express.Router(); // Connects to our controller
const controller = require('../controllers/whatsappControllers');

// router listens to the controller paths 
router
.get('/', controller.verifyToken)
.post('/', controller.receiveMessage);

module.exports = router; // Export router to be used in other files