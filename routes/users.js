var express = require('express');
var router = express.Router();
var User = require('../models/usermodel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({},(err,data)=>{
    if(err) return next(err);
    res.json(data);
  });
 // res.send('respond with a resource');
});

router.post('/send', function(req, res, next){
  User.create(req.body, function(err, data){
    res.json(data);
  });
});

module.exports = router;

