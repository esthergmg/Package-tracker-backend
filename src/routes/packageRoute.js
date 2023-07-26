const express = require('express');
const router = express.Router();

const packageCltr = require('../controllers/packageController');

router.post('/', packageCltr.createPackage);
router.get('/', packageCltr.findAllPackage);
router.get('/:id', packageCltr.findOnePackage);
router.put('/:id', packageCltr.updatePackage);
router.delete('/:id', packageCltr.deletePackage);

module.exports = router;
