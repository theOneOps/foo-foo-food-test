const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true},
        activities:{type:[String]}
    }
)

module.exports = mongoose.model('Users', userSchema)