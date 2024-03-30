require("dotenv").config('./.env');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const todoRouter = require('./routes/todo.routes');
const userRouter = require('./routes/user.routes');
const connectDb = require('./db/mongoDb');
const port = process.env.SERVER_PORT || 3001

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//corss Origin Resource Sharing
app.use(cors());



//this is for router
app.use("/todo", todoRouter);
app.use('/user',userRouter);


app.get('/', (req, res) => {
    res.send('Hello world!!');
})

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`server listening at ${port}`)
        })
    })
    .catch((err) => {
        console.error(err)
    })

