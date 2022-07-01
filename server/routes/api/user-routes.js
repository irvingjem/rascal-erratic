const router = require('express').Router();

const {
  createUser,
  getSingleUser,
  login,
  saveMint,
  deleteMint,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, savedNfts);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);
// Build this for Mints
// router.route('/mints/:mintId').delete(authMiddleware, deleteMint);

module.exports = router;


