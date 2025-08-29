import express  from 'express';
import dotenv from 'dotenv'
import connectDB from './db/db.js';
dotenv.config()



const app = express();
app.use(express.json())


connectDB();



app.get("/", (req, res) =>{
    res.send("API IS WORKING");
})

const port = process.env.PORT
app.listen(port , () =>{
    console.log("App is Listining on the PORT 3000")
})