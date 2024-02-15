import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: { type: String, require },
  username: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
}, { timestamps: true });
UserSchema.index({ username: 1 }, { unique: true })
UserSchema.index({ email: 1 }, { unique: true }) 