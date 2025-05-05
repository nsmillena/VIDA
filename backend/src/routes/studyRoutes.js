const express = require("express");
const router = express.Router();
const StudyRouteController = require("../controllers/StudyRouteController");
const auth = require("../middleware/auth.middleware");

router.post("/:userId", auth, StudyRouteController.createRoute);
router.get("/:userId", auth, StudyRouteController.getAllRoutes);
router.get("/getone/:id", auth, StudyRouteController.getRouteById);
router.patch("/topics/:id", auth, StudyRouteController.updateTopicCompletion);
router.patch("/:id", auth, StudyRouteController.updateRoute);
router.delete("/:id", auth, StudyRouteController.deleteRoute);

module.exports = router;
