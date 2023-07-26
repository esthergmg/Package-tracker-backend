const express = require('express');
const router = express.Router();

const deliveryCltr = require('../controllers/deliveryController');

router.post('/', deliveryCltr.createDelivery);
router.get('/', deliveryCltr.findAllDelivery);
router.get('/:id', deliveryCltr.findOneDelivery);
router.put('/:id', deliveryCltr.updateDelivery);
router.delete('/:id', deliveryCltr.deleteDelivery);

module.exports = router;
