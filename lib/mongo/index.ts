import mongoose from 'mongoose'

export default async function connectMongo () {
    try {
        const URL:any = process.env.MONGO_URL;
        await mongoose.connect(URL);
        console.log('Connect mongoDB successfully!');
    } catch (error) {
        throw new Error('Cannot connect with MongoDB!!!');
    }
}
