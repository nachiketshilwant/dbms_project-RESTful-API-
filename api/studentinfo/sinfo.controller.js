const { create, getsinfo, getsinfobysinfoId, updatesinfo, deletesinfo } = require("./sinfo.services.js");

module.exports = {
    createsinfo: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getsinfobysinfoId: (req, res) => {
        const id = req.params.reg_no;
        getsinfobysinfoId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getsinfo: (req, res) => {
        getsinfo((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updatesinfo: (req, res) => {
        const body = req.body;
        updatesinfo(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deletesinfo: (req, res) => {
        const data = req.body;
        deletesinfo(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "user deleted successfully"
            });
        });
    }

}
