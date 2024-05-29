const gql = String.raw

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
    authenticate: User,
    getPost(post_id: String!): Post
    getPosts: [Post]
    getUser: User,
    getUserPosts: [Post]
  }

  type Mutation {
    createPost(title: String!, body: String!): Post
    loginUser(email: String!, password: String!): User
  }
`

module.exports = typeDefs