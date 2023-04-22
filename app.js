const express = require('express');
const app = express();

const connectDB = require('./DB/connectDB')

require('dotenv').config()

const router = require('./routes/routes')

app.use(express.static('./static'))
app.use(express.urlencoded({ extended: false}))

app.use('/api/v1', router)
app.use(express.json())



const port = process.env.port || 8080;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, `Server on port ${port}...`)
    } catch (error) {
        console.log(error);
    }
}

start()