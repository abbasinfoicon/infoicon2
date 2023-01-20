import mongoose from "mongoose";

const ConnectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "blog",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(`Connection Successful on ${DATABASE_URL}`);
  } catch (error) {
    console.log("Database Connection Failed...!!!", error);
  }
};

export default ConnectDB;
