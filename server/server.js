const express = require('express')

const app = express()
const PORT = process.env.PORT || 3333

const client = require('./config/client')

app.use(express.json())

app.get('/api/test', (req, res) => {
  res.json({
    message: 'It works!'
  })
})

client.once('open', () => {
  app.listen(PORT, () => console.log('Server started on port', PORT))
})

