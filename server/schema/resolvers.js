const Post = require('../models/Post')

// Post.insertMany([
//   {
//     title: 'First Post',
//     body: 'Body of first post'
//   },
//   {
//     title: 'Second Post',
//     body: 'Body of second post'
//   }
// ]).then(() => console.log('posts created'))

const resolvers = {
  Query: {
    async getPosts() {
      const posts = await Post.find()

      return posts
    },
    getUser() {
      return {
        _id: 'adklafjdslfkjadslfkj',
        username: 'JD',
        email: 'jd@test.com',
        password: 'aldskfalsdkfjlkj',
        posts: [
          {
            title: 'Post One',
            body: 'Text about post one'
          },
          {
            title: 'Post Two',
            body: 'Text about post two'
          }
        ]
      }
    }
  },

  // Mutation: {
  //   test() {

  //   }
  // }
}

module.exports = resolvers