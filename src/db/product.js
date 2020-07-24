const product=require('./db.js').product
const route= new require('express').Router()
route.get('/products',async (req,res)=>{
try{
   const data= await product.findAll()
   res.status(200).send(data)
}
catch(error){
    res.status(500).send({
        error:"could not retrive product value from db"
    })
}
})
route.post('/products',async (req,res)=>{
    try{
    const data2=await product.create({
        name:req.body.name,
        price:parseFloat(req.body.price),
        manufacturer:req.body.manufacturer,
    })
    res.send(data2)
    }
    catch(error){
        res.status(500).send({
            error:"could not create new product"
        })
    }
})
module.exports=route