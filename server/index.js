const server = require('./app');
const { syncAndSeed } = require('./db');

const port = process.env.PORT || 3000;
const ip = process.env.IP || '0.0.0.0';

syncAndSeed()
  .then(() => server.listen(port, ip, () => console.log(`listening on port ${port}`)))
  .catch((err) => console.error(err));