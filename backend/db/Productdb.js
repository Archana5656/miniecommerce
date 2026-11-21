const mongoose=require ('mongoose')
const Categorydb = require('./Categorydb')

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    image:{
        type:URL,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
})

module.exports=User.ProductSchema("Product",ProductSchema)