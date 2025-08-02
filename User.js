const { Schema, model } = require('mongoose');
const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
}, { timestamps: true });
module.exports = model('User', UserSchema);