import mongoose, { Schema } from "mongoose";

const userScheme = new Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userScheme);