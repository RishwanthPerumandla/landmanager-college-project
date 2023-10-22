const express = require('express');
const router = express.Router();
const authRoleMiddleware = require('../middlewares/authRoleMiddleware');
const AssetController = require('../controllers/AssetController')
const ProfileController = require('../controllers/ProfileController')

router.get("/profile", authRoleMiddleware(['CSM']), ProfileController.getUserDetails);
router.put("/profile", authRoleMiddleware(['CSM']), ProfileController.updateUserDetails);

module.exports = router;