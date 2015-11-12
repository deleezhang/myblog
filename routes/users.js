var express = require('express');
var router = express.Router();
var user= require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    user.findUserByName('zhangsan' ,function(err,obj){
        if(err){

        }else{
            res.render('User/userList', { title: obj.name });
        }
    });

});

module.exports = router;
