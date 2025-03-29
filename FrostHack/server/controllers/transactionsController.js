// importing from files
import userModel from "../models/userModel.js";
import accountModel from "../models/accountModel.js";
import transactionModel from "../models/transactionModel.js";


// test function
export const testTransactions = async (req, res) => {
    try {
        return res.send({
            message: "Success in Test Controller!"
        });
    } catch (error) {
        return res.send({
            message: "Error in Test Controller!"
        });
    }
} 