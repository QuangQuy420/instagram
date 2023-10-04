import mongoose, { Schema } from "mongoose";

const userScheme = new Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    nickname: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userScheme);