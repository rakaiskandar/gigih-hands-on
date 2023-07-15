const express = require('express');
const transactionsController = require('../controllers/transactionsController');
const customersController = require('../controllers/customersController');
const router = express.Router();

router.get('/customers', customersController.get_customers);
router.post('/customers', customersController.add_customers);
router.get('/transactions', transactionsController.get_transactions);
router.post('/transactions', transactionsController.add_transactions);

module.exports = router;