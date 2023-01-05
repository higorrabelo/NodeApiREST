import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Higor:Higor120783@cluster0.psui0rs.mongodb.net/livrosnode");

let db = mongoose.connection;

export default db;