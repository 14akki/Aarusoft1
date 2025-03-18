const express = require('express');

const router = express.Router();

const {verifyLoginController} = require('../Controller/loginController');
router.post('/login',verifyLoginController);


module.exports = router;