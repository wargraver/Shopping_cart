const user=require('./db.js').user
const route=new require('express').Router()
route.get('/users',async (req,res)=>{
try{
   const data= await user.findAll()
   console.log("data",data)
   res.status(200).send(data)
}
catch(error){
    res.status(500).send({
        error:"could not retrive user value from db"
    })
}
})
route.post('/users',async (req,res)=>{
    try{
    const data2=await user.create({
        name:req.body.name,
    })
    res.send(data2)
    }
    catch(error){
        res.status(500).send({
            error:"could not create new user"
        })
    }
})
module.exports=route