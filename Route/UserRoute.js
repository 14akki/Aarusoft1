const express = require('express');
const router = express.Router();

const  { createUserController} = require('../Controller/usercontroller');

router.post('/createuser', createUserController );

module.exports = router;