import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to User model
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to User model
            ref: "User",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Category"
        },
    },
    { timestamps: true }
);

// exporting the mongodb model created from the given exampleSchema
export default mongoose.model("Transaction", transactionSchema);
