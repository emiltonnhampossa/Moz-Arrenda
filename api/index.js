const mongoose = require('mongoose');
const express = require('express')
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.route.js');
const userRouter = require('./routes/user.route.js');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
  console.log('conectado com sucesso no MongoDB')
}).catch((err) =>{
  console.error(err)
})

const app = express()
const port = 4000

const corsOptions = {
  origin: 'http://localhost:3000', // ou a URL do seu site Next.js
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);;

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode, 
    message,
  });
});


app.use((req, res, next) => {
  console.log(`Recebida uma requisição em: ${new Date()}`);
  next(); 
});

