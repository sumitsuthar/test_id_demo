const newrelic = require('newrelic');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get("/rce/attack", (req, res) => {
    var payload = req.query["payload"];
    var cmd = payload;
    cp.exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(stdout.toString());
    });
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});