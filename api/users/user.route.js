const { createUser,getUsersbyUserId,getUsers,updateUsers,deleteUsers,login } = require("./user.controller.js");
const router = require("express").Router();
const {checkToken} = require("../../authorise/tokenVal")

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUsersbyUserId);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUsers);
router.post("/login",login);

module.exports = router;
