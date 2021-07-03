let mongoose = require('mongoose');
let Schema = mongoose.Schema;
 let data = new Schema({
     fname: String,
     lname: String,
     email: String
 });

 let Data = mongoose.model('Data', data);