const mongoose=require('mongoose')
const Userdb = require('./Userdb')
const Productdb = require('./Productdb')

const OrderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.types.ObjectId,
        ref:User,
        required:true
    },
    total_amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:[
            'placed','completed'],
        default:'placed',
        required:true
    },
    items:{
        product:ObjectId,ref:Productdb,
        quantity:{
            type:number,
            required:true
        }
    }
})
module.exports=mongoose.model("Order",UserSchema)