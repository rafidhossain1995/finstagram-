const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express(); 
const PORT = process.env.PORT
const path =  require('path')

const usersRouter = require('./Routes/userRoutes')
const postRouter = require('./Routes/postRoutes')
const commentsRouter = require('./Routes/commentRoutes')


app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/posts', postRouter);
app.use('/comments', commentsRouter)

app.use("/users", usersRouter)
app.use((err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json(err);
  }
});





app.listen(PORT, () => console.log("Listening", PORT));