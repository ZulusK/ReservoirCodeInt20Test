"use strict";

const router = require('express').Router();
const meme = require('@DB').Meme;
const Utils = require('@utils');
const passport = require('passport');
const errorHandler = require('@errorHandler');
//const collector = require('@collector');

// router.get('/', async(req, res, next)=> {
//     console.log('started');
//     res.message('HELLO WORLD');
// });

router.get('/top',  passport.authenticate(['basic'], {session: false}), async (req, res, next) => {
        // console.log('started');
        console.log( await meme.getAll());
        try {
            res.json((await meme.getAll()).sort((a, b) => {
                return b.rating - a.rating;
            }));
        } catch (err) {
            return errorHandler(res, err);
        }
    });

router.get('/randomtwo', passport.authenticate(['basic'], {session: false}), async (req, res, next) => {
        try {
            const shuffledArr = Utils.shuffleArray(await meme.getAll());
            res.json(shuffledArr.slice(0, 2));
        } catch (err) {
            return errorHandler(res, err);
        }
    });


router.post('/vote', passport.authenticate(['basic'], {session: false}),  async (req, res, next) => {
        try {
            const winner = await meme.getById(req.query.winnerId);
            const loser =  await meme.getById(req.query.loserId);

            const newRating = Utils.calculateNewRating(winner.rating, loser.rating);

            await winner.updateRating(newRating[0]);
            await loser.updateRating(newRating[1]);

            return res.json({success: true});
        } catch (err) {
            return errorHandler(res, err);
        }

    });

module.exports = router;