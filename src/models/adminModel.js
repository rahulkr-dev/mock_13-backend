const {Schema,model} = require('mongoose')

// position: "",
// location: "",
// name: "",
// contract: ""

const jobSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        require:true
    },
    contract:{
        type:String,
    }
},{
    timestamps:true
})

const Jobs = model('job',jobSchema);

module.exports = Jobs;