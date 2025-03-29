// importing from libraries
import mongoose from "mongoose"; 


// function to connect to database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Succesfully Connected to MongoDB Database: ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
};


// exporting the function
export default connectDB;