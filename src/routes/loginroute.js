const express = require('express');

const loginRouter =express.Router();

loginRouter.get('/',function(req,res){
    res.render("login",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/register',name:'Sign Up'},
    {link:'/about',name:'About Us'}],redirect:'/profile'});
})

module.exports = loginRouter;