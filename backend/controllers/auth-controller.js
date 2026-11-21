
const User=require('./../db/Userdb')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const registerUser=async(req,res)=>{
try {   
    
        const{name,email,password}=req.body
        const user=await User.findOne({
        email:email
    })
    if(user){
        return res.status(400).json({message:"User already exists..."})
    }
    const hashPassword=await bcrypt.hash(password,10)
    const newuser=await User.create({
        name:name,
        email:email,
        password:hashPassword,
        role:'user'
    })
res.status(201).json({message:'user registered successfully'})
} catch (error) {
    console.log(error);
    res.status(500).json({message:"internal server error"})
}
}

const loginUser=async (req,res) => {
    try {
        const{email,password}=req.body
        const user=await User.findOne({
            email:email,
        })
        if(!user){
           return res.status(401).json({message:"user not found"})
        }
        const isMatched=await bcrypt.compare(password,user.password)
        if(!isMatched){
           return res.status(401).json({message:"incorrect password"})
        }
        const token=jwt.sign(
        {id:user._id,role:user.role},process.env.JWT_SECRET,
        {expiresIn:'1d'})

        res.status(200).json({message:"login successful",token})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
        
    }
}
module.exports={registerUser,loginUser}