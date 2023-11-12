import mongoose from "mongoose"

const connectDB = async() => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB Connected To Host ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection Error", error);
    process.exit(1);
  }
}

export default connectDB;

