const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const customerSchema=new Schema({
    name:
    {
        type:String,
        required:true,
    },
    phone:
    {
        type:String,
        required:true,
    },
    sent:
    {
        type:Boolean,
        default:false
    },
    received:
    {
        type:Boolean,
        default:false
    },
    sentAmount:
    {
        type:String,
        default:'0',
    },
    receivedAmount:
    {
        type:String,
        default:'0',
    }
})


var customers=mongoose.model('customer',customerSchema);

module.exports = customers;
