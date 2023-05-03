const mongoose = require('mongoose');

// const qrCodeSchema = new mongoose.Schema({
//   code: {
//     type: String,
//     required: true,
//   },
//   points: {
//     type: Number,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model('QRCode', qrCodeSchema);


const qrCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  points: { type: Number, required: true },
  location: {
      type: {
          type: String,
          enum: ['Point'],
          default: 'Point',
      },
      coordinates: {
          type: [Number],
          default: [0, 0],
      },
  },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('QRCode', qrCodeSchema);