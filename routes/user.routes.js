const express = require('express');
const handleNewUser = require('../controllers/user/register.controller');
const router = express.Router();

router.route('/')
    .get() //login
    .post(handleNewUser) //register
    .put() //edit data

router.route("/:id")
    .delete() //delete data

module.exports = router ;