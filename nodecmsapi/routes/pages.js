var express = require('express');
var router = express.Router();

//Get Page Model
var page = require('../models/page')

// get all data
router.get('/',function(req,res){
   page.find({},function(err,pages){
     if (err) console.log(err);
     res.json(pages);
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