const mongoose = require('mongoose')

const {Schema} = mongoose


const reviewSchema = new Schema(
    {
        score:{type:Number, required:true},
        comment:{type:String, maxLength:140},
        restaurantId:{
            type:Schema.Types.ObjectId,
            ref:'Restaurants',
        }
    }
)

module.exports = mongoose.model('Reviews', reviewSchema)