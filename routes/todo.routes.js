const express = require('express');
const router = express.Router();
const createController = require('../controllers/todo/create.controller.js');
const readController = require('../controllers/todo/read.controller.js');
const deleteContoller = require("../controllers/todo/delete.controller.js");
const updateContoller = require('../controllers/todo/update.controller.js');

const verifyJwt = require('../middleware/verifyJWT.middleware.js');

//roles auth

const rolesAuth = require('../middleware/rolesAuth.middleware.js');

router.use(verifyJwt);
router.route('/')
    .get(rolesAuth(['user']),readController)
    .post(createController)

router.route("/:id")
    .put(updateContoller)
    .delete(deleteContoller)


module.exports = router;