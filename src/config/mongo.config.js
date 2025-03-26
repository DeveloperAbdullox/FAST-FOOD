import mongoose from "mongoose"
import { config } from "dotenv";

config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB ulandi✅")
    } catch (error) {
        console.log("Database'ga ulanishda xatolik")
        process.exit(1)
    }
}

export default connectDB;