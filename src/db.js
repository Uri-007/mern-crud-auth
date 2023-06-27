import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    try {
        await   mongoose.connect('mongodb+srv://urieluser:12345@cluster0.dcuhm9g.mongodb.net/merndb');
        console.log('Db esta conectada')
    } catch (error) {
        console.log(error)
    }

};