const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
var schema=new mongoose.Schema({
    data1:String,
    data2:String,
}, { versionKey: false })
module.exports=mongoose.model('restapis',schema);