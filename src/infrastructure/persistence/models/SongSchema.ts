import mongoose from "mongoose";

const SongSchema = new mongoose.Schema(
  {
    title:        { type: String, required: true },
    lyrics:       { type: String },
    author:       { type: String },
  },
  {
    timestamps: true, // <-- ajoute ceci
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

export default mongoose.model("Song", SongSchema);
