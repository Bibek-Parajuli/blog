const express=require('express');
const router=express.Router();

router.get("/api", (req,res)=>{
    res.send('hello i am api');
})
router.get("/", (req,res)=>{
    res.send('hello i am home');
})


module.exports=router;