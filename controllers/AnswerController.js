var Answer = require('../models/Answer')

module.exports = {
    find: function(params, callback) {
        Answer.find(params, function(err, answers) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, answers)
        })
    },
    findById: function(id, callback) {
        Answer.findById(id, function(err, answer) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, answer)
        })
    }
    ,
    create: function(params, callback) {
        Answer.create(params, function(err, answer) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, answer)
        })
    }
}