const express = require('express')

const app = express()
const PORT = process.env.PORT || 3333

const client = require('./config/client')

const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.json())

app.get('/api/test', (req, res) => {
  res.json({
    message: 'It works!'
  })
})


client.once('open', async () => {
  await server.start()

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log('Server started on port', PORT)
    console.log('GraphQL waiting at', server.graphqlPath)
  })
})

