const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors')
const connect = require('./config/db')
const PORT = process.env.PORT || 8080;

const userRoute = require('./routes/user')
const jobsRoute = require('./routes/adminRoutes')

// crating server
const app = express();
//  middelwares
app.use(express.json());
app.use(cors());
// routes
app.use('/user',userRoute)
app.use('/admin',jobsRoute)


app.get('/',(req,res)=>{
    res.send('Its for only checking purpose api working or not')
});


// listening on port

app.listen(PORT,async()=>{
    // connect mongoDB 
     connect();
    console.log(`http://localhost:${PORT}`)


})
