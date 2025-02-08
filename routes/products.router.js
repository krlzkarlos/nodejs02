const express = require('express');
const router = express.Router();

const ProductService = require('./../services/product.service');

const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findeOne(id);

  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json([
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
