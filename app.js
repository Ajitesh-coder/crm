const express = require('express')
var app = express();
var bodyParser = require('body-parser')
var path = require('path')
const mongoose = require('mongoose')
const Inventory = require('./models/Inventory')
require('./db/conn')

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

const search = ()  =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
}

let x = 10

app.set('view engine' , "ejs")

app.get("/",(req,res)=>{
    res.render("sidebar")
})
app.get("/addClient",(req,res)=>{
    res.render("addclient")
})

app.get("/maintable",(req,res)=>{
    Inventory.find().then((result)=>{
        
            
            res.render("inventory",{news : result});

    }).catch((err)=>{
        console.log(err);
    })
})

app.get("/addinventory",(req,res)=>{
    res.render("addinventory");
})
app.get("/customers",(req,res)=>{
    res.render("customers")
})
app.get("/addinventorytogether",(req,res)=>{
    res.render("addInventAll");
})



app.get("/timeline", (req, res) => {
  res.render("timeline");
});

app.get("/maps", (req, res) => {
  res.render("maps");
});


app.post("/addingClient",(req,res)=>{
  
    var Client = [  firstName = req.body.firstName,
        lastName = req.body.lastName,
        phoneNumber = req.body.phoneNumber,
        email = req.body.email,
        preferedLocation = req.body.preferedLocation,
        maxBudget = req.body.maxBudget,
        clientType = req.body.clientType,
        description = req.body.description
    ]
      Client.save();
      

    clients.push(Client);
    res.redirect("/customers");
})

app.post('/addinginventory',async(req,res)=>{
    // console.log(req.body);
    try{

    
    const inventory = new Inventory({
      number : req.body.number,
      address : req.body.address,
      subCategory : req.body.subCategory,
      size : req.body.size,
      subLoc : req.body.subLoc,
      width : req.body.width,
      metrics :req.body.metrics,
      direction : req.body.direction,
      facing : req.body.facing,
      road : req.body.road,
      near : req.body.near,
      ownership : req.body.ownership,
    });
 await inventory.save();
 res.redirect("/maintable");
}
catch(error){
    res.status(500).send(error)
}
   
})

app.listen(3000,(req,res)=>{
    console.log(`Server Is running on 3000`)
})