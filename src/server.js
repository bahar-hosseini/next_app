const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/myroute', (req, res) => {
      res.end("Bahar's next app ");
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('server is running on http://localhost:3000');
    });
  })
  .catch((e) => {
    console.log(e.stack);
    process.exit(1);
  });
