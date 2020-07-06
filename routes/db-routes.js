const express = require("express");
const router = express.Router();

// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });

router.post("/notes", (req, res) => {
  console.log(req.paramas);
  res.json(req.paramas);
});

module.exports = router;
