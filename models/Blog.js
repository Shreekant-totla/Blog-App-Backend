const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [{ text: String, author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }],
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
