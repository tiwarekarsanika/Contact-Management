const express = require("express");
const router = express.Router();
const {getContact, getSingleContact, createContact, updateContact, deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

//simplify code by appending http requests to common route
router.use(validateToken)
router.route('/').get(getContact).post(createContact);

router.route('/:id').get(getSingleContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;