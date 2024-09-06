const express = require("express");

const router = express.Router();

const middleware = require("../middlewares/middleware");

const userController = require("../controllers/userController");

router.delete("/:name", middleware, userController.deleteUserByName);

router.get("/:name", userController.getUserByName);

router.get("/", userController.getAllUsers);

router.post("/newUser", middleware, userController.postUser);

router.post("/activity", middleware, userController.addActivityToUser);

module.exports = router;
