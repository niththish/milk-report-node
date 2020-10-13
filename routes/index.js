var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');

const customers=require('../models/customers');

router.use(bodyParser.json());



// GET home page. get all customers details
router.route('/')
.get( (req,res,next)=>{
  customers.find({})
  .then((customer)=>{
    res.statusCode=200;
    res.setHeader('content-Type','application/json');
    res.json(customer);
  },(err)=>next(err))
  .catch((err)=>next(err));
})
.put( (req,res,next) =>{
  res.statusCode=403;
  res.end('put operation is not supported');
})
.post( (req,res,next) =>{
  res.statusCode=403;
  res.end('post operation is not supported');
})
.delete( (req,res,next) =>{
  res.statusCode=403;
  res.end('Delete operation is not supported');
})




//Adding a new Customer details
router.route('/add')
.get( (req,res,next) =>{
  res.statusCode=403;
  res.end('get operation is not supported');
})
.put( (req,res,next) =>{
  res.statusCode=403;
  res.end('put operation is not supported');
})
.post((req,res,next)=>{
  customers.create(req.body)
  .then((customer)=>{
    res.statusCode=200;
    res.setHeader('content-Type','application/json');
    res.json("inserted new customer data");
  },(err)=>next(err))
  .catch((err)=>next(err));
})
.delete( (req,res,next) =>{
  res.statusCode=403;
  res.end('Delete operation is not supported');
})






//settings a send flag to true
router.route('/send/:id')
.get( (req,res,next) =>{
  res.statusCode=403;
  res.end('get operation is not supported');
})
.put( (req,res,next) =>{
  customers.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
  .then((customer)=>{
    res.statusCode=200;
    res.setHeader('content-Type','application/json');
    res.json(customer)
  },(err)=>next(err))
  .catch((err)=>next(err));
})
.post((req,res,next)=>{
  res.statusCode=403;
  res.end('put operation is not supported');
})
.delete( (req,res,next) =>{
  res.statusCode=403;
  res.end('Delete operation is not supported');
})




//settings a sent flag to true
router.route('/sent/:id')
.get( (req,res,next) =>{
  res.statusCode=403;
  res.end('get operation is not supported');
})
.put( (req,res,next) =>{
  customers.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
  .then((customer)=>{
    res.statusCode=200;
    res.setHeader('content-Type','application/json');
    res.json(customer)
  },(err)=>next(err))
  .catch((err)=>next(err));
})
.post((req,res,next)=>{
  res.statusCode=403;
  res.end('put operation is not supported');
})
.delete( (req,res,next) =>{
  res.statusCode=403;
  res.end('Delete operation is not supported');
})




//reseting all flags to default
router.route('/reset')
.get( (req,res,next) =>{
  res.statusCode=403;
  res.end('get operation is not supported');
})
.put( (req,res,next) =>{
  customers.updateMany({"sent":true},{ $set:{"sent":false,"received":false} },{new:true})
  .then((customer)=>{
    res.statusCode=200;
    res.setHeader('content-Type','application/json');
    res.json(customer)
  },(err)=>next(err))
  .catch((err)=>next(err));
})
.post((req,res,next)=>{
  res.statusCode=403;
  res.end('put operation is not supported');
})
.delete( (req,res,next) =>{
  res.statusCode=403;
  res.end('Delete operation is not supported');
})




module.exports = router;
