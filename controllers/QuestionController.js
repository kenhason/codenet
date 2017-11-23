var Question = require('../models/Question')

module.exports = {
    find: function(params, callback) {
        Question.find(params, function(err, questions) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, questions)
        })
    },
    findById: function(id, callback) {
        Question.findById(id, function(err, question) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, question)
        })
    }
    ,
    create: function(params, callback) {
        Question.create(params, function(err, answer) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, answer)
        })
    }
}