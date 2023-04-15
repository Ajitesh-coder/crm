const mongoose = require("mongoose")

// creating a database
mongoose.set("strictQuery",true);
mongoose.connect('mongodb://127.0.0.1:27017/bharatproperty-master',{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongoose Connection Successful")
})
.catch((error)=>{
    console.log("Mongoose error")
    console.log(error)
})