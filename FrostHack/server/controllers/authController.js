import User from '../models/userModel.js' 
import Account from '../models/accountModel.js'
import jwt from 'jsonwebtoken';
import { signupSchema, signinSchema, updateSchema } from '../validators/authValidator.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
    try {
        const { success } = signupSchema.safeParse(req.body);
        if (!success) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        const existingUser = await User.exists({ username: req.body.username });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already taken' });
        }

        const user = await User.create({
            username: req.body.username,
            password: req.body.password, // Storing password as plaintext
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        
        await Account.create({ userId: user._id, balance: 10000 + Math.random() * 10000 });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({ message: 'User created successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const signin = async (req, res) => {
    try {
        const { success } = signinSchema.safeParse(req.body);
        if (!success) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        const user = await User.findOne({ username: req.body.username });
        if (!user || user.password !== req.body.password) { // Plaintext password comparison
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { success } = updateSchema.safeParse(req.body);
        if (!success) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        await User.updateOne({ _id: req.userId }, req.body);
        res.json({ message: 'Updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const filter = req.query.filter || '';
        const users = await User.find({
            $or: [
                { firstName: { $regex: filter, $options: 'i' } },
                { lastName: { $regex: filter, $options: 'i' } }
            ]
        });

        res.json({ users: users.map(({ username, firstName, lastName, _id }) => ({ username, firstName, lastName, _id })) });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};