
const argon = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const createUser = async(req,res)=>{
    try{
        const {email,password,name} = req.body;
        let role;
        if(!email || !password || !name ){
            return res.status(404).send("Missing some Fileds")
        }
        if(email.includes('@masaischool.com')){
            role = 'admin'
        }else role='user'

        const checkUser =await User.findOne({email});
        if(checkUser){
            return res.status(409).send({msq:"User Already Exists"})
        };
            const newUser = new User({
            name,email,
            hash:await argon.hash(password),
            role
        });
        
        await newUser.save();
        res.status(201).send({msg:"User Registerd Successfully",newUser})

 
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
}


const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send({msg:"User not exists"})
        }
        if(!await argon.verify(user.hash,password)){
            return res.status(500).send({msg:"Invalid Credentials"})
        }

        let payload = {
            id:user._id,
            role:user.role,
            email:user.email,
            name:user.name
        }

        const token = jwt.sign(payload,process.env.VERIFICATION_KEY,{
            expiresIn:"28d"
        });

        res.send({msg:"login sucessfully",token,role:user.role});

    }catch(err){
        res.status(500).send({msg:err.message})
    }
}

module.exports = {createUser,loginUser}