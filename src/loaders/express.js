const bodyParser = require('body-parser');

const cors = require('cors');

const { routes } = require('../routes/index.js');

const { socketIo } = require('../socket.io/socket.io.js')

// const expressLoader

const corsOptions = {
  origin: process.env.HOST_DOMAIN,
  optionsSuccessStatus: 200
};

const expressLoader = async ({ app }) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(cors(corsOptions));
  app.use(cors());
  socketIo();
  routes(app);
  return app;
};

module.exports = {expressLoader};
