const express = require("express");
const router = express.Router();

router.post("/notes", (req, res) => {
  console.log(req.paramas);
  res.json(req.paramas);
});

module.exports = router;
