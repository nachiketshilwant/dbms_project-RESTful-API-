const { create, getUsers, getUsersbyUserId, updateUsers, deleteUsers, getUsersbyUserEmail } = require("./user.service.js");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
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
    getUsersbyUserId: (req, res) => {
        const id = req.params.id;
        getUsersbyUserId(id, (err, results) => {
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
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUsers(body, (err, results) => {
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
    deleteUsers: (req, res) => {
        const data = req.body;
        deleteUsers(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "user deleted successfully"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
       getUsersbyUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                // const jsontoken = sign({ result: results }, KEY, {
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: '1h'
                });
                return res.json({
                    success: 1,
                    message: "login successfuly",
                    token: jsontoken
                });
            }
            else {
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                });
            }
        });
    }

}
