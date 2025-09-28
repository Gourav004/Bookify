import express from"express"
import cors from "cors"
import mongoose from "mongoose"
import connectDB from "./config/connectDB.js";
import bookRoute from "./routes/book.routes.js"
import { port } from "./Constants/constant.js";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(express.json());

app.use(cors());
const PORT = port || 4000;

//defining routes
app.use("/book" , bookRoute);
app.use("/user" , userRoute);





//connect to DB
try {
    connectDB();
app.listen(PORT, ()=>{
    console.log( `Server is running on port ${PORT} ✅`)
})


} catch (error) {
    console.log("ERROR: " , error);
    
}

