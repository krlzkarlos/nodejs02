const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

router.get('/', (req, res) => {
  const products = [];

  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }

  const size = parseInt(req.query.size, 10); // Intentar convertir size a número
  const response = size ? products.slice(0, size) : products; // Si no hay size, devolver todos

  res.json(response);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json([
    {
      id: id,
      name: 'Pruducto 1',
      price: 1000,
    },
  ]);
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json([
    {
      message: 'Created',
      body,
    },
  ]);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json([
    {
      message: 'update',
      data: body,
      id,
    },
  ]);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json([
    {
      message: 'Delete',
      id: id,
    },
  ]);
});

module.exports = router;
