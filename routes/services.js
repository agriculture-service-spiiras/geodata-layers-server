const express = require("express");
const router = express.Router();

const services = require("../configs/services");

/* GET connect listing. */
router.get("/", function(req, res) {
  res.json({ ...services });
});

module.exports = router;
