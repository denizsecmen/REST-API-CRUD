var mongoose=require('mongoose');
var model=require('../model/DBmodel');
module.exports.test=(req,res)=>{
    res.status(200).json({dds:'dd',dd:'ddd'});
}
module.exports.post=async (req,res)=>{
    console.log(req.body);
    var sodel= await model.create({data1:req.body.data1,data2:req.body.data2});
    res.sendStatus(200);
}
module.exports.tt=(req,res)=>{
    model.find({}).then((resu)=>{console.log(resu);res.json(JSON.stringify(resu))});
}
module.exports.datadel=(req,res)=>{
    console.log('Delete'+req.body.data1);
    model.deleteOne({data1:req.body.data1}).then((res)=>{console.log(res)});
    res.sendStatus(200);
}
module.exports.dataupdate=(req,res)=>{
    console.log('Update:'+req.body.datax);
    console.log(req.body.data1+'='+req.body.data2);
    async function t()
    {
    var y=await model.findOneAndUpdate({data1:req.body.datax},{data1:req.body.data1,data2:req.body.data2})
    }
    t();
}