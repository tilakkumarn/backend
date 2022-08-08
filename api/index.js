 import express  from "express";
    import dotenv from "dotenv";
 import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

 const app = express();
 const port = 8800;
 dotenv.config()

// //this is connecting for mongodb attlas
// //user name: tilak  password: tilak
// // const connect = async () => {
// //     try {
// //       await mongoose.connect(process.env.MONGO);
// //       console.log("Connected to mongoDB.");
// //     } catch (error) {
// //         console.error(error.message);
// //         throw error;
// //     }
// //   };
// // mongoose.connection.on("disconnected", () => {
// //   console.log("mongoDB disconnected!");
// // });

// this is local mongodb connection

const mongoURI = "mongodb://localhost:27017/booking"
// this is local mongodb connection
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to local database!");
    })
}
  
//middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(port, ()=>{
    // connect();       //web db connection
    connectToMongo();
    console.log(`Connected to Backend at port ${port}!`);
})


// import express from "express";
// import mongoose from "mongoose";

// const app = express();
// const port = 5000;

// app.get("/", (req, res)=>{
//     res.send("hello welcome");
// })

// app.listen(port, ()=>{
//     console.log(`Backend started at ${port}`);
// })