const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const qrCodeRoutes = require('./routes/qrCodeRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/rewardApp', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

app.use('/users', userRoutes);
app.use('/qrcodes', qrCodeRoutes);

app.listen(3000, () => console.log('Server Started'));


//http://localhost:3000/qrcodes/generate

// {
//     "code": "unique-code-7",
//     "points": 50
//   }


//http://localhost:3000/qrcodes/scan

// {
//     "code": "unique-code-1",
//     "userId": "<USER_ID>"
//   }


//http://localhost:3000/users/leaderboard

// http://localhost:3000/users/register

// {
//     "username": "john_doe",
//     "email": "john_doe@example.com",
//     "password": "mypassword"
//   }
  
  