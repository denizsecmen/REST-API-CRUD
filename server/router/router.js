var express=require('express');
var cont=require('../controller/controller');
var router=express.Router();
router.get('/',cont.test);
router.post('/',cont.post);
router.get('/loaddata',cont.tt);
router.post('/deldata',cont.datadel);
router.post('/update',cont.dataupdate);
module.exports=router;