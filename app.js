const express = require('express');
const app = express();

app.use(express.static('./static'))
// app.use(express.urlencoded({ extended: false}))

const port = 3000;

app.listen(port, (req, res) => {
    console.log(`Server on port ${port}`);
})