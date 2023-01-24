const Jobs = require('../models/adminModel')


 const addJobs = async (req, res) => {
    try {
        const { contract, location, name, position } = req.body;
        if (!contract || !location || !position) {
            return res.status(404).send("Missing some Fileds")
        }

        const newJob = new Jobs({
            contract, name, position, location
        });

        await newJob.save();
        res.status(201).send({ msg: "Jobs Added Successfully", newJob })

    } catch (err) {
        // console.log(err.message)
        res.status(500).send("Internal Server Error")
    }
}

 const getJobs = async (req, res) => {
    try {
        let jobs = await Jobs.find();

    res.send(jobs)
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
}
 const deleteJob = async (req, res) => {
    try {
        const {id} = req.body;
        await Jobs.findByIdAndDelete(id);
        // let jobs = await Jobs.find();
        res.send({msg:"delete sucessfully"})

    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
}
 const editJobs = async (req, res) => {
    try {
        let jobs = await Jobs.find();

    res.send(jobs)
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
}



module.exports = { addJobs, getJobs,deleteJob,editJobs }