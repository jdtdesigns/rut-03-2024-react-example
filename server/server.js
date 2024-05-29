require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 3333

const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const { authenticate } = require('./config/auth')

const resolvers = require('./schema/resolvers')
const typeDefs = require('./schema/typeDefs')

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/graphql_first_db')

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()

  app.use(
    '/graphql',
    express.json(),
    cookieParser(),
    expressMiddleware(server, {
      context: authenticate
    })
  )

  app.listen(PORT, () => {
    console.log(`🚀 Express Server ready at`, PORT)

    console.log('GraphQL ready at /graphql')
  })
}

startServer()


