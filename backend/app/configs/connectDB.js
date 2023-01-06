import mongoose from "mongoose";

const ConnectDB = (DATABASE_URL) => {
    try {
        const DB_OPTIONS = { dbName: 'blog' }
        mongoose.set('strictQuery', false);
        mongoose.connect(DATABASE_URL, DB_OPTIONS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
         });
        console.log(`Connection Successful on ${DATABASE_URL}`);
    } catch (error) {
        console.log('Database Connection Failed...!!!');
    }
}

export default ConnectDB;
