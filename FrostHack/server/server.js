import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js"; 
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import accountRouter from "./routes/accountRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/transactions', transactionRouter);
app.use('api/v1/account', accountRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server Running on ${process.env.MODE} Mode at Port ${process.env.PORT}`);
});
