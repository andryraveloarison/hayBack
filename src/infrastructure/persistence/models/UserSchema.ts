import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  online:   { type: Boolean, default: false },
  type:     { type: String, enum: ["admin", "prof", "etudiant"], required: true },
  school:   { type: String, required: false }
});

export default mongoose.model("User", UserSchema);
