var express = require('express');
var router = express.Router();
const staModel = require('../models/status.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Status' });
});

router.get('/list', function(req, res, next) {
    staModel.listStatus(function(err, result) {
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
    staModel.getStatus(req.params.id,function(err, result) {
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
    staModel.insertStatus(req.body,
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
    staModel.updateStatus(req.body,
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
    staModel.deleteStatus(req.params.id,
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
