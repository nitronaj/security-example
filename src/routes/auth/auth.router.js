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
    session: true,
  }),
  (req, res) => {
    console.log('Google called us back!');
  }
);

authRouter.get('/logout', (req, res) => {
  req.logout(); // Removes req.user and clears any logged in session
  return res.redirect('/');
});

module.exports = authRouter;
