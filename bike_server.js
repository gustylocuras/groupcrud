const express = require('express')
const app = express()

app.listen(3000, (req, res) => {
  res.send('hello world')
})
