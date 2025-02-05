const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const alamacenesRouter = require('./almacenes.router');

function routerApi(app) {
  // aplicando la ruta Api V1
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/almacenes', alamacenesRouter);
}

module.exports = routerApi;
