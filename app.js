let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Form = require('./models/formdatas').Data;

mongoose.connect("mongodb://localhost/forms", {useNewUrlParser: true});
app.use(express.static('public'));
app.use(express.json());

app.post('/formData', async (req,resp)=>{
    let reqBody = req.body;
    let newData = new Form({
        fname: reqBody.fname,
        lname: reqBody.lname,
        email: reqBody.email
    })
    await newData.save();
    resp.send("added!");
})

app.listen(3000, ()=>{
    console.log("connecting to 3000...");
})