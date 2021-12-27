const path = require('path');
const express = require('express');

const authRouter = require('./auth/auth.router');

const api = express.Router();

api.use('/auth', authRouter);

function checkLoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated() && !!req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'you must log in',
    });
  }
  next();
}

api.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

api.get('/failure', (req, res) => {
  return res.send('Failed to log in');
});

api.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = api;
