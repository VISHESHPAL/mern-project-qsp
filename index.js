import express  from 'express';
import dotenv from 'dotenv'
import cookieparser  from 'cookieparser'
dotenv.config()



const app = express();
app.use(express.json())
app.use(cookieparser())




app.get("/", (req, res) =>{
    res.send("API IS WORKING");
})

const port = process.env.PORT
app.listen(port , () =>{
    console.log("App is Listining on the PORT 3000")
})