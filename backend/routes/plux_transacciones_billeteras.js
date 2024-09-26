const express = require('express');
const router = express.Router();
const { PluxTransaccionesBilleteras } = require('../models');

router.get('/', async (req, res) => {
  const transacciones = await PluxTransaccionesBilleteras.findAll();
  res.json(transacciones);
});

router.post('/', async (req, res) => {
  const nuevaTransaccion = await PluxTransaccionesBilleteras.create(req.body);
  res.json(nuevaTransaccion);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const transaccion = await PluxTransaccionesBilleteras.findByPk(id);
  if (transaccion) {
    await transaccion.update(req.body);
    res.json(transaccion);
  } else {
    res.status(404).send('Transacción no encontrada');
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const transaccion = await PluxTransaccionesBilleteras.findByPk(id);
  if (transaccion) {
    await transaccion.destroy();
    res.json({ mensaje: 'Transacción eliminada' });
  } else {
    res.status(404).send('Transacción no encontrada');
  }
});

module.exports = router;
