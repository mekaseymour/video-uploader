const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRouter = require('./backend/routes/api');

app.prepare().then(() => {
  const server = express();

  // Middleware to parse JSON
  server.use(express.json());

  server.use('/api', apiRouter);

  // Let Next.js handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});