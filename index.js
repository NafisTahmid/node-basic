const express = require('express')
const app = express()
const port = 4000

app.get('/hello', (req, res) => {
  res.send('Hello MOM, I am learning Node.js!')
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})