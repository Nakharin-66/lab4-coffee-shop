const express = require('express');
const router = express.Router();
const { getAllCoffees, getCoffeeById, createCoffee, updateCoffee, deleteCoffee } = require('../controllers/coffeeController');

router.get('/coffee', getAllCoffees);
router.get('/coffee/:coffeeId', getCoffeeById);
router.post('/coffee', createCoffee);
router.put('/coffee/:coffeeId', updateCoffee);
router.delete('/coffee/:coffeeId', deleteCoffee);

module.exports = router;
