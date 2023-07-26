/* eslint-disable import/extensions */

const deliveryRoutes = require('./deliveryRoute');
const packageRoutes = require('./packageRoute');


const routes = async app => {

  // Configurer les routes d'API REST
  app.use('/api/delivery', deliveryRoutes);
  app.use('/api/package', packageRoutes);
};

module.exports = { routes };
