var mongoose = require('mongoose')

var AnswerSchema = mongoose.Schema({
    questionId: {type: String, default: ''},
    codes: {type: String, default: ''},
    testingResult: {type: Boolean, default: false},
    timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model("AnswerSchema", AnswerSchema);