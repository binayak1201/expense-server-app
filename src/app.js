const express=require("express");
const dbConnect=require('./config/dbConnect.js');
const { registerUser } = require("./controllers/users/usersCtrl.js");
const userRoute = require("./routes/users/usersRoute.js");
const { errorHandler,notFound } = require("./middlewares/errorMiddleware.js");
const app=express();
//dbConnect
dbConnect();
//middleware
app.use(express.json());
//routes
app.use('/api/users',userRoute);
//error
app.use(notFound);
app.use(errorHandler);
module.exports=app;
//mongodb+srv://binayaksingh14:<password>@expenses-tracker.eqbb0sf.mongodb.net/?retryWrites=true&w=majority