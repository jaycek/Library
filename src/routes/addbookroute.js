const express = require('express');

const addbookRouter=express.Router();


addbookRouter.get('/',function(req,res){
    res.render("addbook",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
   {link:'/about',name:'About Us'}],redirect:'savebook'})
 });



module.exports = addbookRouter;