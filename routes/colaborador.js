var express = require('express');
var router = express.Router();
var coModel = require('../models/colaborador.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colaborador' });
});

router.get('/listar', function(req, res, next) {
    coModel.getEstudiantes(function(err, result) {
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

module.exports = router;
