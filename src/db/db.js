const Sequelize=require('sequelize')
const seq = new Sequelize('cart_e','root','Bijnor@123',{
    dialect:'mysql',
    host:'localhost'
})
console.log(seq)
const check= async ()=>{
    try{
        await seq.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch(error){
        console.log('can not connect to db')
        console.error(error)
    }
}
check()
const user=seq.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
const product=seq.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    manufacturer:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.00
    }
})
seq.sync()
    .then(()=>console.log("database created"))
    .catch((err)=>console.log("Error creating db"))
module.exports={
    user,product
}