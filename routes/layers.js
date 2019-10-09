const express = require("express");
const router = express.Router();

/* GET layers listing. */
router.get("/", function(req, res) {
  res.send(200);
});

router.get("/scheme", function(req, res) {
  res.send(200);
});

router.get("/geodata", function(req, res) {
  res.send(200);
});

module.exports = router;
