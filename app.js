require("dotenv").config()
const express = require('express');
const app=express();
const userRouter = require("./api/users/user.route.js")


// app.get("/api", (req,res)=>{
//     res.json({
//         success: 1,
//         message: "This is rest api working"
//     });
// });

app.use(express.json());
app.use("/api/users", userRouter);

// app.listen(process.env.APP_PORT , ()=>{
//     console.log("Server is up and running on PORT : ",process.env.APP_PORT);
// });

app.listen(3000 , ()=>{
    console.log("Server is up and running on PORT : ",3000);
});