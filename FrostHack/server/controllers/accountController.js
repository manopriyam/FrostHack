import express from 'express';
import Account from '../models/accountModel.js'; 

const router = express.Router();

export const getBalance = async (req, res) => {
    try {
        const account = await Account.findOne({ userId: req.userId });

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.json({ balance: account.balance });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching balance', error: error.message });
    }
}


export default router;