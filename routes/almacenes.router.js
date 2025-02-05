const expres = require('express');
const router = expres.Router();

const { faker } = require('@faker-js/faker');

router.get('/', (req, res) => {
  res.send('Hola soy almacenes');
});

module.exports = router;
