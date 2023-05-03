const express = require('express')
var app = express();
var bodyParser = require('body-parser')
var path = require('path')
let mongoose = require('mongoose');
const { log } = require('console');
const cors = require('cors');
var clients = [];
var inventories = [];
// models
const inventory = require('./models/inventory');
const commercial = require('./models/commercial');
const sales = require('./models/sales');



app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
// mongoose connection

mongoose.connect('mongodb+srv://bharat_0998:bharat0998@cluster0.hsobhls.mongodb.net/test')
.then(
    console.log('db connected')
)
.catch(
    (e)=>{
        console.log(e);
    }
)


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
app.get("/sales",(req,res)=>{
    res.render("sales")
})

app.post("/sales",(req,res)=>{
    const inventoryAdded = inventory.findById(req.body.inventId);
    // sales.insertMany(inventoryAdded).then(
    //     ()=>{
    //         console.log("added to sales");
    //     }
    // )
    // inventory.copyTo("sales")

//    const variable =  inventory.find();
//    sales.insertMany(variable);
    inventory.find().populate('')

})

app.get("/addinventory",(req,res)=>{
    res.render("addinventory");
})
app.get("/customers",(req,res)=>{
    res.render("customers",{news:clients})
})
app.get("/addinventorytogether",(req,res)=>{
    res.render("addInventAll");
})

app.get("/residential",(req,res)=>{
    res.render("residential");
})
app.get("/industrial",(req,res)=>{
    res.render("industrial");
})
app.get("/institutional",(req,res)=>{
    res.render("institutional");
})
app.get("/agricultural",(req,res)=>{
    res.render("agricultural");
})
app.get("/commercial",(req,res)=>{
    res.render("commercial");
})

app.get("/maintable",(req,res)=>{
    res.render("maintable", { news: inventories })
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
    clients.push(Client);
    res.redirect("/customers");
})

app.post('/addinginventory',(req,res)=>{

    const Inventory = new inventory(
        {
            PropType:req.body.PropType,
        number:req.body.number,
        size:req.body.size,
        icity:req.body.icity,
        subLoc:req.body.subLoc,
        width:req.body.width,
        len:req.body.len,
        ta:req.body.ta,
        metrics:req.body.metrics,
        direction:req.body.direction,
        facing:req.body.facing,
        road:req.body.road,
        near:req.body.near,
        ownership:req.body.ownership,
        ownerName:req.body.ownerName,
        MobileNumber:req.body.MobileNumber,
        Email:req.body.Email,
        demandfor:req.body.demandfor,
        availfrom:req.body.availfrom,
        lastcontact:req.body.lastcontact,
        fathername:req.body.fathername,
        Address:req.body.Address,
        HouseNo:req.body.HouseNo,
        Location:req.body.Location,
        Sublocation:req.body.Sublocation,
        City:req.body.City,
        Pincode:req.body.Pincode,
        State:req.body.State,
        Pcountry:req.body.Pcountry,
        ptype:req.body.ptype,
        bdate:req.body.bdate,
        subcategory:req.body.subcategory,
        unittype:req.body.unittype,
        carpetarea:req.body.carpetarea,
        floorT:req.body.floorT,
        floorOn:req.body.floorOn,
        totalB:req.body.totalB,
        buildarea:req.body.buildarea,
        carpetarea:req.body.carpetarea,
        terracearea:req.body.terracearea,
        groundfloor:req.body.groundfloor,
        secondfloor:req.body.secondfloor,
        thirdfloor:req.body.thirdfloor,
        age:req.body.age,
        balcony:req.body.balcony,
        furnished:req.body.furnished,
        amenities:req.body.amenities,
        exPrice:req.body.exPrice,
        Priceper:req.body.Priceper,
        QuotePrice:req.body.QuotePrice,
        cat:req.body.cat,
        online:req.body.online,
        CommunicationDate:req.body.CommunicationDate,
        FollowUpDate:req.body.FollowUpDate,
        RentAmmount:req.body.RentAmmount,
        LockInPeriod:req.body.LockInPeriod,
        SecurityDeposit:req.body.SecurityDeposit,
        MaintanenceCharge:req.body.MaintanenceCharge,
        RentEscallation:req.body.RentEscallation,
        TotalRent:req.body.TotalRent,
        FitoutPeriod:req.body.FitoutPeriod,

    })
    Inventory.save()
    .then(()=>{
        console.log('inventory added succesfully');
        res.redirect("/inventory");
    })
    .catch(
        (e)=>{
            console.log(e);
        }
    )



})

