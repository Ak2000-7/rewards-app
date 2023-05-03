// const User = require('../models/user');

// exports.createUser = async (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     points: req.body.points,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.updateUserPoints = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     user.points = req.body.points;

//     await user.save();
//     res.json(user);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.getLeaderboard = async (req, res) => {
//   try {
//     const users = await User.find().sort({ points: -1 });
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// controllers/userController.js
const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ points: -1 }).limit(10);
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(204).json(null);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
