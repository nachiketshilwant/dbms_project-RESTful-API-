const pool=require("../../config/database.js");

module.exports={
    create: (data, callBack) => {
        pool.query(
            `insert into t1(firstname, lastname, gender, email, password, number)
            values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (errors, results, fields) => {
                if(errors){
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id, firstname, lastname, gender, email, number from t1`,
            [],
            (errors, results, fields) => {
                if(errors){
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getUsersbyUserId: (id, callBack) => {
        pool.query(
            `select id, firstname, lastname, gender, email, number from t1 where id=?`,
            [id],
            (errors, results, fields) => {
                if(errors){
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUsers: (data, callBack) => {
        pool.query(
            `update t1 set firstname=?, lastname=?, gender=?, email=?, password=?, number=? where id=?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (errors, results, fields) => {
                if(errors){
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUsers: (data, callBack) => {
        pool.query(
            `delete from t1 where id=?`,
            [data.id],
            (errors, results, fields) => {
                if(errors){
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUsersbyUserEmail: (email, callBack) => {
        pool.query(
            `select * from t1 where email=?`,
            [email],
            (errors, results, fields) => {
                if(errors){
                    return callBack(errors);

                }
                return callBack(null, results[0]);
            }
        )
    }
    
};
