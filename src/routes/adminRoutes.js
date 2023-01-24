const express = require('express');
const { addJobs, getJobs,deleteJob } = require('../controllers/adminControllers');

const app = express.Router();

app.post('/add',addJobs);
app.get('/',getJobs)
app.post('/delete',deleteJob)

module.exports = app;

