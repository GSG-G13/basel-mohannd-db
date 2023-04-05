const express = require("express");
const { join } = require("path");
const router = express.Router();
const { getUserData } = require("./handlers");

router.get("/:username", (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "profile.html"));
});

router.get("/:username/data", getUserData);

module.exports = router;
