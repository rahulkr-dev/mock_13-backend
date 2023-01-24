const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    hash:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['admin','user']
    }
},{
    timestamps:true
})

const User = model('user',userSchema);

module.exports = User;