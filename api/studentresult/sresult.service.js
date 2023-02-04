const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into t3(reg_no, result)
            values(?,?,?,?,?,?)`,
            [
                data.reg_no,
                data.result
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getsresult: callBack => {
        pool.query(
            `select reg_no, result from t3`,
            [],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getsresultbysresultId: (id, callBack) => {
        pool.query(
            `select reg_no, result from t3 where reg_no=?`,
            [reg_no],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updatesresult: (data, callBack) => {
        pool.query(
            `update t3 set result=? where reg_no=?`,
            [
                data.result,
                data.reg_no
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deletesresult: (data, callBack) => {
        pool.query(
            `delete from t3 where reg_no = ?`,
            [data.reg_no],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }

};
