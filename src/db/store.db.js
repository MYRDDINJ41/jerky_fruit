import mongoose from "mongoose";

//Function to create a new Mongoose instance 
export const storeDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ajaimes:1001JAImes@myclutter.jdevuyo.mongodb.net/store');
        console.log('DB connection established');
    } catch (error) {
        console.log(error); 
    }
}