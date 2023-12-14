const mongoose = require('mongoose');
const express = require('express')
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
  console.log('conectado com sucesso no MongoDB')
}).catch((err) =>{
  console(err)
})

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})