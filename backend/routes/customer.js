const express = require('express');
const router = express.Router();
const authRoleMiddleware = require('../middlewares/authRoleMiddleware');
const AssetController = require('../controllers/AssetController')
const ProfileController = require('../controllers/ProfileController')
const ProjectController = require('../controllers/ProjectController')

router.get("/profile", authRoleMiddleware(['CSM']), ProfileController.getUserDetails);
router.put("/profile", authRoleMiddleware(['CSM']), ProfileController.updateUserDetails);

router.get("/get-assets", authRoleMiddleware(['CSM']), AssetController.getAssetsbyUser);
router.post("/add-asset", authRoleMiddleware(['CSM']), AssetController.addAssets);
router.put("/update-asset", authRoleMiddleware(['CSM']), AssetController.updateAsset);
router.delete("/remove-asset", authRoleMiddleware(['CSM']), AssetController.removeAsset);

router.post("/project-request", authRoleMiddleware(['CSM']),ProjectController.createProjectRequest)
router.get("/get-projects", authRoleMiddleware(['CSM']), ProjectController.getProjects)
router.post("/close-project", authRoleMiddleware(['CSM']), ProjectController.closeProject)
router.get("/specific-project", authRoleMiddleware(['CSM']), ProjectController.getSpecificProject)
module.exports = router;