import mongoose from "mongoose";

const LevelSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true },
    description: { type: String },
    serie:       { type: String },
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

export default mongoose.model("Level", LevelSchema);
