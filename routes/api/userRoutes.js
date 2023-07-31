const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/students/:studentId/assignments
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
