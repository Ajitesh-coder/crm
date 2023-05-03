const mongoose = require('mongoose');
const salesSchema = new mongoose.Schema({
    // inventoryId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Inventory Schema"
    // },
    demand:{type:String},
    number:{
        type:String,
    },
    size:{
        type:String,
    },
    icity:{
        type:String,
    },
    subLoc:{
        type:String,
    },
    width:{
        type:String,
    },
    len:{
        type:String,
    },
    ta:{
        type:String,
    },
    metrics:{
        type:String,
    },
    direction:{
        type:String,
    },
    facing:{
        type:String,
    },
    road:{
        type:String,
    },
    near:{
        type:String,
    },
    ownership:{
        type:String,
    },
    ownerName:{
        type:String,
    },
    MobileNumber:{
        type:String,
    },
    Email:{
        type:String,
    },
    lastcontact:{
        type:Date,
    },
    fathername:{
        type:String,
    },
    Address:{
        type:String,
    },
    HouseNo:{
        type:String,
    },
    Location:{
        type:String,
    },
    Sublocation:{
        type:String,
    },
    City:{
        type:String,
    },
    Pincode:{
        type:String,
    },
    State:{
        type:String,
    },
    Pcountry:{
        type:String,
    },
    ptype:{
        type:String,
        default:"Residential"
    },
    
    created:{
        type:Date,
        required:true,
        default:Date.now(),
    }
}
)

const salesCart = new mongoose.Schema({
    item:[salesSchema],
})

module.exports = mongoose.model('Sales',salesCart)