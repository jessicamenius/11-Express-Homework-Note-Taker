const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(___dirname, "../client/index.html"));
});

router.get("/add", (req, res) => {
  res.sendFile(path.join(___dirname, "../client/add.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/notes.html"));
});

module.export = router;
