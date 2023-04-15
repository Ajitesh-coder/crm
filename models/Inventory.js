const mongoose = require('mongoose');

const inventory = mongoose.Schema({
    
    number:{
        type:String,
        require:true
    },
    address:{
        type:String,
        required:true,

        },
 
       subCategory:{
        type:String,
        required:true
       },

       size:{
        type:String,
        required:true
       },
       subLoc:{
        type:String,
        required:true
       } ,
       width:{
        type:String,
        required:true
       } ,
       metrics:{
        type:String,
        required:true
       },
       direction:{
        type:String,
        required:true
       } ,
       facing:{
        type:String,
        required:true
       } ,
       road:{
        type:String,
        required:true
       },
       near:{
        type:String,
        required:true
       } ,
       ownership:{
        type:String,
        required:true
       } ,

       date:{
        type:Date,
        default:Date.now
       }
})

const Inventory = mongoose.model("Inventory",inventory)

module.exports = Inventory;