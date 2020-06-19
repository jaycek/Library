const express = require('express');

const booksRouter=express.Router();

var books=[
            {
                title:'Category-Fiction' ,
                name:'The Alchemist by Paulo Coelho',
                link:'https://www.abebooks.com/books/100-books-to-read-in-lifetime/index.shtml',
                img:"alchemist.jpg"
            },
            {
                title:'Category-Thriller' ,
                name:'The Guardian by John Grisham',
                link:'https://www.google.com/search?q=thriller+books&rlz=1C1CHZL_enIN715IN715&oq=Thriller&aqs=chrome.2.69i57j0l7.5142j0j9&sourceid=chrome&ie=UTF-8',
                img:"grisham.jpg"
            },
            {
                title:'Category-Technology' ,
                name:'Handbook of Research on Blockchain Technology',
                link:'https://www.google.com/search?rlz=1C1CHZL_enIN715IN715&sxsrf=ALeKk02hGrGmRi3FdoMhBxS_jKLjT9aJ2g%3A1583070472723&ei=CL1bXuDZK7nYz7sPksmV-As&q=best+computer+books+2020+blockchain&oq=best+computer+books+2020+blockchain&gs_l=psy-ab.3...10272.12953..13332...0.4..0.376.2434.0j4j6j1......0....1..gws-wiz.......0i71j33i22i29i30.fJ789CcmNf0&ved=0ahUKEwjg_biJtfnnAhU57HMBHZJkBb8Q4dUDCAs&uact=5',
                img:"mean.jpg"
            },
            {
                title:'Category-Non Fiction' ,
                name:"A Room of One's own by Virginia Wolf",
                link:'https://www.google.com/search?rlz=1C1CHZL_enIN715IN715&sxsrf=ALeKk00aV84OI0NqUc07BfLVKIH5qFRShw%3A1583069706087&ei=CrpbXvnmBNSZmgeFq7nQAg&q=nonfiction+books&oq=Non+fiction+books&gs_l=psy-ab.1.1.35i39j0i131i10j0i7i30j0l3j0i7i30j0i10j0i7i30l2.12244.12244..14498...0.2..0.241.241.2-1......0....1..gws-wiz.......0i71.s7LF0MzXM7k',
                img:"wolf.jpg"
            }
          ]



booksRouter.get('/',function(req,res){
     res.render("books",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
    {link:'/about',name:'About Us'}],books})
  })

booksRouter.get('/:id',function(req,res){

    const id=req.params.id;

    res.render("book",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
   {link:'/about',name:'About Us'}],book:books[id]})
 })


module.exports = booksRouter;