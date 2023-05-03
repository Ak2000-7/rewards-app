// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.post('/', userController.createUser);
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUserPoints);
// router.get('/', userController.getLeaderboard);

// module.exports = router;


// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.get('/leaderboard', userController.getLeaderboard);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
