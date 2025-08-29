import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URI}/mernApp`);

    console.log(`DATABASE CONNECTED `, connect.connection.host)
  } catch (error) {
    console.log("Error in the connection of the database " , error)
  }
};

export default connectDB;
