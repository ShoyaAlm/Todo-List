const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const connectDB = require('./DB/connectDB')

require('dotenv').config()


const router = require('./routes/routes')

app.use(express.static('./front/public'))
app.use(express.urlencoded({ extended: false}))

app.use('/api/v1', router)

app.use(express.json())


const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server on port ${port}...`) )
    } catch (error) {
        console.log(error);
    }
}

start()