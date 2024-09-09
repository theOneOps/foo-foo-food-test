const mongoose = require('mongoose')

const {Schema} = mongoose


const deliveryPartnerSchema = new Schema(
    {
        name:{type:String, required:true, lowercase:true},
        vehicule:{type:String, enum:["bike", "motorcycle","car", "foot"], required:true, lowercase:true},
        location:{type:{}},// to be defined later...
        status:{type:String, enum:["available", "busy", "no contract"], default:"no contract", required:true, lowercase:true},
    }
)


module.exports = mongoose.model('Deliverypartners', deliveryPartnerSchema)