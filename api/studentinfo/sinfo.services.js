const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into t2(reg_no, name, course)
            values(?,?,?,?,?,?)`,
            [
                data.reg_no,
                data.name,
                data.course
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getsinfo: callBack => {
        pool.query(
            `select reg_no, name, course from t2`,
            [],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getsinfobysinfoId: (id, callBack) => {
        pool.query(
            `select reg_no, name, course from t2 where reg_no=?`,
            [reg_no],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updatesinfo: (data, callBack) => {
        pool.query(
            `update t2 set name=?, course=? where reg_no=?`,
            [
                data.name,
                data.course,
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
    deletesinfo: (data, callBack) => {
        pool.query(
            `delete from t2 where reg_no = ?`,
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
