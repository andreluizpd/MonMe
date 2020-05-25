const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: 'true', msg: 'Show All Services Available' });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Display service ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: 'true', msg: 'Create new Service' });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: 'true', msg: `update service ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Remove service ${req.params.id}` });
});

module.exports = router;
