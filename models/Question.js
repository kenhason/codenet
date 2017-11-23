var mongoose = require('mongoose')

var QuestionSchema = mongoose.Schema({
    description: {type: String, default: ''},
    language: {type: String, default: 'Java'},
    category: {type: String, default: 'Algorithm'},
    price: {type: Number, default: 0},
    status: {type: Boolean, default: false},
    timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model("QuestionSchema", QuestionSchema)