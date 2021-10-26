const express = require('express')

const path = require('path')

const app = express ()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

const port = process.env.port || 5000

app.listen(5000, () => console.log(`Over ${port}`))