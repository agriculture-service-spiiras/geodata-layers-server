const express = require("express");
const router = express.Router();

/* PUT connect listing. */
router.get("/", function(req, res) {
  res.send("WS API");
});

router.get("/connect", function(req, res) {
  res.send("Create web-socket connection");
});

module.exports = router;
