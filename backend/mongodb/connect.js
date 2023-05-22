import mongoose from "mongoose";
export const connectDB = (url) => {
    mongoose.connect(url)
        .then(() => console.log('DB OK'))
        .catch((error) => console.log('DB ERR', error))
}