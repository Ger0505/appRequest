var express = require('express');
var router = express.Router();
var colModel = require('../models/colaborador.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colaborador' });
});

router.get('/list', function(req, res, next) {
    colModel.listColaborador(function(err, result) {
        console.log('/');
        if (err)
            res.json(
                {"response": "Error",
                    "msg" : err
                }
            );
        
        console.log('res', result);
        res.json(
            {"response": result,
                "msg" : "200"
            }
        );
      });
});

router.get('/get/:id', function(req, res, next) {
    colModel.getColaborador(req.params.id,function(err, result) {
        console.log('/');
        if (err)
            res.json(
                {"response": "Error",
                    "msg" : err
                }
            );
        
        console.log('res', result);
        res.json(
            {"response": result,
                "msg" : "200"
            }
        );
      });
});

router.post('/insert', function(req, res, next) {
    colModel.insertColaborador(req.body,
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

router.put('/update', function(req, res, next) {
    colModel.updateColaborador(req.body,
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

router.put('/delete/:id', function(req, res, next) {
    colModel.deleteColaborador(req.params.id,
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

module.exports = router;
