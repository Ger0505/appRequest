var express = require("express");
var router = express.Router();
const tareaModel = require("../models/tarea.js");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Tarea" });
});

router.get("/list/:id", function (req, res, next) {
  tareaModel.listTarea(req.params.id,function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.get("/get/:id", function (req, res, next) {
  tareaModel.getTarea(req.params.id, function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.post("/insert", function (req, res, next) {
  tareaModel.insertTarea(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

router.post("/insertFile", function (req, res, next) {
  tareaModel.insertFile(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

router.put("/update",function(req, res, next) {
  tareaModel.updateTarea(req.body,
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

router.put("/updateStatus",function(req, res, next) {
  tareaModel.updateStatus(req.body,
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

router.delete("/delete/:id", function (req, res, next) {
  tareaModel.deleteTarea(req.params.id, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

router.get("/listFile/:id", function (req, res, next) {
  tareaModel.listFile(req.params.id,function (err, result) {
    console.log("/");
    if (err) res.json({ response: "Error", msg: err });

    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
});

router.delete("/deleteFile", function (req, res, next) {
  tareaModel.deleteFile(req.body, function (err, result) {
    if (err) res.json({ response: "Error", msg: err });
    console.log("res", result);
    res.json({
      response: result,
      msg: "200",
    });
  });
});

module.exports = router;
