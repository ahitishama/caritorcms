var express = require('express');
var router = express.Router();

//Get Usser Model
var user = require('../models/user')

// post register
router.get('/register',function(req,res){

  var username = req.body.username; 
  var password = req.body.password; 

   user.findOne({username: username},function(err,user){
     if (err) console.log(err);

     if (user) {
       res.json("userExists");
     } else {
       var user = new user({
         username: username,
         password: password
       });

       user.save(function(err) {
         if (err) {
           console.log(err);
         } else {
           res.json("userRegistered")
         }
       });
     }
    
   });
});

// get a data
router.get('/:slug',function(req,res){
  var slug = req.params.slug;
  page.findOne({slug: slug},function(err,page){
    if (err) console.log(err);
    res.json(page);
  });
});



//Exports
module.exports = router;