import mongoose, { Schema } from "mongoose";

const postScheme = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    caption: {
      type: String,
      required: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [String],
      default: [],
    },
}, { timestamps: true })

export default mongoose.models.Post || mongoose.model("Post", postScheme);