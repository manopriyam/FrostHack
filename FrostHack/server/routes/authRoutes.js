import express from 'express';
import { signup, signin, updateUser, getUsers } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.put('/', authMiddleware, updateUser);
router.get('/bulk', authMiddleware, getUsers);

export default router;