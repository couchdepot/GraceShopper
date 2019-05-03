const server = require('./app');
const { syncAndSeed } = require('./db');

const port = process.env.PORT || 3000;

syncAndSeed()
  .then(() => server.listen(port, () => console.log(`listening on port ${port}`)))
  .catch((err) => console.error(err));