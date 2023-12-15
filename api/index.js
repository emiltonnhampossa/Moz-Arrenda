const mongoose = require('mongoose');
const express = require('express')
const dotenv = require('dotenv');
const autheRouter = require('./routes/auth.route.js');
const userRouter = require('./routes/user.route.js');

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
  console.log('conectado com sucesso no MongoDB')
}).catch((err) =>{
  console(err)
})

const app = express()
const port = 4000

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/api/user",userRouter);
app.use("/api/auth",autheRouter);;

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode, 
    message,
  });
});

