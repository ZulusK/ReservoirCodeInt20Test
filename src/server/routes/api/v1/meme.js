"use strict";

const router = require('express').Router();
const DBmeme = require('@DB').Meme;
const Utils = require('@utils');
const passport = require('passport');
const errorHandler = require('@errorHandler');
const config = require('@config');


router.get('/', async (req, res, next) => {
    try {
        let result = await DBmeme.get.byQuery({}, {
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || config.PAGINATION_LIMIT,
            sort: {}
        });
        res.json({
            success: true,
            items: result.docs,
            limit: result.limit,
            total: result.total,
            page: result.page
        })
    } catch (err) {
        console.log(err)
        return errorHandler(res, 400, err);
    }
});

async function random2 () {
    let arr = [await DBmeme.random(), await DBmeme.random()];
    if (arr[0] == arr[1]) {
        return random2();
    } else {
        return arr;
    }
}

router.get('/random2', passport.authenticate(['access-token'], {session: false}), async (req, res, next) => {
    try {
        const randomArr = await random2();

        res.json({success: true, items: randomArr});
    } catch (err) {
        return errorHandler(res, 400, err);
    }
});


router.post('/vote', passport.authenticate(['access-token'], {session: false}), async (req, res, next) => {
    try {
        const winner = await DBmeme.getById(req.body.winnerId);
        const loser = await DBmeme.getById(req.body.loserId);
        if (!winner || !loser) {
            return errorHandler(res, 400, "No id of memes found")
        }
        const newRating = Utils.calculateNewRating(winner.rating, loser.rating);

        await winner.updateRating(newRating[0]);
        await loser.updateRating(newRating[1]);

        return res.json({success: true});
    } catch (err) {
        return errorHandler(res, 400, err);
    }

});

module.exports = router;