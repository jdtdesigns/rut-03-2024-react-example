require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3333

const cookieParser = require('cookie-parser')

const client = require('./config/client')

const auth_routes = require('./routes/auth_routes')

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', auth_routes)

client.once('open', () => {
  app.listen(PORT, () => console.log('Server started on port', PORT))
})

