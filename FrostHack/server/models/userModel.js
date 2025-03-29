// importing necessary libraries
import mongoose from "mongoose";

// schema for the user collection
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 3,
            maxLength: 30,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50,
        },
    },
    { timestamps: true }
);

// exporting the mongodb model created from the given exampleSchema
export default mongoose.model("User", userSchema);
