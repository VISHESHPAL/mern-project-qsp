import express  from 'express';
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import productRoutes from './routes/admin/product.routes.js';
import userRouter from './routes/user/user.routes.js';
dotenv.config()



const app = express();
app.use(express.json())


connectDB();


app.use("/api/v1/users",userRouter)
app.use("/api/v1/address ",productRoutes)
app.use("/api/v1/products",productRoutes)


app.get("/", (req, res) =>{
    res.send("API IS WORKING");
})
 
const port = process.env.PORT
app.listen(port , () =>{
    console.log("App is Listining on the PORT 3000")
})