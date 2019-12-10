const express = require("express");
const request = require("request");
const router = express.Router();

const { layers } = require("../configs/layers");

/* GET layers listing. */
router.get("/", function(req, res) {
  res.send({ layers });
  // request(`http://localhost:3010`, (error, response, body) => {
  //   if (error) {
  //     res.sendStatus(502);
  //   } else {
  //     if (response.statusCode !== 404) {
  //       res.send(JSON.parse(body));
  //     } else {
  //       res.sendStatus(404);
  //     }
  //   }
  // });
});

router.get("/schemes/:id", function(req, res) {
  const id = req.params.id;
  request(`http://localhost:3010/schemes/${id}`, (error, response, body) => {
    if (error) {
      res.sendStatus(502);
    } else {
      if (response.statusCode !== 404) {
        res.send(JSON.parse(body));
      } else {
        res.sendStatus(404);
      }
    }
  });
});

router.get("/geodata", function(req, res) {
  res.send(200);
});

router.get("/data", function(req, res) {
  res.send(200);
});

module.exports = router;
