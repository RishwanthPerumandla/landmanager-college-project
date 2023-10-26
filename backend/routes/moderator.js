//moderator.js
const express = require('express');
const router = express.Router();
const authRoleMiddleware = require('../middlewares/authRoleMiddleware');
const AssetController = require('../controllers/AssetController')
const ProfileController = require('../controllers/ProfileController')
const ProjectController = require('../controllers/ProjectController')


router.get("/profile", authRoleMiddleware(['MOD']), ProfileController.getUserDetails);
router.put("/profile", authRoleMiddleware(['MOD']), ProfileController.updateUserDetails);

router.get("/get-project-requests", authRoleMiddleware(['MOD']), ProjectController.getProjectRequests);
router.put("/assign-lm", authRoleMiddleware(['MOD']), ProjectController.assignLM);

module.exports = router;