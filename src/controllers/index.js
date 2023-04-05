const express = require("express");

const router = express.Router();

const {
  getProfilePage,
  getUserData,
  handle404,
  handle500,
} = require("./handlers");

router.get("/user/:username", getProfilePage);

router.get("/:username/data", getUserData);

router.use(handle404);

router.use(handle500);

module.exports = router;
