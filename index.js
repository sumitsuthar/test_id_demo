const newrelic = require('newrelic');
const express = require('express');
const app = express();
console.log("env are:", process.env.NEW_RELIC_LICENSE_KEY);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});