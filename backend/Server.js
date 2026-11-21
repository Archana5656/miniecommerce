const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()


const authRoutes=require('./routes/Auth-routes')
const app= express()
app.use(express.json())
app.use(cors())

app.use('/auth',authRoutes)

app.get('/',(req,res)=>{
    res.send({message:"connected"})
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('mongodb connected');
    
    app.listen(3000,()=>{
        console.log('server is running');
        
    })

})
.catch((err)=>{
console.log(err);

})