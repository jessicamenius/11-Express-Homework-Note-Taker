const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(___dirname, "../client/index.html"));
});

router.get("/add", (req, res) => {
  res.sendFile(path.join(___dirname, "../client/add.html"));
});

module.export = router;
