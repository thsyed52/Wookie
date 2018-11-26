var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    user: {type:Schema.Types.ObjectId,ref:'User', required:true},
    cart: {type:Object , required:true},
    adress: {type:String , required:true},
    name: {type:String , required:true},
    paymentId : {type:String ,required:true}
    // price: {type:Number , required:true},
}); 

module.exports = mongoose.model('Order',schema);