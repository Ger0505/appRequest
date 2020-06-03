var express = require("express");
var router = express.Router();
const depModel = require("../models/departamento.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Departamento" });
});

router.get("/list", function (req, res, next) {
  depModel.listDepartamento(function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.get("/get/:id", function (req, res, next) {
  depModel.getDepartamento(req.params.id, function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.get("/getdesc/:descripcion", function (req, res, next) {
  depModel.getDepartamentoByDescripcion(req.params.descripcion, function (
    err,
    result
  ) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.post("/insert", function (req, res, next) {
  depModel.insertDepartamento(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200"
    });
  });
});

router.put("/update", function (req, res, next) {
  depModel.updateDepartamento(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200"
    });
  });
});

router.put("/delete/:id", function (req, res, next) {
  depModel.deleteDepartamento(req.params.id, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200"
    });
  });
});

module.exports = router;
