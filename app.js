const express = require('express');
const app = express();

require('dotenv').config()

const router = require('./routes/routes')

app.use(express.static('./static'))
// app.use(express.urlencoded({ extended: false}))

app.use('/api/v1', router)
app.use(express.json())

const port = 3000;


app.listen(port, (req, res) => {
    console.log(`Server on port ${port}`);
})