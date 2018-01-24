const router = require('express').Router();
const Utils = require('@utils');
const DBusers = require("@DB").User;
const DBnau = require("@DB").NAU;
const passport = require('passport');
const collector = require('@collector');
const errorHandler = require('@errorHandler');
const emailVerification = require('@emailVerification');
const config = require('@config');

function getActivationURL (req) {
    return config.VIEW_URL + "/#/activate";
}

router.post('/register', collector('user.register'), async (req, res, next) => {
        const fullUrl = getActivationURL(req);
        try {
            let user = await DBnau.create(req.args);
            let token = user.activationToken;
            emailVerification.sendVerification(user.email, token, fullUrl);
            return res.json(
                {
                    success: true,
                    user: user.info(),
                    token: token
                });
        } catch (err) {
            return errorHandler(res, err);
        }
    }
);
router.post('/login', passport.authenticate(['basic'], {session: false}), async (req, res, next) => {
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

async function activationToken (req, res, next) {
    // check, token is valid
    // and find user
    try {
        const decode = Utils.tokens.decode('activation', req.args.token);
        const me = await DBnau.get.byToken(decode);
        if (me) {
            req.user = me;
            return next();
        } else {
            return Utils.sendError(res, 400, "No such user");
        }
    } catch (err) {
        console.log('activation', err)
        return Utils.sendError(res, 400, err);
    }
}

router.post('/activate/send-again', collector('user.sendAgain'), async (req, res, next) => {
    if (!req.args.email) {
        return Utils.sendError(res, 400, "No email specified");
    }
    try {
        let user = await DBnau.get.byEmail(req.args.email);
        if (!user) {
            return Utils.sendError(res, 404, "No user with such email found");
        }
        let token = user.activationToken;
        const fullUrl = getActivationURL(req);
        emailVerification.sendVerification(user.email, token, fullUrl);
        return res.json({
            success: true,
            token: token
        })
    } catch (err) {
        return errorHandler(res, err);
    }
});

router.post('/activate/:token', collector('user.activate'), activationToken, async (req, res, next) => {
    // copy user from DBnau to DBuser
    try {
        await DBnau.remove.byID(req.user.id);
        let user = await DBusers.create(Utils.convert.nau2user(req.user));
        return res.json({
            success: true,
        })
    } catch (err) {
        return errorHandler(res, err);
    }
});

router.post('/changePassword', passport.authenticate(['access-token'], {session: false}), (req, res, next) => {
    let newPassword = req.user.generateNewPassword();
    const fullUrl = getActivationURL(req);
    emailVerification.sendNewPassword(req.user.email, newPassword, fullUrl);
    return res.json({
        success: true,
    })
});

module.exports = router;