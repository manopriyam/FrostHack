// import from libraries
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


// import from files
import connectDB from "./config/db.js"; 
import transactionRoutes from "./routes/transactionRoutes.js";


// load environment variables
dotenv.config();


// connect to database
connectDB();


// initialise express application
const app = express();


// middlewares
app.use(cors());
app.use(express.json());


// root api endpoint
app.get('/', (req, res) => {
    res.send({
        message: 'Server Reachable!'
    });
});


// api routes
app.use('/transactions', transactionRoutes);


// start the server
app.listen(process.env.PORT, () => {
    console.log(`Server Running on ${process.env.MODE} Mode at Port ${process.env.PORT}`);
});
