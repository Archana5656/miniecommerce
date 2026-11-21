const express=require('express')

const {registerUser, loginUser }=require('./../controllers/auth-controller')
const router=express.Router()

router.post('/register',registerUser)
router.post('/',loginUser)

module.exports=router
