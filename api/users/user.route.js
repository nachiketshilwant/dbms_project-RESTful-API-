const { createUser,getUsersbyUserId,getUsers,updateUsers,deleteUsers } = require("./user.controller.js");
const router = require("express").Router();

router.post("/",createUser);
router.get("/",getUsers);
router.get("/:id",getUsersbyUserId);
router.patch("/",updateUsers);
router.delete("/",deleteUsers);
router.post("/login")

module.exports = router;
