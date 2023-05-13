const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({

    name:{
        type:String,
        default:"",
        required:true
    },
    description:{
        type:String,
        default:"",
    
    },
    price:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
}
);

module.exports=mongoose.model("Product",ProductSchema);



