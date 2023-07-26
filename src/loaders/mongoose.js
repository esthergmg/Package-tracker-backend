// const express = require('express');

const mongoose = require('mongoose');
// const app = express();


const database =mongoose
  .connect(
    process.env.DB_NAME,

    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => {console.log('Connexion à MongoDB échouée !')
  process.exit();
});

module.exports = { database };
