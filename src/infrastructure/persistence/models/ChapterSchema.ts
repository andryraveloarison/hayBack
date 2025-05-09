import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    order: { type: Number, default: 0 },

  },
  {
    toObject: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("Chapter", ChapterSchema);
