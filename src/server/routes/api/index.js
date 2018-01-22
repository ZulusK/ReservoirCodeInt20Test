let router = require('express').Router();

router.get('/', (req, res, next) => {
    console.log(1)
    res.json({success: true});
})
module.exports = router;