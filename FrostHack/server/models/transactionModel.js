// importing necessary libraries
import mongoose from 'mongoose';


const transactionSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'users',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'users',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
}, {timestamps: true});


// exporting the mongodb model created from the given exampleSchema
export default mongoose.model('transactions', transactionSchema);