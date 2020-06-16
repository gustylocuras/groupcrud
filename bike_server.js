const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection


// Environment Variables
const mongoURI = 'mongodb://localhost:27017/meancrud'
const PORT = 3000

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(express.static('public'))
app.use(express.json())


app.listen(PORT, (req, res) => {
  console.log('listening...');
})

app.get('/', (req, res) => {
  res.send('hello world')
})
