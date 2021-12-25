const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email'],
  })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: false,
  }),
  (req, res) => {
    console.log('Google called us back!');
  }
);

authRouter.get('/logout', (req, res) => {});

module.exports = authRouter;
