const express = require('express');

const authorsRouter=express.Router();


var authors=[
    {
       
        name:'Jeff Kinney',
        bookname:'Series - Diary of Wimpy Kid',
        link:'https://www.google.com/search?rlz=1C1CHZL_enIN715IN715&sxsrf=ALeKk00E7_jAAWIPxcayLyeu14bftUx9Vw%3A1583510757233&ei=5XRiXoLsDf_Vz7sP3NCH4Ac&q=jeff+kinney+best+books&oq=jeff+kinney+best+books&gs_l=psy-ab.3..0i30.124400.131666..132340...2.0..0.281.4431.0j17j6......0....1..gws-wiz.......35i39j0j0i13j0i13i5i30j0i8i10i30j0i7i30j0i8i30j0i67j0i7i10i30j0i8i13i30j0i13i30.U9vpHR2bdfQ&ved=0ahUKEwjC8rqhnYboAhX_6nMBHVzoAXwQ4dUDCAs&uact=5',
        img:"jeffkinney.jpg",
        desc:"Diary of a Wimpy Kid author Jeff Kinney didn’t grow up wanting to be a children’s author. His dream was to become a newspaper cartoonist, but he wasn’t able to get his comic strips syndicated.In 1998 Jeff came up with the idea for Diary of a Wimpy Kid, a story about a middle-school weakling named Greg Heffley. Jeff worked on his book for almost eight years before showing it to a publisher in New York."
    },
    {
        
        name:'Michelle Obama',
        bookname:'Personal Memoir - Becoming',
        link:'https://www.google.com/search?q=michelle+obama+book&rlz=1C1CHZL_enIN715IN715&oq=mic&aqs=chrome.1.69i57j69i59j0l4j69i65l2.2599j0j9&sourceid=chrome&ie=UTF-8',
        img:"michelleobama.jpg",
        desc:"Michelle LaVaughn Robinson Obama is an American lawyer and author who was the first lady of the United States from 2009 to 2017. She is married to the 44th President of the United States Barack Obama. She is the first African-American First Lady of the United States"
    },
    {
        
        name:'James Patterson',
        bookname:'"Along Came a Spider" and other Thrillers',
        link:'https://www.google.com/search?rlz=1C1CHZL_enIN715IN715&sxsrf=ALeKk02I6xJ-vmNFQXt5KJtYWu0RFxjoVQ%3A1583510371682&ei=Y3NiXqiuKf2prtoPntGg4As&q=james+patterson+book+list&oq=james++book&gs_l=psy-ab.3.0.0i7i30l10.181529.182904..184605...0.0..0.261.1521.0j6j2......0....1..gws-wiz.......35i39j0i67j0j0i7i10i30.XD3RUD1wFWc',
        img:"patterson.jpg",
        desc:"James Brendan Patterson is an American author and philanthropist. Among his works are the Alex Cross, Michael Bennett, Women's Murder Club, Maximum Ride, Daniel X, NYPD Red, Witch and Wizard, and Private series, as well as many stand-alone thrillers, non-fiction and romance novels"
    },
    {
       
        name:'Stephen King',
        bookname:'"The Stand" and other Supernatural Fiction,Suspense novels',
        link:'https://www.google.com/search?q=stephen+king+best+books&rlz=1C1CHZL_enIN715IN715&oq=steph&aqs=chrome.2.69i57j0l7.4493j0j9&sourceid=chrome&ie=UTF-8',
        img:"stephenking.jpg",
        desc:"Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. His books have sold more than 350 million copies, and many have been adapted into films, television series, miniseries, and comic books."
    }
  ]

authorsRouter.get('/',function(req,res){
    res.render("authors",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
    {link:'/about',name:'About Us'}],authors});
})

authorsRouter.get('/:id',function(req,res){

    const id = req.params.id;
    res.render("author",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
    {link:'/about',name:'About Us'}],author:authors[id]});
})

module.exports = authorsRouter;