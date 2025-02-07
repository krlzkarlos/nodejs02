const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

router.get('/', (req, res) => {
  const categories = [];

  for (let index = 0; index < 100; index++) {
    categories.push({
      name: faker.company.name(),
      type: faker.commerce.department(),
    });
  }

  res.json(categories);
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json([
    {
      message: 'Created',
      data: body,
    },
  ]);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;

  res.json([
    {
      message: 'Update',
      id: id,
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

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json([
    {
      categoryId,
      productId,
    },
  ]);
});

module.exports = router;
