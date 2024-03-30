const express = require('express');
const handleNewUser = require('../controllers/user/register.controller');
const loginUser = require('../controllers/user/login.controller');
const RefreshTokenController = require('../controllers/user/refresh.controller');
const logoutController = require('../controllers/user/logout.controller');
const router = express.Router();

router.route('/login')
    .post(loginUser) //login

router.route('/register')
    .post(handleNewUser) //register

router.route("/refreshToken")
    .get(RefreshTokenController) //refresh token

router.route('/logout')
    .get(logoutController) //logout 



module.exports = router;