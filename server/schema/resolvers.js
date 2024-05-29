const Post = require('../models/Post')
const { createToken } = require('../config/auth')

const resolvers = {
  Query: {
    async authenticate(_, args, context) {
      if (!context.req.user_id) return null

      // Use the User model to grab the user by req.user_id

      return {
        _id: 'jd1',
        username: 'JD',
        email: 'jd@test.com'
      }
    },

    async getPost(_, args, context) {
      const post = await Post.findById(args.post_id)

      return post
    },

    async getUserPosts(_, args, context) {
      if (!context.req.user_id) throw new Error('Not Authorized')

      // Actual code example with a User model
      // const user = await User.findById(context.req.user_id).populate('posts')

      // return user.posts

      // Dummy Example
      return [
        {
          title: 'JD Post 1',
          body: 'Body of post 1'
        },
        {
          title: 'JD Post 2',
          body: 'Body of post 2'
        }
      ]
    },

    async getPosts(_, args) {
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

  Mutation: {
    async loginUser(_, args, context) {
      // Doing the stand login thing where you find a user by email and then verify that their pass is correct
      // Once verified, then you create the token
      const token = createToken('jd1')

      context.res.cookie('token', token, {
        httpOnly: true
      })

      return {
        _id: 'jd1',
        username: 'JD'
      }
    },

    async createPost(_, args, context) {
      const post = await Post.create(args)

      return post
    }
  }
}

module.exports = resolvers