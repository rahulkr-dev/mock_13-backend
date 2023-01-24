const mongoose = require('mongoose');

const connect = async()=>{
    mongoose.set("strictQuery",true)
    mongoose.connect(process.env.DB_URL)
}

module.exports = connect;