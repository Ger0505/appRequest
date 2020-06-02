var express = require("express");
var router = express.Router();
const comentariosModel = require("../models/comentarios.js");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Comentarios" });
});

router.get("/list/:id", function (req, res, next) {
  comentariosModel.listComentarios(req.params.id,function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.get("/get/:id", function (req, res, next) {
  comentariosModel.getComentarios(req.params.id, function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.post("/insert", function (req, res, next) {
  comentariosModel.insertComentarios(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

router.post("/insertComentario", function (req, res, next) {
  comentariosModel.insertComentario(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

router.patch("/update", function (req, res, next) {});

router.delete("/delete/:id", function (req, res, next) {
  comentariosModel.deleteComentarios(req.params.id, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

module.exports = router;
