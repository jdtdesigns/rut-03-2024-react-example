const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Post {
    _id: ID
    title: String
    body: String
  }

  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }

  type Query {
    getPost(post_id: String!): Post
    getPosts: [Post]
    getUser: User
  }

  type Mutation {
    createPost(title: String!, body: String!): Post
  }
`

module.exports = typeDefs