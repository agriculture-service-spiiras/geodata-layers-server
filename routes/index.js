var express = require("express");
var router = express.Router();

var mapConfig = require("../configs/map");
var layersConfig = require("../configs/layers");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Agriculture geoservice" });
});

router.get("/map.config", function(req, res, next) {
  res.send(mapConfig);
});

router.get("/layers.config", function(req, res, next) {
  res.send(layersConfig);
});

module.exports = router;
