const { Schema, model } = require('mongoose');
const SessionSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  tags: [String],
  json_file_url: String,
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });
module.exports = model('Session', SessionSchema);