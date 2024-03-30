const express = require('express');
const handleNewUser = require('../controllers/user/register.controller');
const loginUser = require('../controllers/user/login.controller');
const router = express.Router();

router.route('/login')
    .post(loginUser) //login


router.route('/register')
    .post(handleNewUser) //register

router.route("/:id")
    .delete() //delete data

module.exports = router;