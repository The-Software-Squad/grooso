const express = require('express');
const router = express.Router();

router.route('/')
    .get() //login
    .post() //register
    .put() //edit data

router.route("/:id")
    .delete() //delete data

module.exports = router ;