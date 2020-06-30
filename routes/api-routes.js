const express = require("express");
const router = express.Router();
const fs = require("fs");

// router.get("/api", (req, res) => {
//   res.json({ msg: "success" });
// });

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });
});

router.post("/api/notes", (req, res) => {
  // let data = fs.readFileSync("./db/db.json", "utf8");
  // let notes = JSON.parse(data);
});

router.delete("/api/notes/:id", (req, res) => {});

module.exports = router;
