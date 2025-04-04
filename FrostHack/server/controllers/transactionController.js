import mongoose from "mongoose";
import PDFDocument from "pdfkit";

import User from "../models/userModel.js";
import Account from "../models/accountModel.js";
import Transaction from "../models/transactionModel.js";
import Category from "../models/categoryModel.js";

export const transferMoney = async (req, res) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        const { amount, to, category = "unlabelled" } = req.body;

        // validate category from db
        const categoryExists = await Category.findOne({ name: category });
        if (!categoryExists) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid category" });
        }

        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        // update balances
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        // create transaction with category
        await Transaction.create([{ senderId: req.userId, receiverId: to, amount, category }], { session });

        await session.commitTransaction();
        res.json({ message: "Transfer successful", category });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: "Transfer failed due to an error", error: error.message });
    } finally {
        session.endSession();
    }
};

export const generateTransactionPDF = async (req, res) => {
    try {
        console.log("User ID:", req.userId);

        const transactions = await Transaction.find({
            $or: [{ senderId: req.userId }, { receiverId: req.userId }],
        }).populate({ path: "senderId receiverId", select: "username firstName lastName" });

        const doc = new PDFDocument({
            userPassword: process.env.PDF_PASSWORD,
            ownerPassword: process.env.PDF_PASSWORD,
            permissions: {
                printing: "highResolution",
                modifying: false,
                copying: false,
                annotating: false,
                fillingForms: false,
                contentAccessibility: false,
                documentAssembly: false,
            },
        });

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'attachment; filename="transactions.pdf"');
        doc.pipe(res);

        doc.fontSize(16).text("Transaction History", { align: "center" });
        doc.moveDown();
        doc.fontSize(12);

        if (!transactions.length) {
            doc.text("There are no transactions.", { align: "center" });
        } else {
            transactions.forEach((tx, index) => {
                const sender = `${tx.senderId.firstName} ${tx.senderId.lastName}`;
                const receiver = `${tx.receiverId.firstName} ${tx.receiverId.lastName}`;
                doc.text(`${index + 1}. Amount: ${tx.amount}`);
                doc.text(`   From: ${sender} (${tx.senderId.username})`);
                doc.text(`   To: ${receiver} (${tx.receiverId.username})`);
                doc.text(`   Date: ${new Date(tx.createdAt).toLocaleString()}`);
                doc.text(`   Category: ${tx.category}`);
                doc.moveDown();
            });
        }

        doc.end();
    } catch (error) {
        console.error("PDF Error:", error);
        res.status(500).json({ message: "Error generating PDF", error: error.message });
    }
};

