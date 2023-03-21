var express=require('express')
var app=express();
var bodyParser=require('body-parser');
var router=require('./router/router');
var cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',router);
app.listen(3001,()=>{
    console.log('Server run at 3001 port');
})