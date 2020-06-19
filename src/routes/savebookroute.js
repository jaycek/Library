const express = require('express');

const savebookRouter=express.Router();


savebookRouter.get('/',function(req,res){
    res.render("savebook",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
   {link:'/about',name:'About Us'}]})
 });



module.exports = savebookRouter;