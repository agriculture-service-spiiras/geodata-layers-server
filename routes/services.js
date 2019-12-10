const express = require("express");
const router = express.Router();

/* GET connect listing. */
router.get("/", function(req, res) {
  res.json({
    layers: "http://localhost:3002/layers",
    realtime: {
      geodata: "http://localhost:3011/geodata"
    }
  });
});

module.exports = router;
