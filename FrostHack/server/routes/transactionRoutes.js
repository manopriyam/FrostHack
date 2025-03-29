import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { transferMoney, generateTransactionPDF } from '../controllers/transactionController.js';

const router = express.Router();

router.post('/transfer', authMiddleware, transferMoney);
router.get('/transactions/pdf', authMiddleware, generateTransactionPDF);

export default router;
