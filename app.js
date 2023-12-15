const express = require('express');
const students = require('./routes/students')
const connectDB = require('./db/connect')
require('dotenv').config(   )

const app = express();

// app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/gts',students)

const port = 5500;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening to port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()