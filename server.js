require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    username: 'HunterW',
    email: 'hunter.wallen@generalassemb.ly'
  })
})


app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`)
})