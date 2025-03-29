// importing necessary libraries
import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to User model
            ref: "users",
            required: true,
        },
        balance: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

// exporting the mongodb model created from the given exampleSchema
export default mongoose.model("Account", accountSchema);
