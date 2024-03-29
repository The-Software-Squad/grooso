require("dotenv").config('./.env');
const express = require('express');
const cors = require('cors');
const app = express();
const todoRouter = require('./routes/todo.routes');
const userRouter = require('./routes/user.routes')
const connectDb = require('./db/mongoDb');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
        app.listen(process.env.SERVER_PORT || 3001, () => {
            console.log(`server listening at ${process.env.SERVER_PORT}`)
        })
    })
    .catch((err) => {
        console.error(err)
    })

