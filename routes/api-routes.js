const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/api", (req, res) => {
  res.json({ msg: "success" });
});

router.get("/api/all", (req, res) => {
  res.json({ msg: "success" });
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });
});

module.exports = router;
