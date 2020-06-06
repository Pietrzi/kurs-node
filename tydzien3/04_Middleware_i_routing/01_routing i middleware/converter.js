
const express = require('express');

export const router = express.Router();

router.param('amount', (req, res, next, amount) => {
  if (isNaN(parseFloat(amount))) {
    next(new Error('Invalid amount'));
  } else {
    req.amount = parseFloat(amount);
    next();
  }
});

router.get('/:currency/:amount', (req, res, next) => {
  if (req.params.currency === 'USD') {
    res.send(`${req.amount * 4.2204}`);
  } else {
    next('route');
  }
});

router.get('/:currency/:amount', (req, res, next) => {
  if (req.params.currency === 'EUR') {
    res.send(`${req.amount * 4.5491}`);
  } else {
    next('route');
  }
});

router.get('/:currency/:amount', (req, res, next) => {
  if (req.params.currency === 'CHF') {
    res.send(`${req.amount * 4.3117}`);
  } else {
    next('router');
  }
});