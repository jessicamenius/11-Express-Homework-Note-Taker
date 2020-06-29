const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(___dirname, "./client/notes.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/nodes.html"));
});

module.export = router;
