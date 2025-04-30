import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ankitkumar1301:qwerty123@cluster1.xxgfn6p.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}