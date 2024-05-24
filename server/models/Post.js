const { model, Schema } = require('mongoose')

const postSchema = new Schema({
  title: String,
  body: String
})

const Post = model('Post', postSchema)

module.exports = Post