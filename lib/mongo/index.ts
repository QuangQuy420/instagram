import mongoose from 'mongoose'

export default async function connectMongo () {
    const uri = "mongodb+srv://mongodb:123@instagram.n26oprw.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(uri);
}
