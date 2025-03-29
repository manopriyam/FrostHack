import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js"; 
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import accountRouter from "./routes/accountRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config(); 

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/transactions', transactionRouter);
app.use('/api/v1/account', accountRouter);
app.use("/api/v1/categories", categoryRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.MODE || "development"} Mode at Port ${PORT}`);
});
