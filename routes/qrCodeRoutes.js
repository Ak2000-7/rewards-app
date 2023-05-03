const express = require('express');
const router = express.Router();
const qrCodeController = require('../controllers/qrCodeController');

router.post('/generate', qrCodeController.generateQRCode);
router.post('/scan', qrCodeController.scanQRCode);

module.exports = router;



