const express = require("express");
const router = express.Router();

router.post("/api", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.post("/api/notes", (req, res) => {
  console.log(req.paramas);
  res.json(req.paramas);
});

module.exports = router;
