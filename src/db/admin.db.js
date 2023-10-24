import mongoose from "mongoose";

//Function to create a new Mongoose instance 
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ajaimes:1001JAImes@myclutter.jdevuyo.mongodb.net/admin');
        console.log('DB connection established');
    } catch (error) {
        console.log(error); 
    }
}