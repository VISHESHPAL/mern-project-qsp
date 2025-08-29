import express  from 'express';
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import productRoutes from './routes/admin/product.routes.js';
import userRouter from './routes/user/user.routes.js';
import error from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import addressRoutes from './routes/shop/address.routes.js';
dotenv.config()



const app = express();
app.use(express.json())
app.use(cookieParser())


connectDB();

app.use("/api/v1/users",userRouter)
app.use("/api/v1/shop/addresses",addressRoutes)
app.use("/api/v1/products",productRoutes)

app.use(error);

app.get("/", (req, res) =>{
    res.send("API IS WORKING");
})
 
const port = process.env.PORT
app.listen(port , () =>{
    console.log("App is Listining on the PORT 3000")
})