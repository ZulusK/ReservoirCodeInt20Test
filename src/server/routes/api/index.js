let router = require('express').Router();

router.use('/v1/meme', require('@APIv1/meme'));
router.use('/v1/auth', require('@APIv1/auth'));
module.exports = router;