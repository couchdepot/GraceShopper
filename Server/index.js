const server = require('./app')
// const { syncAndSeed } = require('./db') NOT CREATED YET

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`listening on port ${port}`))
