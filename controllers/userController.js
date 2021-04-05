const router = require('express').Router();
const userModel = require('../models/users/userModel');

// SKapar användare med funktioner som ligger i userModel
router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);


module.exports = router;