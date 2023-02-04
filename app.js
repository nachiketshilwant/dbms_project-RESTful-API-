require("dotenv").config()
const express = require('express');
const app=express();
const userRouter = require("./api/users/user.route.js");
const sinfoRouter = require("./api/studentinfo/sinfo.route.js");
const sresultRouter = require("./api/studentresult/sresult.route.js");




app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/sinfo", sinfoRouter);
app.use("/api/sresult", sresultRouter);

app.listen(process.env.APP_PORT , ()=>{
    console.log("Server is up and running on PORT : ",process.env.APP_PORT);
});

