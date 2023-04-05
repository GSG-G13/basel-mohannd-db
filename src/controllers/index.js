const express = require("express");
const router = express.Router();
const { getUserData } = require("./handlers");

router.get("/:username", getUserData);

module.exports = router;
