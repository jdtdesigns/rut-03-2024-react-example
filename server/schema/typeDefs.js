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
    getPosts: [Post]
    getUser: User
  }
`

module.exports = typeDefs