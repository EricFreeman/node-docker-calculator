'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
app.get('/add/:num1/:num2', (req, res) => {
  res.send('result: ' + getResult(req, (num1, num2) => num1 + num2));
});
app.get('/subtract/:num1/:num2', (req, res) => {
  res.send('result: ' + getResult(req, (num1, num2) => num1 - num2));
});
app.get('/multiply/:num1/:num2', (req, res) => {
  res.send('result: ' + getResult(req, (num1, num2) => num1 * num2));
});
app.get('/divide/:num1/:num2', (req, res) => {
  res.send('result: ' + getResult(req, (num1, num2) => num1 / num2));
});

function getResult(req, func) {
  const { num1, num2 } = req.params;
  let result = func(parseInt(num1), parseInt(num2));
  if (isNaN(result)) result = 'What tomfoolery is this?';
  return result;
}

app.listen(PORT);
console.log(`Running on port ${PORT}`);