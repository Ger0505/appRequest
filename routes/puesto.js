var express = require("express");
var router = express.Router();
const puestoModel = require("../models/puesto.js");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Tarea" });
});

router.get("/list", function (req, res, next) {
  puestoModel.listPuesto(function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.get("/get/:id", function (req, res, next) {
  puestoModel.getPuesto(req.params.id, function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.post("/insert", function (req, res, next) {
  puestoModel.insertPuesto(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

router.put('/update', function(req, res, next) {
  puestoModel.updatePuesto(req.body,
  function(err,result){
      if(err)
          res.json(
              {"response":"Error",
                  "msg":err
              }
          );
      console.log("res",result);
      res.json(
          {
              "response":result,
              "msg":"200"
          }
      );
  });
});

router.put("/delete/:id", function (req, res, next) {
  puestoModel.deletePuesto(req.params.id, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

module.exports = router;
