const {Schema} =require ("mongoose");

const OrdersSchema= new Schema({
     name: String,
    price: Number,
    percent: Number,
    isDown: String,

});


module.exports={OrdersSchema};