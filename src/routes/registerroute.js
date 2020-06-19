const express = require('express');

const registerRouter =express.Router();

registerRouter.get('/',function(req,res){
    res.render("register",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/register',name:'Sign Up'},
    {link:'/about',name:'About Us'}],redirect:'/profile'});
})

module.exports = registerRouter;