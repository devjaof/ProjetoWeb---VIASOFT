import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@cluster0.hhhkh.mongodb.net/viasoft")

const db = mongoose.connection;

export default db;