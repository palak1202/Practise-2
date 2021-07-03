let express = require('express');
let app = express();
let mongoose = require('mongoose');

mongoose.connect('http://localhost:3000/forms', {useNewUrlParser: true});
app.listen(3000, ()=>{
    console.log("connecting to 3000...");
})