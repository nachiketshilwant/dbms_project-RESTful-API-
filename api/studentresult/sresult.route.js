const { createsresult,getsresult,getsresultbysresultId,updatesresult,deletesresult } = require("./sresult.controller.js");
const router = require("express").Router();
const {checkToken} = require("../../authorise/tokenVal")

router.post("/", checkToken, createsresult);
router.get("/", checkToken, getsresult);
router.get("/:id", checkToken, getsresultbysresultId);
router.patch("/", checkToken, updatesresult);
router.delete("/", checkToken, deletesresult);

module.exports = router;
