var express = require('express');
var router = express.Router();

//Get Page Model
var Page = require('../models/page')

// get all pages
router.get('/',function(req,res){
  Page.find({},function(err,pages){
     if (err) console.log(err);
     res.json(pages);
   });
});

// get a page
router.get('/:slug',function(req,res){
  var slug = req.params.slug;
  Page.findOne({slug: slug},function(err,page){
    if (err) console.log(err);
    res.json(page);
  });
});


// post add page
router.post('/add-page',function(req,res){

  var title = req.body.title; 
  var slug = req.body.title.replace(/\s+/g, '-').toLowerCase(); 
  var content = req.body.content; 

  Page.findOne({slug: slug},function(err,page){
     if (err) console.log(err);

     if (page) {
       res.json("pageExists");
     } else {
       var page = new Page({
         title: title,
         slug: slug,
         content: content,
         sidebar: "no"
       });

       page.save(function(err) {
         if (err) {
           console.log(err);
         } else {
           res.json("ok")
         }
       });
     }
    
   });
});

// edit a page
router.get('/edit-page/:id',function(req,res){
  var id = req.params.id;
  Page.findById(id,function(err,page){
    if (err) console.log(err);
    res.json(page);
  });
});


//Exports
module.exports = router;