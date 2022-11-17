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
    }
};