"use strict";

const router = require('express').Router();
const meme = require('@DB').Meme;
const Utils = require('@utils');
const passport = require('passport');
const errorHandler = require('@errorHandler');
const config = require('@config');


router.get('/top',  passport.authenticate(['basic'], {session: false}), async (req, res, next) => {
        try {
            res.json(await meme.paginate({},
                {
                    page: req.query.page ,
                    sort:{rating: -1}
                })
            );
        console.log(await meme.paginate({},
            {
                page: req.query.page ,
                sort:{rating: -1}
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