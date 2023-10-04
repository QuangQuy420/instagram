import mongoose, { Schema } from "mongoose";

const postScheme = new Schema({
    quantityLike: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.models.Post || mongoose.model("Post", postScheme);