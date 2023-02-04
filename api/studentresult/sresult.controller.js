const { create, getsresult, getsresultbysresultId, updatesresult, deletesresult } = require("./sresult.service.js");

module.exports = {
    createsresult: (req, res) => {
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
    getsresultbysresultId: (req, res) => {
        const id = req.params.reg_no;
        getsresultbysresultId(id, (err, results) => {
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
    getsresult: (req, res) => {
        getsresult((err, results) => {
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
    updatesresult: (req, res) => {
        const body = req.body;
        updatesresult(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Updation fail"
                });
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deletesresult: (req, res) => {
        const data = req.body;
        deletesresult(data, (err, results) => {
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
