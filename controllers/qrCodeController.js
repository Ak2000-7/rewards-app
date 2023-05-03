const QRCode = require('qrcode');
const QRCodeModel = require('../models/qrCode');
const User = require('../models/user');

exports.generateQRCode = async (req, res) => {
  try {
    const qrCode = new QRCodeModel({
      code: req.body.code,
      points: req.body.points,
    });
    await qrCode.save();

    const qrCodeUrl = await QRCode.toDataURL(qrCode.code);
    res.json({ qrCodeUrl, qrCode });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.scanQRCode = async (req, res) => {
  try {
    const qrCode = await QRCodeModel.findOne({ code: req.body.code });

    if (qrCode == null) {
      return res.status(404).json({ message: 'QR code not found' });
    }

    const user = await User.findById(req.body.userId);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.points += qrCode.points;
    await user.save();

    res.json({ message: 'QR code scanned successfully', pointsEarned: qrCode.points, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
