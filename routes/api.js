var express = require('express')
var router = express.Router()

router.get('/:resource', function(req, res, next) {
    res.json({
        confirmation: 'success',
        result: req.params.resource
    })
})

module.exports = router;