const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    description : {
        type: String
    },
    category : {
        type :String,
        enum : ['Personal', 'Work','School','Other']
    },
    date : {
        type : String
    }
})

const List = mongoose.model('List', listSchema)
 
module.exports = List