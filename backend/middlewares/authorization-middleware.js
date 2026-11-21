
const authorization=async (req,res,next) => {


        if(req.user.role!=='admin'){
           return res.status(403).json({message:"you are not allowed"})
        }
    next()
}

module.exports=authorization