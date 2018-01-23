const router = require('express').Router();
const Utils = require('@utils');
const DBusers = require("@DB").User;
const passport = require('passport');
const collector = require('@collector');
const errorHandler = require('@errorHandler');

router.post('/register', collector('user.register'), async (req, res, next) => {
        try {
            let user = await DBusers.create(req.args);
            return res.json(
                {
                    success: true,
                    tokens: user.credentials,
                    user: user.info()
                });
        } catch (err) {
            return errorHandler(res, err);
        }
    }
);

router.post('/login', passport.authenticate('basic', {session: false}), async (req, res, next) => {
    try {
        await req.user.save();
        res.json({
            success: true,
            tokens: req.user.credentials,
            user: req.user.info()
        });
    } catch (err) {
        return errorHandler(res, err);
    }
});
router.post('/logout', passport.authenticate(['basic'], {session: false}), async (req, res, next) => {
    req.user.generateSecret('access');
    req.user.generateSecret('refresh');
    await req.user.save();
    return res.json({success: true});
});
router.get('/token', passport.authenticate('refresh-token', {session: false}), async (req, res, next) => {
    await req.user.save();
    return res.json(
        {
            success: true,
            tokens: {
                access: req.user.accessToken
            }
        });
})
router.get('/check/access', passport.authenticate(['access-token'], {session: false}), (req, res, next) => {
    return res.json({success: true});
})
router.get('/check/refresh', passport.authenticate(['refresh-token'], {session: false}), (req, res, next) => {
    return res.json({success: true});
})
module.exports = router;