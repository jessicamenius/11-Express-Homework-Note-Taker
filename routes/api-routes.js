const express = require("express");
const router = express.Router();
const fs = require("fs");

// router.get("/api", (req, res) => {
//   res.json({ msg: "success" });
// });

// get notes
router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.json(data);
  });
});

// post note
router.post("/api/notes", (req, res) => {
  let note = fs.readFileSync("./db/db.json", "utf8");
  note = JSON.parse(note);
  let id = note.length;
  const { title, text } = req.body;
  note.push({ title, text, id });
  console.log(note);
  fs.writeFileSync("./db/db.json", JSON.stringify(note, null, 2));
  res.send(note);
});

// delete note
router.delete("/api/notes/:id", (req, res) => {
  let data = fs.readFileSync("./db/db.json", "utf8");
  let notes = JSON.parse(data);
  const id = req.params.id;
  notes.forEach((value, index) => {
    if (value.id == id) {
      notes.splice(index, 1);
    }
  });
  fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), (err) => {
    if (err) throw err;
  });
});

module.exports = router;