app.get("/inventory",(req,res)=>{
    inventory.find().exec()
    .then(
        (news)=>{
            res.render("inventory", { news:news});
        }
    )
})

// routes for comm , agri , etc

app.get("/commercial",(req,res)=>{
    res.render("commercial")
})
app.get("/commercial",(req,res)=>{
    res.render("commercial")
})
// app.get("/",(req,res)=>{
//     res.render("commercial")
// })

app.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    inventory.findByIdAndRemove(id)
    .then(
        ()=>{
        res.redirect('/inventory')
        }
        )
    .catch(
        (e)=>{
            console.log(e);
        }
    )
})


// edit

app.get("/editinvent/:id",(req,res)=>{
    let {id} = req.params;
    inventory.findById(id).then(
        (Inventory)=>{
            res.status(200).render("edit_invent",{
                Inventory:Inventory,
            })
        }
    ).catch((e)=>{
        console.log(e);
    })
})


app.post("/updateinventory/:id",(req,res)=>{
    let id = req.params.id;
    inventory.findByIdAndUpdate(id,{
        number:req.body.number,
        size:req.body.size,
        subLoc:req.body.subLoc,
        width:req.body.width,
        len:req.body.len,
        ta:req.body.ta,
        metrics:req.body.metrics,
        direction:req.body.direction,
        facing:req.body.facing,
        road:req.body.road,
        near:req.body.near,
        ownership:req.body.ownership,
        ownerName:req.body.ownerName,
        MobileNumber:req.body.MobileNumber,
        Email:req.body.Email,
        demandfor:req.body.demandfor,
        availfrom:req.body.availfrom,
        lastcontact:req.body.lastcontact,
        fathername:req.body.fathername,
        Address:req.body.Address,
        HouseNo:req.body.HouseNo,
        Location:req.body.Location,
        Sublocation:req.body.Sublocation,
        City:req.body.City,
        Pincode:req.body.Pincode,
        State:req.body.State,
        Pcountry:req.body.Pcountry,
        ptype:req.body.ptype,
        bdate:req.body.bdate,
        subcategory:req.body.subcategory,
        unittype:req.body.unittype,
        carpetarea:req.body.carpetarea,
        floorT:req.body.floorT,
        floorOn:req.body.floorOn,
        totalB:req.body.totalB,
        buildarea:req.body.buildarea,
        carpetarea:req.body.carpetarea,
        terracearea:req.body.terracearea,
        groundfloor:req.body.groundfloor,
        secondfloor:req.body.secondfloor,
        thirdfloor:req.body.thirdfloor,
        age:req.body.age,
        balcony:req.body.balcony,
        furnished:req.body.furnished,
        amenities:req.body.amenities,
        exPrice:req.body.exPrice,
        Priceper:req.body.Priceper,
        QuotePrice:req.body.QuotePrice,
        cat:req.body.cat,
        online:req.body.online,
        CommunicationDate:req.body.CommunicationDate,
        FollowUpDate:req.body.FollowUpDate,
        RentAmmount:req.body.RentAmmount,
        LockInPeriod:req.body.LockInPeriod,
        SecurityDeposit:req.body.SecurityDeposit,
        MaintanenceCharge:req.body.MaintanenceCharge,
        RentEscallation:req.body.RentEscallation,
        TotalRent:req.body.TotalRent,
        FitoutPeriod:req.body.FitoutPeriod,
    }).then(
        ()=>{
            console.log("Inventory Updated Succesfully");
            res.redirect("/inventory");
        }
    )
    .catch(
        (e)=>{
            console.log(e);
        }
    )
})






app.listen(8000,(req,res)=>{
    console.log(`Server Is running on 8000`)
})