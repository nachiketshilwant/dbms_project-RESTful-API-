const { createsinfo,getsinfo,getsinfobysinfoId,updatesinfo,deletesinfo } = require("./sinfo.controller.js");
const router = require("express").Router();
const {checkToken} = require("../../authorise/tokenVal")

router.post("/", checkToken, createsinfo);
router.get("/", checkToken, getsinfo);
router.get("/:id", checkToken, getsinfobysinfoId);
router.patch("/", checkToken, updatesinfo);
router.delete("/", checkToken, deletesinfo);

module.exports = router;
