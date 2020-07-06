const express = require("express");
const router = express.Router();
const fs = require("fs");

let notes = [];

// router.get("/api", (req, res) => {
//   res.json({ msg: "success" });
// });

router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });
});

router.post("/notes", (req, res) => {
  let note = fs.readFileSync("./db/db.json", "utf8");
  note = JSON.parse(note);
  let id = note.length;
  const { title, text } = req.body;
  note.push({ title, text, id });
  console.log(note);
  fs.writeFileSync("./db/db.json", JSON.stringify(note, null, 2));
  res.send({ msg: "success" });
});

router.delete("/notes/:id", (req, res) => {
  let note = fs.readFileSync("./db/db.json");
  note = JSON.parse(note);
  const id = req.params.id;
});

module.exports = router;
