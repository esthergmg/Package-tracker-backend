const express = require('express'); 
const { loaders } = require('./src/loaders/index.js');
const { database } = require('./src/loaders/mongoose.js');
// const { socketIo } = require('./src/socket.io/socket.io.js')

// const mongooseDb = mongoose.connect( process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true } )


async function startServer() {

  const app = express();
  await loaders({ expressApp: app });
  database
  .then(() => {
    app.listen(process.env.PORT, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Server is ready and running on port ${process.env.PORT}`);
    });
  });
}

startServer();