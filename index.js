const server = require('./api/server');
const { PORT } = require('./config');

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}).on('error', (err) => {
  console.error(`Server error: ${err}`);
  process.exit(1);
});
