const express = require("express");
const router = express.Router();
const { signup, signin } = require("../../controller/auth/auth-controller");

// POST /signup route
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
