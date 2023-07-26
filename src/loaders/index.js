const { expressLoader } = require('./express.js');

const loaders = async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');
};

module.exports = {loaders}