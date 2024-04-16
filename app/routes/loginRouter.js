const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController')

router.post('/create', loginController.createLogin);

module.exports = router;

