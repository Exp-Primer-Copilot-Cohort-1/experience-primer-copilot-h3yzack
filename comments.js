// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// Create app
const app = express()
// Add other middlewares
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())
// Add route
app.get('/comments', (req, res) => {
  const comments = [
    {username: 'alice', content: 'first comment'},
    {username: 'bob', content: 'second comment'}
  ]
  res.send(comments)
})
// Listen to port 8081
app.listen(8081, () => {
  console.log('Listening on port 8081')
})