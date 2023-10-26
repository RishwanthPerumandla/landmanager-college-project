//auth.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

router.post('/user/sendotp', authController.sendOTP);
router.post(
    '/user/verifyotp',
    [
      check('phoneno').isMobilePhone('any', { strictMode: false }),
      check('hash').notEmpty(),
      check('otp').isLength({ min: 6, max: 6 }),
      check('notifToken').optional(),
    ],
    authController.verifyOTP
  );
router.get('/user/refresh', authController.refreshAccessToken);
// router.get('/user/logout', authController.logoutUser);

// Registration routes for different roles (ADM, MOD, LM)
router.post(
  '/user/register',
  [
    check('name').notEmpty(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    check('role').isIn(['ADM', 'MOD', 'LM']).not().isEmpty(),
  ],
  authController.register
);

// Registration routes for different roles (ADM, MOD, LM)
router.post(
  '/user/register',
  [
    check('name').notEmpty(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    check('role').isIn(['ADM', 'MOD', 'LM']).not().isEmpty(),
  ],
  authController.register
);

// Login route for all roles
router.post('/user/login', authController.login);

router.get('/user/refresh', authController.refreshAccessToken);
router.get('/user/logout', authController.logoutUser);
module.exports = router;
